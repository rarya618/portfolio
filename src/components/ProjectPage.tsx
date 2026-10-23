import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PROJECTS, TECH_URLS } from '../data';
import type { ProcessStep } from '../types';
import Nav from './Nav';

function renderWithLinks(text: string) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const result: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;
  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) result.push(text.slice(lastIndex, match.index));
    result.push(
      <a key={match.index} href={match[2]} target="_blank" rel="noreferrer" className="prose-link">
        {match[1]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) result.push(text.slice(lastIndex));
  return result;
}

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find(p => p.slug === slug);

  if (!project) {
    return (
      <main>
        <Nav />
        <section style={{ padding: '8vmin 8vw' }}>
          <Link to="/#work" style={{ fontSize: '0.6875rem', opacity: 0.7, textDecoration: 'none', display: 'inline-block', marginBottom: '3rem' }}>
            ← back
          </Link>
          <p style={{ fontSize: '0.75rem', opacity: 0.8, marginBottom: '1rem' }}>## 404</p>
          <p style={{ fontSize: '0.9375rem', opacity: 0.9 }}>project not found.</p>
        </section>
      </main>
    );
  }

  const { process } = project;

  // a new segment starts at each step with an image; its image stays pinned until the next segment's image arrives
  const segments: ProcessStep[][] = [];
  for (const step of process?.steps ?? []) {
    if (step.image || segments.length === 0) segments.push([step]);
    else segments[segments.length - 1].push(step);
  }

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
      <section style={{ padding: '8vmin 8vw', maxWidth: '1440px' }}>

        <Link
          to="/#work"
          style={{ fontSize: '0.6875rem', opacity: 0.7, textDecoration: 'none', display: 'inline-block', marginBottom: '4rem' }}
        >
          ← back
        </Link>

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

        <div style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', flexWrap: 'wrap' }}>
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
          </div>
          {(project.url || project.designUrl) && (
            <p style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', fontSize: '0.6875rem', opacity: 0.7 }}>
              {project.url && (
                <a href={project.url} target="_blank" rel="noreferrer" className="prose-link">
                  view project ↗
                </a>
              )}
              {project.designUrl && (
                <a href={project.designUrl} target="_blank" rel="noreferrer" className="prose-link">
                  view designs ↗
                </a>
              )}
            </p>
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
              {segments.map(segment => {
                const image = segment[0].image;
                return (
                  <div key={segment[0].number} className="step-segment">
                    <div className="segment-steps">
                      {segment.map(step => (
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
                            {/* on narrow screens the image sits under its own step instead */}
                            {step.image && (
                              <img
                                className="step-image-inline"
                                src={step.image.src}
                                alt={step.image.alt}
                                loading="lazy"
                                style={{ opacity: 0.9, borderRadius: '4px' }}
                              />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* pinned beside the whole segment, so it only scrolls out as the next image scrolls in */}
                    {image && (
                      <div className="step-image-col">
                        <img
                          className="step-image"
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          style={{ opacity: 0.9, borderRadius: '4px' }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
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
