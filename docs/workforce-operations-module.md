# SGE Workforce Operations Module

## Purpose

This module is a private back-office area within `sge.org.in`. It manages the
people, attendance, payables, vendors, sites, and approvals that support a
business. It is not part of the public website or the AMC MEP mobile app.

The source of truth remains the shared `amcmep` PostgreSQL database. Every
business-owned row is scoped by `business_id`, referencing `businesses.id`.
This permits Shree Ganesh Enterprises and any future business to use the same
module without exposing one business's records to another.

## Private Web Area

Use these routes once authentication is implemented:

| Route | Purpose | Minimum permission |
| --- | --- | --- |
| `/workspace` | Operations overview and business selector | `workforce.view` |
| `/workspace/people` | People, engagements, documents | `workforce.view` |
| `/workspace/attendance` | Daily attendance and approval queue | `attendance.manage` |
| `/workspace/payroll` | Payroll periods, entries, payment register | `payroll.manage` |
| `/workspace/vendors` | Vendor profiles, contracts, bills | `vendor.manage` |
| `/workspace/sites` | Work sites and cost centres | `site.manage` |

The public SGE header must not link to these pages. Unauthenticated visitors
are redirected to sign-in; authenticated users without membership are shown an
access-denied page. A signed-in user can only select businesses where
`business_memberships.status = 'active'`.

## Login And Access

Use the existing AMC MEP identity service for SGE sign-in. Do not create a
separate username/password system or store password hashes in the SGE project.

1. SGE sends the user to the AMC MEP sign-in flow.
2. The authenticated identity is validated server-side by an SGE route handler.
3. SGE reads `business_memberships` for that user and lists only permitted
   businesses in the workspace selector.
4. Each API route derives `user_id` from the server session, receives a
   `business_id`, and verifies the requested permission before querying data.
5. A change of business updates the URL and server-side workspace context.

Recommended membership roles:

| Role | Capabilities |
| --- | --- |
| `owner` | All business data, settings, approvals, and payment release |
| `operations_manager` | People, sites, attendance and operational approvals |
| `hr_manager` | People, documents, leave, attendance and payroll preparation |
| `accounts_manager` | Payroll approval, vendor bills and payment recording |
| `site_supervisor` | Attendance for assigned sites only; no payroll or bank data |
| `viewer` | Read-only operational reports without financial details |

Store fine-grained permissions in `business_memberships.permissions` as a JSON
array, for example `['attendance.manage', 'payroll.view']`. Roles are the
default; permissions provide a controlled exception.

## Database Tables

### People And Engagements

| Table | Key fields | Notes |
| --- | --- | --- |
| `workforce_people` | `id`, legal/preferred name, phone, email, status | One reusable person record; no `business_id` here. |
| `workforce_engagements` | `id`, `business_id`, `person_id`, `person_type`, role, start/end dates, pay basis | Links a person to a business. |
| `workforce_documents` | `id`, `person_id`, `business_id`, document type, media object, expiry | ID, certification, contract, compliance record. |

Allowed `person_type` values: `employee`, `wage_worker`, `contractor`, and
`vendor_contact`. A person may have multiple engagements, even across separate
businesses, but each engagement carries its own role and pay terms.

### Attendance And Leave

| Table | Key fields | Notes |
| --- | --- | --- |
| `work_sites` | `id`, `business_id`, name, address, active | Attendance and cost allocation site. |
| `attendance_records` | `business_id`, `engagement_id`, `work_site_id`, `attendance_date`, status, times, hours | One record per engagement per date. |
| `attendance_adjustments` | `attendance_record_id`, requested/approved values, reason, approver | Append-only correction and approval history. |
| `leave_requests` | `business_id`, `engagement_id`, dates, leave type, status, approver | Leave must affect the payroll calculation only after approval. |

Attendance statuses: `present`, `absent`, `half_day`, `leave`, `holiday`,
`weekly_off`, `on_duty`, `pending`. Keep check-in/check-out, total approved
minutes, source, and approval state as normal columns. Location coordinates,
notes, and device context may go in a small `metadata` JSONB field.

### Pay, Contractors And Vendors

