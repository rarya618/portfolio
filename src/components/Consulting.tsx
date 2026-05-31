import { Link } from 'react-router-dom';
import { CONSULTING } from '../data';

export default function Consulting() {
  return (
    <section id="consulting" style={{ padding: '8vmin 8vw' }}>
      <p style={{ fontSize: '0.75rem', opacity: 0.8, marginBottom: '2.5rem' }}>
        ## consulting
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
        <span style={{
          display: 'inline-block',
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          background: 'var(--fg)',
          opacity: 0.55,
          flexShrink: 0,
        }} />
        <span style={{ fontSize: '0.6875rem', opacity: 0.55, letterSpacing: '0.01em' }}>
          {CONSULTING.availability}
        </span>
      </div>

      <p style={{ fontSize: '0.9375rem', opacity: 0.9, marginBottom: '1.75rem', maxWidth: '52ch', lineHeight: 1.75 }}>
        {CONSULTING.pitch}
      </p>

      <p style={{ fontSize: '0.6875rem', opacity: 0.4, marginBottom: '2rem', letterSpacing: '0.015em' }}>
        {CONSULTING.services.map(s => s.label).join(' · ')}
      </p>

      <p style={{ fontSize: '0.6875rem', opacity: 0.7 }}>
        <Link to="/consulting" className="prose-link">
          learn more →
        </Link>
      </p>
    </section>
  );
}
