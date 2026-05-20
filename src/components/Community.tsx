import { Link } from 'react-router-dom';

export default function Community() {
  return (
    <section id="community" style={{ padding: '8vmin 8vw' }}>
      <p style={{ fontSize: '0.75rem', opacity: 0.8, marginBottom: '2.5rem' }}>
        ## community
      </p>

      <div style={{ display: 'flex', gap: '2rem' }}>
        <span style={{ fontSize: '0.75rem', opacity: 0.7, paddingTop: '0.125rem', flexShrink: 0 }}>[01]</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontSize: '0.9375rem', opacity: 1, marginBottom: '0.5rem' }}>
            <a href="https://gdg.community.dev/gdg-sydney/" target="_blank" rel="noreferrer" className="prose-link">
              gdg sydney
            </a>
          </p>
          <p style={{ fontSize: '0.8125rem', lineHeight: 1.75, opacity: 0.9, maxWidth: '60ch', marginBottom: '0.875rem' }}>
            organiser for a community of 2,000+ developers. host workshops and manage speaker relations with google. for my own events, i go deep on the design side — banners, thumbnails, presentations, and display videos.
          </p>
          <p style={{ fontSize: '0.6875rem', opacity: 0.7 }}>
            <Link to="/community" className="prose-link">
              see design work →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
