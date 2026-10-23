import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { TALKS } from '../data';
import Nav from './Nav';

export default function SpeakingPage() {
  return (
    <main>
      <Helmet>
        <title>Speaking — Russal Arya</title>
        <meta name="description" content="Talks by Russal Arya, including how Firebase detects disconnects, from DevFest Melbourne 2026." />
        <link rel="canonical" href="https://russal.dev/speaking" />
        <meta property="og:title" content="Speaking — Russal Arya" />
        <meta property="og:description" content="Talks by Russal Arya, including how Firebase detects disconnects, from DevFest Melbourne 2026." />
        <meta property="og:url" content="https://russal.dev/speaking" />
      </Helmet>

      <Nav />

      <section style={{ padding: '8vmin 8vw', maxWidth: '900px' }}>
        <Link
          to="/#community"
          style={{ fontSize: '0.6875rem', opacity: 0.7, textDecoration: 'none', display: 'inline-block', marginBottom: '4rem' }}
        >
          ← back
        </Link>

        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: 300,
          letterSpacing: '-0.03em',
          lineHeight: 0.95,
          opacity: 1,
          marginBottom: '2rem',
        }}>
          speaking
        </h1>

        <p style={{ fontSize: '0.9375rem', lineHeight: 1.85, opacity: 0.9, maxWidth: '60ch', marginBottom: '5rem' }}>
          talks i've given, with the slides, code and demos where i have them.
        </p>

        <p style={{ fontSize: '0.75rem', opacity: 0.8, marginBottom: '3rem' }}>
          ## talks
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          {TALKS.map((talk, i) => (
            <div key={talk.id} style={{ display: 'flex', gap: '2rem' }}>
              <span style={{ fontSize: '0.75rem', opacity: 0.7, paddingTop: '0.125rem', flexShrink: 0 }}>
                [{String(i + 1).padStart(2, '0')}]
              </span>

              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: '0.9375rem', opacity: 0.95, marginBottom: '0.5rem' }}>{talk.title}</p>

                <p style={{ fontSize: '0.6875rem', opacity: 0.65, marginBottom: '1.25rem' }}>
                  {talk.date ? `${talk.event} · ${talk.date}` : talk.event}
                </p>

                <p style={{ fontSize: '0.8125rem', lineHeight: 1.75, opacity: 0.9, maxWidth: '60ch', marginBottom: talk.links.length ? '1.25rem' : 0 }}>
                  {talk.description}
                </p>

                {talk.links.length > 0 && (
                  <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.6875rem', opacity: 0.85 }}>
                    {talk.links.map((link) => (
                      <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="prose-link">
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