| Table | Key fields | Notes |
| --- | --- | --- |
| `pay_schedules` | `engagement_id`, pay basis, rate, effective dates | Daily, monthly, hourly, milestone, or invoice basis. |
| `payroll_periods` | `business_id`, period month, status, locked timestamp | One monthly period per business. |
| `payroll_entries` | `payroll_period_id`, `engagement_id`, payable totals, status | Generated calculation, then approved and paid. |
| `payment_transactions` | `business_id`, payee type/id, amount, method, payment reference | Supports salary, advances, contractor and vendor payments. |
| `contractor_contracts` | `business_id`, `engagement_id`, scope, rate card, dates, status | Agreement and milestone terms. |
| `vendor_profiles` | `business_id`, organization name, contacts, tax identifiers, status | Vendor is an organisation, separate from its contacts. |
| `vendor_bills` | `business_id`, `vendor_id`, bill number/date, tax, due date, status | Never place invoice amounts in metadata. |
| `cost_centers` | `business_id`, code, name, status | Assign labour, bills and payments to departments or projects. |
| `expense_claims` | `business_id`, `engagement_id`, amount, receipt, approval status | Employee/contractor reimbursements. |

## Monthly Payroll Flow

1. Create one `payroll_periods` row per business and calendar month.
2. Supervisors submit daily attendance; managers approve adjustments and leave.
3. Generate `payroll_entries` from approved attendance plus the effective
   `pay_schedules` rate.
4. Accounts reviews the totals, deductions, advances, overtime and net payable.
5. An authorised approver locks the period.
6. `payment_transactions` record actual payment references and partial payments.
7. A locked period is never recalculated in place. A correction uses an approved
   adjustment or a separate correction entry, preserving the audit trail.

`payroll_entries` should have structured monetary fields:

- `base_amount`
- `overtime_amount`
- `allowance_amount`
- `deduction_amount`
- `advance_recovery_amount`
- `net_payable`
- `paid_amount`
- `payment_status`

Store currency as `INR` and money as `numeric(14,2)`, never floating point.

## Metadata Rules

Use real columns for anything searched, filtered, approved, reported, or used
to calculate pay. This includes IDs, dates, statuses, rates, hours, amounts,
bank references, and tax information.

Use `metadata JSONB` only for optional evolving data, such as:

- Emergency contact details
- Uniform size and issued equipment
- Skills, licences and certification attributes
- Site-specific check-in evidence
- Internal notes and custom fields

Bank account, UPI IDs, PAN/Aadhaar, and identity documents are sensitive. Store
only encrypted values or protected document references, enforce a restricted
permission, and never return them to ordinary workspace viewers.

## Required Safety Controls

- Every business table has `business_id`, `created_at`, `updated_at`, and
  `created_by_user_id`.
- Financial changes and attendance corrections have an audit trail table with
  actor, time, before/after values, and reason.
- Database constraints prevent duplicate attendance for the same engagement and
  date, and duplicate payroll periods for the same business and month.
- Server routes must enforce membership and permission checks; client-side
  business selection is not security.
- Soft archive people and vendors with `status`; do not delete records used by
  historic payroll, bills, or payments.

## Delivery Order

1. Apply `database/migrations/20260928_workforce_operations.sql` through the
   approved `amcmep` database migration runner. Take a database backup and run
   it in staging first; this migration creates tables and indexes only.
2. Add shared SGE server-side session validation and workspace access guard.
3. Build business selector and `/workspace` overview.
4. Deliver people, engagements, sites, and attendance first.
5. Add payroll periods, entries, approvals, and payment register.
6. Add vendor bills, contractor contracts, expenses, reporting, and exports.
7. Perform role-by-role authorization, audit, and payroll-lock acceptance tests
   before production access is enabled.

## Login Activation Checklist

The private SGE workspace must not be enabled until all items below are true:

- The shared AMC MEP sign-in endpoint responds reliably over HTTPS.
- SGE has a server-only authentication endpoint and session secret configured.
- The sign-in callback URL for `https://sge.org.in` is registered with the
  identity service.
- Session validation returns a stable `user_id` and never trusts a browser
  supplied user or business ID.
- The user has an active `business_memberships` record for the selected
  `business_id`.
- Each workspace API route verifies the required permission before reading or
  modifying a business-scoped row.

Until those conditions are met, keep `/workspace` unpublished. The public SGE
site can continue to use the existing catalog and service-request features.
