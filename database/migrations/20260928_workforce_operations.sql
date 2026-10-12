-- Private workforce operations for businesses using sge.org.in.
-- Apply once to the shared amcmep PostgreSQL database through the approved
-- migration runner. This migration deliberately does not expose any data to
-- the public SGE website.

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS workforce_people (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  legal_name text NOT NULL,
  preferred_name text,
  phone text,
  email text,
  date_of_birth date,
  status text NOT NULL DEFAULT 'active'
    CHECK (status IN ('active', 'inactive', 'archived')),
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS workforce_people_email_unique
  ON workforce_people (lower(email)) WHERE email IS NOT NULL;
CREATE UNIQUE INDEX IF NOT EXISTS workforce_people_phone_unique
  ON workforce_people (phone) WHERE phone IS NOT NULL;

CREATE TABLE IF NOT EXISTS work_sites (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id uuid NOT NULL REFERENCES businesses(id),
  name text NOT NULL,
  code text,
  address text,
  latitude numeric(10, 7),
  longitude numeric(10, 7),
  status text NOT NULL DEFAULT 'active'
    CHECK (status IN ('active', 'inactive', 'archived')),
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_by_user_id uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (business_id, name)
);

CREATE TABLE IF NOT EXISTS cost_centers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id uuid NOT NULL REFERENCES businesses(id),
  code text NOT NULL,
  name text NOT NULL,
  status text NOT NULL DEFAULT 'active'
    CHECK (status IN ('active', 'inactive', 'archived')),
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_by_user_id uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (business_id, code)
);

CREATE TABLE IF NOT EXISTS workforce_engagements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id uuid NOT NULL REFERENCES businesses(id),
  person_id uuid NOT NULL REFERENCES workforce_people(id),
  person_type text NOT NULL
    CHECK (person_type IN ('employee', 'wage_worker', 'contractor', 'vendor_contact')),
  role_title text NOT NULL,
  department text,
  reporting_user_id uuid,
  default_work_site_id uuid REFERENCES work_sites(id),
  default_cost_center_id uuid REFERENCES cost_centers(id),
  start_date date NOT NULL,
  end_date date,
  status text NOT NULL DEFAULT 'active'
    CHECK (status IN ('active', 'on_leave', 'inactive', 'archived')),
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_by_user_id uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CHECK (end_date IS NULL OR end_date >= start_date)
);

CREATE INDEX IF NOT EXISTS workforce_engagements_business_status_idx
  ON workforce_engagements (business_id, status);
CREATE INDEX IF NOT EXISTS workforce_engagements_person_idx
  ON workforce_engagements (person_id);

CREATE TABLE IF NOT EXISTS workforce_documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id uuid NOT NULL REFERENCES businesses(id),
  person_id uuid NOT NULL REFERENCES workforce_people(id),
  engagement_id uuid REFERENCES workforce_engagements(id),
  document_type text NOT NULL,
  document_number_encrypted text,
  media_object_key text NOT NULL,
  expires_on date,
  status text NOT NULL DEFAULT 'valid'
    CHECK (status IN ('valid', 'expired', 'revoked', 'archived')),
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_by_user_id uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS workforce_documents_expiry_idx
  ON workforce_documents (business_id, expires_on) WHERE expires_on IS NOT NULL;

CREATE TABLE IF NOT EXISTS attendance_records (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id uuid NOT NULL REFERENCES businesses(id),
  engagement_id uuid NOT NULL REFERENCES workforce_engagements(id),
  work_site_id uuid REFERENCES work_sites(id),
  cost_center_id uuid REFERENCES cost_centers(id),
  attendance_date date NOT NULL,
  status text NOT NULL DEFAULT 'pending'
    CHECK (status IN ('present', 'absent', 'half_day', 'leave', 'holiday', 'weekly_off', 'on_duty', 'pending')),
  check_in_at timestamptz,
  check_out_at timestamptz,
  recorded_minutes integer NOT NULL DEFAULT 0 CHECK (recorded_minutes >= 0),
  approved_minutes integer NOT NULL DEFAULT 0 CHECK (approved_minutes >= 0),
  approval_status text NOT NULL DEFAULT 'pending'
    CHECK (approval_status IN ('pending', 'approved', 'rejected')),
  approved_by_user_id uuid,
  approved_at timestamptz,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_by_user_id uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (engagement_id, attendance_date)
);

CREATE INDEX IF NOT EXISTS attendance_records_business_date_idx
  ON attendance_records (business_id, attendance_date DESC);
CREATE INDEX IF NOT EXISTS attendance_records_approval_idx
  ON attendance_records (business_id, approval_status, attendance_date DESC);

