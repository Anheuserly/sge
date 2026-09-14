export const metadata = { title: "Compliance | SGE Platform" };
export default function CompliancePage() {
  return (
    <main className="container mx-auto px-4 py-16" style={{ maxWidth: '800px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Compliance Guidelines</h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--muted)', lineHeight: 1.8 }}>
        At SGE, we adhere to stringent fire safety and MEP compliance codes. All our digital platform workflows and engineer deployments are mapped against national safety regulations to ensure absolute operational security for our clients.
      </p>
    </main>
  );
}
