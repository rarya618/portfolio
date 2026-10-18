import { Link } from 'react-router-dom';
import { STACK, TECH_URLS } from '../data';

function Bio() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <p>
        sydney-based product builder with 3+ years of experience. i do both the design and the
        engineering. i've freelanced for startups, contracted remotely for a us-based screenwriting
        platform, and shipped a{' '}
        <a href="https://tracksense.fm" target="_blank" rel="noreferrer" className="prose-link">
          consumer app to the app store
        </a> on my own. i use claude code on every project.
      </p>
      <p>
        outside of building, i organise{' '}
        <a href="https://gdg.community.dev/gdg-sydney/" target="_blank" rel="noreferrer" className="prose-link">
          gdg sydney
        </a>
        , a community of 2,000+ developers, and i'm the main contact between the chapter and google.
        i host workshops and do all the design for my own events. i've also taught a build with ai workshop at google hq.{' '}
        <Link to="/community" className="prose-link">see the design work.</Link>
      </p>
      <p>
        i was born in russia and still speak some russian.
      </p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" style={{ padding: '8vmin 8vw' }}>
      <p style={{ fontSize: '0.75rem', opacity: 0.8, marginBottom: '2.5rem' }}>
        ## about
      </p>

      <div className="about-layout" style={{ display: 'flex', gap: '6vw', alignItems: 'flex-start' }}>
        <div style={{ fontSize: '0.9rem', lineHeight: 1.85, opacity: 0.95, maxWidth: '52ch', flex: '1 1 auto' }}>
          <Bio />
        </div>

        <div style={{ flexShrink: 0 }}>
          <p style={{ fontSize: '0.6875rem', opacity: 0.8, marginBottom: '1rem' }}>stack</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
            {STACK.map((item) => {
              const url = TECH_URLS[item];
              return url ? (
                <a key={item} href={url} target="_blank" rel="noreferrer" className="prose-link"
                  style={{ fontSize: '0.8125rem', opacity: 0.85 }}>
                  {item}
                </a>
              ) : (
                <span key={item} style={{ fontSize: '0.8125rem', opacity: 0.85 }}>{item}</span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