CREATE TABLE IF NOT EXISTS attendance_adjustments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  attendance_record_id uuid NOT NULL REFERENCES attendance_records(id),
  requested_by_user_id uuid NOT NULL,
  requested_status text,
  requested_minutes integer CHECK (requested_minutes IS NULL OR requested_minutes >= 0),
  reason text NOT NULL,
  status text NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'approved', 'rejected', 'cancelled')),
  reviewed_by_user_id uuid,
  reviewed_at timestamptz,
  review_note text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS leave_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id uuid NOT NULL REFERENCES businesses(id),
  engagement_id uuid NOT NULL REFERENCES workforce_engagements(id),
  leave_type text NOT NULL,
  start_date date NOT NULL,
  end_date date NOT NULL,
  reason text,
  status text NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'approved', 'rejected', 'cancelled')),
  reviewed_by_user_id uuid,
  reviewed_at timestamptz,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CHECK (end_date >= start_date)
);

CREATE INDEX IF NOT EXISTS leave_requests_business_dates_idx
  ON leave_requests (business_id, start_date, end_date);

CREATE TABLE IF NOT EXISTS pay_schedules (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id uuid NOT NULL REFERENCES businesses(id),
  engagement_id uuid NOT NULL REFERENCES workforce_engagements(id),
  pay_basis text NOT NULL
    CHECK (pay_basis IN ('monthly', 'daily', 'hourly', 'milestone', 'invoice')),
  rate numeric(14, 2) NOT NULL CHECK (rate >= 0),
  currency char(3) NOT NULL DEFAULT 'INR',
  overtime_rate numeric(14, 2) CHECK (overtime_rate IS NULL OR overtime_rate >= 0),
  effective_from date NOT NULL,
  effective_to date,
  status text NOT NULL DEFAULT 'active'
    CHECK (status IN ('active', 'superseded', 'archived')),
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  approved_by_user_id uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CHECK (effective_to IS NULL OR effective_to >= effective_from)
);

CREATE INDEX IF NOT EXISTS pay_schedules_effective_idx
  ON pay_schedules (business_id, engagement_id, effective_from DESC);

CREATE TABLE IF NOT EXISTS payroll_periods (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id uuid NOT NULL REFERENCES businesses(id),
  period_start date NOT NULL,
  period_end date NOT NULL,
  status text NOT NULL DEFAULT 'draft'
    CHECK (status IN ('draft', 'review', 'approved', 'locked', 'cancelled')),
  approved_by_user_id uuid,
  approved_at timestamptz,
  locked_by_user_id uuid,
  locked_at timestamptz,
  created_by_user_id uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CHECK (period_end >= period_start),
  UNIQUE (business_id, period_start, period_end)
);

CREATE TABLE IF NOT EXISTS payroll_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  payroll_period_id uuid NOT NULL REFERENCES payroll_periods(id),
  business_id uuid NOT NULL REFERENCES businesses(id),
  engagement_id uuid NOT NULL REFERENCES workforce_engagements(id),
  cost_center_id uuid REFERENCES cost_centers(id),
  working_days numeric(6, 2) NOT NULL DEFAULT 0 CHECK (working_days >= 0),
  approved_minutes integer NOT NULL DEFAULT 0 CHECK (approved_minutes >= 0),
  base_amount numeric(14, 2) NOT NULL DEFAULT 0,
  overtime_amount numeric(14, 2) NOT NULL DEFAULT 0,
  allowance_amount numeric(14, 2) NOT NULL DEFAULT 0,
  deduction_amount numeric(14, 2) NOT NULL DEFAULT 0,
  advance_recovery_amount numeric(14, 2) NOT NULL DEFAULT 0,
  net_payable numeric(14, 2) NOT NULL DEFAULT 0,
  paid_amount numeric(14, 2) NOT NULL DEFAULT 0 CHECK (paid_amount >= 0),
  currency char(3) NOT NULL DEFAULT 'INR',
  payment_status text NOT NULL DEFAULT 'unpaid'
    CHECK (payment_status IN ('unpaid', 'partially_paid', 'paid', 'on_hold')),
  status text NOT NULL DEFAULT 'draft'
    CHECK (status IN ('draft', 'review', 'approved', 'locked', 'cancelled')),
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (payroll_period_id, engagement_id)
);

CREATE INDEX IF NOT EXISTS payroll_entries_business_status_idx
  ON payroll_entries (business_id, payment_status);

CREATE TABLE IF NOT EXISTS vendor_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id uuid NOT NULL REFERENCES businesses(id),
  legal_name text NOT NULL,
  trade_name text,
  category text,
  phone text,
  email text,
  tax_identifier_encrypted text,
  status text NOT NULL DEFAULT 'active'
    CHECK (status IN ('active', 'blocked', 'archived')),
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_by_user_id uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (business_id, legal_name)
);

