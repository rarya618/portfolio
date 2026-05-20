import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { GDG_EVENTS } from '../data';
import Nav from './Nav';

function renderWithLinks(text: string) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const result: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;
  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) result.push(text.slice(lastIndex, match.index));
    const isInternal = match[2].startsWith('/');
    result.push(
      isInternal
        ? <Link key={match.index} to={match[2]} className="prose-link">{match[1]}</Link>
        : <a key={match.index} href={match[2]} target="_blank" rel="noreferrer" className="prose-link">{match[1]}</a>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) result.push(text.slice(lastIndex));
  return result;
}

export default function CommunityPage() {
  return (
    <main>
      <Helmet>
        <title>GDG Sydney — Russal Arya</title>
        <meta name="description" content="Design work produced for GDG Sydney — banners, thumbnails, presentations, and display videos across 5 events." />
        <link rel="canonical" href="https://russal.dev/community" />
        <meta property="og:title" content="GDG Sydney — Russal Arya" />
        <meta property="og:description" content="Design work produced for GDG Sydney — banners, thumbnails, presentations, and display videos across 5 events." />
        <meta property="og:url" content="https://russal.dev/community" />
      </Helmet>

      <Nav />

      <section style={{ padding: '8vmin 8vw', maxWidth: '900px' }}>
        <a
          href="/#community"
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
          <a href="https://gdg.community.dev/gdg-sydney/" target="_blank" rel="noreferrer" className="prose-link">
            gdg sydney
          </a>
        </h1>

        <p style={{ fontSize: '0.6875rem', opacity: 0.65, marginBottom: '4rem' }}>
          organiser · designer · host
        </p>

        <p style={{ fontSize: '0.9375rem', lineHeight: 1.85, opacity: 0.9, maxWidth: '60ch', marginBottom: '5rem' }}>
          organiser for gdg sydney, a community of 2,000+ developers. i host workshops and manage the relationship between gdg sydney and google. for my own events, i go deep on the design side — producing the full set of assets from scratch: banners, thumbnails, presentations, and display videos.
        </p>

        <p style={{ fontSize: '0.75rem', opacity: 0.8, marginBottom: '3rem' }}>
          ## events
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          {GDG_EVENTS.map((event, i) => {
            const hasImages = event.assets.banner || event.assets.thumbnail;
            const hasEmbeds = event.assets.presentation || event.assets.video;

            return (
              <div key={event.id} style={{ display: 'flex', gap: '2rem' }}>
                <span style={{ fontSize: '0.75rem', opacity: 0.7, paddingTop: '0.125rem', flexShrink: 0 }}>
                  [{String(i + 1).padStart(2, '0')}]
                </span>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                    <p style={{ fontSize: '0.9375rem', opacity: 0.95 }}>{event.title}</p>
                    {event.status === 'rescheduled' && (
                      <span style={{ fontSize: '0.6875rem', opacity: 0.6 }}>rescheduled</span>
                    )}
                    {event.role && (
                      <span style={{ fontSize: '0.6875rem', opacity: 0.6 }}>+ {event.role}</span>
                    )}
                  </div>

                  <p style={{ fontSize: '0.8125rem', lineHeight: 1.75, opacity: 0.9, maxWidth: '60ch', marginBottom: hasImages || hasEmbeds ? '2rem' : 0 }}>
                    {renderWithLinks(event.description)}
                  </p>

                  {/* banners + thumbnails */}
                  {hasImages && (
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: hasEmbeds ? '2rem' : 0 }}>
                      {event.assets.banner && (
                        <div style={{ flex: '2 1 300px' }}>
                          <p style={{ fontSize: '0.6875rem', opacity: 0.7, marginBottom: '0.625rem' }}>banner</p>
                          <img
                            src={event.assets.banner}
                            alt={`${event.title} banner`}
                            style={{ width: '100%', borderRadius: '4px', display: 'block', opacity: 0.9 }}
                          />
                        </div>
                      )}
                      {event.assets.thumbnail && (
                        <div style={{ flex: '1 1 160px' }}>
                          <p style={{ fontSize: '0.6875rem', opacity: 0.7, marginBottom: '0.625rem' }}>thumbnail</p>
                          <img
                            src={event.assets.thumbnail}
                            alt={`${event.title} thumbnail`}
                            style={{ width: '100%', borderRadius: '4px', display: 'block', opacity: 0.9 }}
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {/* presentation embed */}
                  {event.assets.presentation && (
                    <div style={{ marginBottom: event.assets.video ? '2rem' : 0 }}>
                      <p style={{ fontSize: '0.6875rem', opacity: 0.7, marginBottom: '0.625rem' }}>presentation</p>
                      <div style={{ position: 'relative', width: '100%', maxWidth: '640px', paddingTop: '56.25%' }}>
                        <iframe
                          src={event.assets.presentation}
                          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', borderRadius: '4px', border: 'none' }}
                          allowFullScreen
                          title={`${event.title} presentation`}
                        />
                      </div>
                    </div>
                  )}

                  {/* display video embed */}
                  {event.assets.video && (
                    <div>
                      <p style={{ fontSize: '0.6875rem', opacity: 0.7, marginBottom: '0.625rem' }}>display video</p>
                      <div style={{ position: 'relative', width: '100%', maxWidth: '640px', paddingTop: '56.25%' }}>
                        <iframe
                          src={event.assets.video}
                          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', borderRadius: '4px', border: 'none' }}
                          allowFullScreen
                          title={`${event.title} display video`}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
