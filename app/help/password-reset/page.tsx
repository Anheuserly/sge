export const metadata = {
  title: "Password Reset | SGE Platform Support",
};

export default function PasswordReset() {
  return (
    <main className="container mx-auto px-4 py-16" style={{ maxWidth: '600px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>Password Reset</h1>
      <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '2.5rem' }}>
        Enter the Email Address or Phone Number associated with your AMC MEP Platform account to receive a secure password reset link/OTP.
      </p>
      
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--navy)' }}>Email Address or Phone Number</label>
          <input type="text" placeholder="user@company.com or +91 9876543210" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem' }} />
        </div>
        <button type="button" style={{ padding: '1rem', backgroundColor: 'var(--brand)', color: 'white', fontWeight: 'bold', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '1.1rem', marginTop: '1rem' }}>
          Send Reset Link / OTP
        </button>
      </form>
    </main>
  );
}
