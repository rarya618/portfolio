import { Link } from 'react-router-dom';
import { PROJECTS, TECH_URLS } from '../data';

// Projects with a full case study lead; the rest go in a short list underneath
const featured = PROJECTS.filter(p => p.process);
const other = PROJECTS.filter(p => !p.process);

export default function Work() {
  return (
    <section id="work" style={{ padding: '8vmin 8vw' }}>
      <p style={{ fontSize: '0.75rem', opacity: 0.8, marginBottom: '2.5rem' }}>
        ## work
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {featured.map((project, i) => (
          <div key={project.id} className="work-row" style={{ display: 'flex' }}>
            <span style={{ fontSize: '0.75rem', opacity: 0.7, paddingTop: '0.125rem', flexShrink: 0 }}>
              [{String(i + 1).padStart(2, '0')}]
            </span>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <Link
                  to={`/project/${project.slug}`}
                  className="prose-link"
                  style={{ fontSize: '0.9375rem', opacity: 1, letterSpacing: '-0.01em' }}
                >
                  {project.name}
                </Link>
              </div>

              <p style={{ fontSize: '0.8125rem', lineHeight: 1.75, opacity: 0.9, maxWidth: '60ch', marginBottom: '0.875rem' }}>
                {project.description}
              </p>

              <p style={{ fontSize: '0.6875rem', opacity: 0.75 }}>
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

      {other.length > 0 && (
        <div style={{ marginTop: '4rem' }}>
          <p style={{ fontSize: '0.6875rem', opacity: 0.8, marginBottom: '1rem' }}>also built</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {other.map((project) => (
              <p key={project.id} style={{ fontSize: '0.8125rem', lineHeight: 1.75 }}>
                {project.url ? (
                  <Link to={`/project/${project.slug}`} className="prose-link">{project.name.toLowerCase()}</Link>
                ) : (
                  project.name.toLowerCase()
                )}
                <span style={{ opacity: 0.75 }}> · {project.tagline}</span>
              </p>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
