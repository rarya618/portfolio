import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CONSULTING, CONTACT } from '../data';
import Nav from './Nav';

export default function ConsultingPage() {
  return (
    <main>
      <Helmet>
        <title>Consulting — Russal Arya</title>
        <meta name="description" content="Contract engineering work with startups and studios — full-stack web, iOS, Firebase, and technical advisory." />
        <link rel="canonical" href="https://russal.dev/consulting" />
        <meta property="og:title" content="Consulting — Russal Arya" />
        <meta property="og:description" content="Contract engineering work with startups and studios — full-stack web, iOS, Firebase, and technical advisory." />
        <meta property="og:url" content="https://russal.dev/consulting" />
      </Helmet>

      <Nav />

      <section style={{ padding: '8vmin 8vw', maxWidth: '900px' }}>
        <a
          href="/"
          style={{ fontSize: '0.6875rem', opacity: 0.7, textDecoration: 'none', display: 'inline-block', marginBottom: '4rem' }}
        >
          ← back
        </a>

        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: 300,
          letterSpacing: '-0.03em',
          lineHeight: 0.95,
          opacity: 1,
          marginBottom: '2rem',
        }}>
          consulting
        </h1>

        <p style={{ fontSize: '0.6875rem', opacity: 0.65, marginBottom: '4rem' }}>
          {CONSULTING.availability}
        </p>

        <p style={{ fontSize: '0.9375rem', lineHeight: 1.85, opacity: 0.9, maxWidth: '60ch', marginBottom: '5rem' }}>
          {CONSULTING.pitch} i work with founders and teams who need a senior engineer without hiring full-time — whether that's building a product from scratch, extending an existing codebase, or thinking through a technical decision.
        </p>

        <p style={{ fontSize: '0.75rem', opacity: 0.8, marginBottom: '2.5rem' }}>
          ## services
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '5rem' }}>
          {CONSULTING.services.map((service) => (
            <div key={service.label} style={{ display: 'flex', gap: '3rem', alignItems: 'baseline' }}>
              <span style={{ fontSize: '0.8125rem', opacity: 1, minWidth: '14ch' }}>{service.label}</span>
              <span style={{ fontSize: '0.75rem', opacity: 0.5 }}>{service.detail}</span>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '0.75rem', opacity: 0.8, marginBottom: '2.5rem' }}>
          ## how it works
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '5rem' }}>
          {CONSULTING.process.map((item) => (
            <div key={item.step} style={{ display: 'flex', gap: '2rem' }}>
              <span style={{ fontSize: '0.75rem', opacity: 0.7, paddingTop: '0.125rem', flexShrink: 0 }}>[{item.step}]</span>
              <div>
                <p style={{ fontSize: '0.8125rem', opacity: 1, marginBottom: '0.375rem' }}>{item.title}</p>
                <p style={{ fontSize: '0.8125rem', lineHeight: 1.75, opacity: 0.7, maxWidth: '55ch' }}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '0.75rem', opacity: 0.8, marginBottom: '2.5rem' }}>
          ## past work
        </p>

        <p style={{ fontSize: '0.8125rem', lineHeight: 1.75, opacity: 0.9, maxWidth: '60ch', marginBottom: '5rem' }}>
          the <Link to="/#work" className="prose-link">projects section</Link> shows the kind of work i do — production web apps, native iOS, and full-stack systems built and shipped end-to-end.
        </p>

        <p style={{ fontSize: '0.9375rem', opacity: 1, marginBottom: '0.5rem' }}>
          <a href={`mailto:${CONTACT.email}`} className="prose-link">
            get in touch ↗
          </a>
        </p>
        <p style={{ fontSize: '0.75rem', opacity: 0.5 }}>{CONTACT.email}</p>
      </section>
    </main>
  );
}
