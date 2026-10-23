import { CONTACT } from '../data';

export default function Hero() {
  return (
    <section
      style={{
        padding: '0 8vw',
        // Fill the screen below the sticky nav so the content centres in what's visible
        minHeight: 'calc(100svh - var(--nav-h))',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <h1
        style={{
          fontSize: 'clamp(3.5rem, 8vw, 7.5rem)',
          fontWeight: 300,
          lineHeight: 0.9,
          letterSpacing: '-0.03em',
          marginBottom: '2.5rem',
        }}
      >
        russal arya
      </h1>

      <p style={{ fontSize: '0.8125rem', opacity: 0.8, marginBottom: '1.25rem' }}>
        // software engineer · sydney
      </p>

      <p style={{ fontSize: '0.9375rem', opacity: 0.95, maxWidth: '44ch', lineHeight: 1.75, marginBottom: '1.5rem' }}>
        i design and build consumer apps, usually a few at once.
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem' }}>
        <a href={CONTACT.resume} target="_blank" rel="noreferrer" className="prose-link" style={{ opacity: 0.85 }}>resume ↗</a>
      </div>
    </section>
  );
}
