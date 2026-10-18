import { Link } from 'react-router-dom';

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
        // full-stack &amp; mobile product builder · sydney
      </p>

      <p style={{ fontSize: '0.9375rem', opacity: 0.95, maxWidth: '44ch', lineHeight: 1.75, marginBottom: '3rem' }}>
        i design and build consumer apps, like{' '}
        <Link to="/project/tracksense" className="prose-link">tracksense</Link>, a music app on the app store.
      </p>

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