CREATE TABLE IF NOT EXISTS vendor_contacts (
  vendor_id uuid NOT NULL REFERENCES vendor_profiles(id),
  person_id uuid NOT NULL REFERENCES workforce_people(id),
  role_title text,
  is_primary boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (vendor_id, person_id)
);

CREATE TABLE IF NOT EXISTS contractor_contracts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id uuid NOT NULL REFERENCES businesses(id),
  engagement_id uuid NOT NULL REFERENCES workforce_engagements(id),
  work_site_id uuid REFERENCES work_sites(id),
  contract_number text NOT NULL,
  scope text NOT NULL,
  contract_value numeric(14, 2) NOT NULL DEFAULT 0 CHECK (contract_value >= 0),
  currency char(3) NOT NULL DEFAULT 'INR',
  starts_on date NOT NULL,
  ends_on date,
  status text NOT NULL DEFAULT 'draft'
    CHECK (status IN ('draft', 'active', 'completed', 'terminated', 'archived')),
  media_object_key text,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_by_user_id uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (business_id, contract_number),
  CHECK (ends_on IS NULL OR ends_on >= starts_on)
);

CREATE TABLE IF NOT EXISTS vendor_bills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id uuid NOT NULL REFERENCES businesses(id),
  vendor_id uuid NOT NULL REFERENCES vendor_profiles(id),
  work_site_id uuid REFERENCES work_sites(id),
  cost_center_id uuid REFERENCES cost_centers(id),
  bill_number text NOT NULL,
  bill_date date NOT NULL,
  due_date date,
  subtotal_amount numeric(14, 2) NOT NULL DEFAULT 0,
  tax_amount numeric(14, 2) NOT NULL DEFAULT 0,
  total_amount numeric(14, 2) NOT NULL DEFAULT 0,
  paid_amount numeric(14, 2) NOT NULL DEFAULT 0 CHECK (paid_amount >= 0),
  currency char(3) NOT NULL DEFAULT 'INR',
  status text NOT NULL DEFAULT 'draft'
    CHECK (status IN ('draft', 'submitted', 'approved', 'partially_paid', 'paid', 'rejected', 'cancelled')),
  media_object_key text,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_by_user_id uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (business_id, vendor_id, bill_number)
);

CREATE TABLE IF NOT EXISTS expense_claims (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id uuid NOT NULL REFERENCES businesses(id),
  engagement_id uuid NOT NULL REFERENCES workforce_engagements(id),
  work_site_id uuid REFERENCES work_sites(id),
  cost_center_id uuid REFERENCES cost_centers(id),
  expense_date date NOT NULL,
  category text NOT NULL,
  amount numeric(14, 2) NOT NULL CHECK (amount >= 0),
  currency char(3) NOT NULL DEFAULT 'INR',
  receipt_object_key text,
  status text NOT NULL DEFAULT 'submitted'
    CHECK (status IN ('draft', 'submitted', 'approved', 'reimbursed', 'rejected', 'cancelled')),
  reviewed_by_user_id uuid,
  reviewed_at timestamptz,
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS payment_transactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id uuid NOT NULL REFERENCES businesses(id),
  payroll_entry_id uuid REFERENCES payroll_entries(id),
  vendor_bill_id uuid REFERENCES vendor_bills(id),
  expense_claim_id uuid REFERENCES expense_claims(id),
  payee_type text NOT NULL CHECK (payee_type IN ('person', 'vendor')),
  payee_id uuid NOT NULL,
  amount numeric(14, 2) NOT NULL CHECK (amount > 0),
  currency char(3) NOT NULL DEFAULT 'INR',
  payment_method text NOT NULL
    CHECK (payment_method IN ('upi', 'bank_transfer', 'cash', 'cheque', 'other')),
  payment_reference text,
  paid_at timestamptz NOT NULL DEFAULT now(),
  status text NOT NULL DEFAULT 'completed'
    CHECK (status IN ('pending', 'completed', 'failed', 'reversed')),
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_by_user_id uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  CHECK (
    ((payroll_entry_id IS NOT NULL)::integer + (vendor_bill_id IS NOT NULL)::integer + (expense_claim_id IS NOT NULL)::integer) <= 1
  )
);

CREATE INDEX IF NOT EXISTS payment_transactions_business_paid_idx
  ON payment_transactions (business_id, paid_at DESC);

CREATE TABLE IF NOT EXISTS workforce_audit_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id uuid NOT NULL REFERENCES businesses(id),
  actor_user_id uuid,
  entity_type text NOT NULL,
  entity_id uuid NOT NULL,
  action text NOT NULL,
  before_data jsonb,
  after_data jsonb,
  reason text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS workforce_audit_log_entity_idx
  ON workforce_audit_log (business_id, entity_type, entity_id, created_at DESC);
