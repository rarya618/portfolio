import { Link } from 'react-router-dom';
import { CONSULTING } from '../data';

export default function Consulting() {
  return (
    <section id="consulting" style={{ padding: '8vmin 8vw' }}>
      <p style={{ fontSize: '0.75rem', opacity: 0.8, marginBottom: '2.5rem' }}>
        ## consulting
      </p>

      <p style={{ fontSize: '0.9375rem', opacity: 0.9, marginBottom: '1rem', maxWidth: '55ch', lineHeight: 1.75 }}>
        {CONSULTING.pitch}
      </p>

      <p style={{ fontSize: '0.6875rem', opacity: 0.7 }}>
        <Link to="/consulting" className="prose-link">
          learn more →
        </Link>
      </p>
    </section>
  );
}
