import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PROJECTS, TECH_URLS } from '../data';
import Nav from './Nav';

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find(p => p.slug === slug);

  if (!project) {
    return (
      <main>
        <Nav />
        <section style={{ padding: '8vmin 8vw' }}>
          <a href="/#work" style={{ fontSize: '0.6875rem', opacity: 0.7, textDecoration: 'none', display: 'inline-block', marginBottom: '3rem' }}>
            ← back
          </a>
          <p style={{ fontSize: '0.75rem', opacity: 0.8, marginBottom: '1rem' }}>## 404</p>
          <p style={{ fontSize: '0.9375rem', opacity: 0.9 }}>project not found.</p>
        </section>
      </main>
    );
  }

  const { process } = project;

  const pageTitle = `${project.name} — Russal Arya`;
  const pageDesc = project.process?.summary.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') ?? project.description;
  const pageUrl = `https://russal.dev/project/${project.slug}`;

  return (
    <main>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
      </Helmet>
      <Nav />
      <section style={{ padding: '8vmin 8vw', maxWidth: '900px' }}>

        <a
          href="/#work"
          style={{ fontSize: '0.6875rem', opacity: 0.7, textDecoration: 'none', display: 'inline-block', marginBottom: '4rem' }}
        >
          ← back
        </a>

        {/* header */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
          fontWeight: 300,
          letterSpacing: '-0.03em',
          lineHeight: 0.95,
          opacity: 1,
          marginBottom: '2rem',
        }}>
          {project.name}
        </h1>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
          <p style={{ fontSize: '0.6875rem', opacity: 0.65 }}>
            {project.mode.toLowerCase()}
          </p>
          <p style={{ fontSize: '0.6875rem', opacity: 0.75 }}>
            {project.tags.map((tag, i) => {
              const url = TECH_URLS[tag];
              return (
                <span key={tag}>
                  {i > 0 && ' · '}
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
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="prose-link"
              style={{ fontSize: '0.6875rem', opacity: 0.7, marginLeft: 'auto' }}
            >
              view project ↗
            </a>
          )}
        </div>

        {/* summary */}
        {process ? (
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.85, opacity: 0.9, maxWidth: '60ch', marginBottom: '5rem' }}>
            {renderWithLinks(process.summary)}
          </p>
        ) : (
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.85, opacity: 0.9, maxWidth: '60ch', marginBottom: '5rem' }}>
            {project.description}
          </p>
        )}

        {process && (
          <>
            {/* process steps */}
            <p style={{ fontSize: '0.75rem', opacity: 0.8, marginBottom: '2.5rem' }}>
              ## process
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginBottom: '5rem' }}>
              {process.steps.map(step => (
                <div key={step.number} style={{ display: 'flex', gap: '2rem' }}>
                  <span style={{ fontSize: '0.75rem', opacity: 0.7, paddingTop: '0.125rem', flexShrink: 0 }}>
                    [{String(step.number).padStart(2, '0')}]
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: '0.9375rem', opacity: 0.95, marginBottom: '0.625rem' }}>
                      {step.title}
                    </p>
                    <p style={{ fontSize: '0.8125rem', lineHeight: 1.75, opacity: 0.9, maxWidth: '60ch' }}>
                      {renderWithLinks(step.body)}
                    </p>
                    {step.images && step.images.length > 0 && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.25rem' }}>
                        {step.images.map((src, idx) => (
                          <img
                            key={idx}
                            src={src}
                            alt=""
                            style={{ width: '100%', maxWidth: '640px', opacity: 0.9, borderRadius: '4px', display: 'block' }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* decisions */}
            {process.decisions && process.decisions.length > 0 && (
              <>
                <p style={{ fontSize: '0.75rem', opacity: 0.8, marginBottom: '2rem' }}>
                  ## decisions
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {process.decisions.map((d, i) => (
                    <p key={i} style={{ fontSize: '0.8125rem', lineHeight: 1.75, opacity: 0.85, maxWidth: '60ch' }}>
                      {renderWithLinks(d)}
                    </p>
                  ))}
                </div>
              </>
            )}
          </>
        )}

      </section>
    </main>
  );
}
