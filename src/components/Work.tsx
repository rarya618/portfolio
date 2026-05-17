import { PROJECTS, TECH_URLS } from '../data';

export default function Work() {
  return (
    <section id="work" style={{ padding: '8vmin 8vw' }}>
      <p style={{ fontSize: '0.75rem', opacity: 0.65, marginBottom: '2.5rem' }}>
        ## work
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {PROJECTS.map((project, i) => (
          <div key={project.id} className="work-row" style={{ display: 'flex', gap: '2rem' }}>
            <span style={{ fontSize: '0.75rem', opacity: 0.55, paddingTop: '0.125rem', flexShrink: 0 }}>
              [{String(i + 1).padStart(2, '0')}]
            </span>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ marginBottom: '0.5rem' }}>
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="prose-link"
                    style={{ fontSize: '0.9375rem', opacity: 0.95, letterSpacing: '-0.01em' }}
                  >
                    {project.name}
                  </a>
                ) : (
                  <span style={{ fontSize: '0.9375rem', opacity: 0.95, letterSpacing: '-0.01em' }}>
                    {project.name}
                  </span>
                )}
              </div>

              <p style={{ fontSize: '0.8125rem', lineHeight: 1.75, opacity: 0.8, maxWidth: '60ch', marginBottom: '0.875rem' }}>
                {project.description}
              </p>

              <p style={{ fontSize: '0.6875rem', opacity: 0.6 }}>
                {project.tags.map((tag, j) => {
                  const url = TECH_URLS[tag];
                  return (
                    <span key={tag}>
                      {j > 0 && ' · '}
                      {url ? (
                        <a href={url} target="_blank" rel="noreferrer" className="prose-link">
                          {tag.toLowerCase()}
                        </a>
                      ) : (
                        tag.toLowerCase()
                      )}
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
