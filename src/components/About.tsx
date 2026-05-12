import { BIO, STACK } from '../data';

export default function About() {
  return (
    <section id="about" style={{ padding: '8vmin 8vw' }}>
      <p style={{ fontSize: '0.75rem', opacity: 0.5, marginBottom: '2.5rem' }}>
        ## about
      </p>

      <div className="about-layout" style={{ display: 'flex', gap: '6vw', alignItems: 'flex-start' }}>
        <div style={{ fontSize: '0.9rem', lineHeight: 1.85, opacity: 0.75, maxWidth: '52ch', flex: '1 1 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {BIO.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div style={{ flexShrink: 0 }}>
          <p style={{ fontSize: '0.6875rem', opacity: 0.5, marginBottom: '1rem' }}>stack</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
            {STACK.map((item) => (
              <span key={item} style={{ fontSize: '0.8125rem', opacity: 0.65 }}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
