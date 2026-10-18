import { Link } from 'react-router-dom';
import { STACK, TECH_URLS } from '../data';

function Bio() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <p>
        i'm a software engineer in sydney, and i've been building for 3+ years. i do the design and the
        engineering, and i like owning a product from the first sketch to the release. i've freelanced
        for startups, contracted remotely for a us-based screenwriting platform, and shipped{' '}
        <Link to="/project/tracksense" className="prose-link">an app to the app store</Link> on my own.
      </p>
      <p>
        i also organise{' '}
        <Link to="/community" className="prose-link">gdg sydney</Link>
        , a community of 2,000+ developers, and i'm the main contact between the chapter and google. i
        host workshops, design everything for my own events, and have taught a build with ai workshop
        at google hq.
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
