import { CONTACT } from '../data';

export default function Hero() {
  return (
    <section
      style={{
        padding: '0 8vw',
        minHeight: '100vh',
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

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem', fontSize: '0.75rem' }}>
        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--light)', flexShrink: 0 }} />
        <span style={{ opacity: 0.85 }}>open to full-time roles ·</span>
        <a href={CONTACT.resume} target="_blank" rel="noreferrer" className="prose-link" style={{ opacity: 0.85 }}>resume ↗</a>
      </div>

      <div className="hero-stats" style={{ display: 'flex', gap: '3rem' }}>
        {[
          { value: '3+', label: 'yrs experience' },
          { value: '3', label: 'projects shipped' },
          { value: '1', label: 'app on the app store' },
        ].map((stat) => (
          <div key={stat.label}>
            <span style={{ fontSize: '1.25rem', letterSpacing: '-0.02em', opacity: 1 }}>{stat.value}</span>
            <span style={{ fontSize: '0.8125rem', opacity: 0.75, marginLeft: '0.5rem' }}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
