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
        <Link
          to="/"
          style={{ fontSize: '0.6875rem', opacity: 0.7, textDecoration: 'none', display: 'inline-block', marginBottom: '4rem' }}
        >
          ← back
        </Link>

        <div style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
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

        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: 300,
          letterSpacing: '-0.03em',
          lineHeight: 0.95,
          marginBottom: '2.5rem',
        }}>
          consulting
        </h1>

        <p style={{ fontSize: '0.9375rem', lineHeight: 1.85, opacity: 0.9, maxWidth: '60ch', marginBottom: '1.5rem' }}>
          {CONSULTING.pitch}
        </p>

        <p style={{ fontSize: '0.8125rem', lineHeight: 1.75, opacity: 0.55, maxWidth: '60ch', marginBottom: '6rem' }}>
          {CONSULTING.forWho}
        </p>

        {/* Services */}
        <p style={{ fontSize: '0.75rem', opacity: 0.8, marginBottom: '2.5rem' }}>
          ## services
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2.5rem 4rem',
          marginBottom: '6rem',
          maxWidth: '680px',
        }}>
          {CONSULTING.services.map((service) => (
            <div key={service.label}>
              <p style={{ fontSize: '0.8125rem', opacity: 1, marginBottom: '0.375rem' }}>
                {service.label}
              </p>
              <p style={{ fontSize: '0.6875rem', opacity: 0.45, letterSpacing: '0.01em' }}>
                {service.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Process */}
        <p style={{ fontSize: '0.75rem', opacity: 0.8, marginBottom: '2.5rem' }}>
          ## how it works
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.75rem', marginBottom: '6rem' }}>
          {CONSULTING.process.map((item) => (
            <div key={item.step} style={{ display: 'flex', gap: '2.5rem', alignItems: 'flex-start' }}>
              <span style={{
                fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                opacity: 0.15,
                flexShrink: 0,
                lineHeight: 1,
                paddingTop: '0.1rem',
                minWidth: '2ch',
              }}>
                {item.step}
              </span>
              <div>
                <p style={{ fontSize: '0.8125rem', opacity: 1, marginBottom: '0.4rem' }}>{item.title}</p>
                <p style={{ fontSize: '0.8125rem', lineHeight: 1.75, opacity: 0.6, maxWidth: '52ch' }}>{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Past work */}
        <p style={{ fontSize: '0.75rem', opacity: 0.8, marginBottom: '2.5rem' }}>
          ## past work
        </p>

        <p style={{ fontSize: '0.8125rem', lineHeight: 1.75, opacity: 0.9, maxWidth: '60ch', marginBottom: '8rem' }}>
          the <Link to="/#work" className="prose-link">projects section</Link> shows the kind of work i do — production web apps, native iOS, and full-stack systems built and shipped end-to-end.
        </p>

        {/* CTA */}
        <p style={{ fontSize: '0.6875rem', opacity: 0.45, marginBottom: '1.25rem', letterSpacing: '0.01em' }}>
          ready to start?
        </p>

        <a
          href={`mailto:${CONTACT.email}`}
          style={{
            fontSize: 'clamp(1.25rem, 3vw, 2.25rem)',
            fontWeight: 300,
            letterSpacing: '-0.025em',
            opacity: 0.9,
            display: 'inline-block',
            textDecoration: 'none',
            color: 'var(--fg)',
            marginBottom: '0.75rem',
          }}
          className="prose-link"
        >
          {CONTACT.email}
        </a>

        <p style={{ fontSize: '0.6875rem', opacity: 0.35 }}>or just say hello</p>
      </section>
    </main>
  );
}
