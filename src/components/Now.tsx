import { Link } from 'react-router-dom';
import { NOW } from '../data';

export default function Now() {
  return (
    <section id="now" style={{ padding: '8vmin 8vw' }}>
      <p style={{ fontSize: '0.75rem', opacity: 0.8, marginBottom: '2.5rem' }}>
        ## now
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '60ch' }}>
        {NOW.map((item) => (
          <p key={item.label} style={{ fontSize: '0.8125rem', lineHeight: 1.75 }}>
            <span style={{ opacity: 1 }}>
              {item.to ? <Link to={item.to} className="prose-link">{item.label}</Link> : item.label}
            </span>
            <span style={{ opacity: 0.75 }}> · {item.detail}</span>
          </p>
        ))}
      </div>
    </section>
  );
}
