import { STACK, TECH_URLS } from '../data';

function Bio() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <p>
        sydney-based product builder with 3+ years taking ideas from concept to deployment. i design and
        engineer — the line between them doesn't exist for me. i've freelanced for startups, contracted
        remotely for a us-based screenwriting platform, and solo-shipped a{' '}
        <a href="https://tracksense.fm" target="_blank" rel="noreferrer" className="prose-link">
          consumer app to the app store
        </a>. i build with ai-powered speed using claude code across every project.
      </p>
      <p>
        outside of building, i organise{' '}
        <a href="https://gdg.community/gdg/sydney/" target="_blank" rel="noreferrer" className="prose-link">
          gdg sydney
        </a>
        , a community of 2,000+ developers, and am the primary point of contact between gdg sydney and google.
        i've spoken at workshops on react and firebase at google hq, and instructed a build with ai workshop there too.
      </p>
      <p>
        i was born in russia, speak some russian, and bring that international perspective to everything i build.
      </p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" style={{ padding: '8vmin 8vw' }}>
      <p style={{ fontSize: '0.75rem', opacity: 0.65, marginBottom: '2.5rem' }}>
        ## about
      </p>

      <div className="about-layout" style={{ display: 'flex', gap: '6vw', alignItems: 'flex-start' }}>
        <div style={{ fontSize: '0.9rem', lineHeight: 1.85, opacity: 0.85, maxWidth: '52ch', flex: '1 1 auto' }}>
          <Bio />
        </div>

        <div style={{ flexShrink: 0 }}>
          <p style={{ fontSize: '0.6875rem', opacity: 0.65, marginBottom: '1rem' }}>stack</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
            {STACK.map((item) => {
              const url = TECH_URLS[item];
              return url ? (
                <a key={item} href={url} target="_blank" rel="noreferrer" className="prose-link"
                  style={{ fontSize: '0.8125rem', opacity: 0.75 }}>
                  {item}
                </a>
              ) : (
                <span key={item} style={{ fontSize: '0.8125rem', opacity: 0.75 }}>{item}</span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
