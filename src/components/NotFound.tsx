import { Helmet } from 'react-helmet-async';
import Nav from './Nav';

export default function NotFound() {
  return (
    <main>
      <Helmet>
        <title>404 — Russal Arya</title>
      </Helmet>
      <Nav />
      <section style={{ padding: '8vmin 8vw' }}>
        <p style={{ fontSize: '0.75rem', opacity: 0.8, marginBottom: '2.5rem' }}>## 404</p>
        <p style={{ fontSize: '0.9375rem', opacity: 0.9, marginBottom: '1.5rem' }}>
          nothing here.
        </p>
        <p style={{ fontSize: '0.6875rem', opacity: 0.7 }}>
          <a href="/" className="prose-link">← back to home</a>
        </p>
      </section>
    </main>
  );
}
