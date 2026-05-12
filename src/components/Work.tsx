import { PROJECTS } from '../data';

export default function Work() {
  return (
    <section id="work" style={{ padding: '8vmin 8vw' }}>
      <p style={{ fontSize: '0.75rem', opacity: 0.5, marginBottom: '2.5rem' }}>
        ## work
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {PROJECTS.map((project, i) => (
          <div key={project.id} className="work-row" style={{ display: 'flex', gap: '2rem' }}>
            <span style={{ fontSize: '0.75rem', opacity: 0.4, paddingTop: '0.125rem', flexShrink: 0 }}>
              [{String(i + 1).padStart(2, '0')}]
            </span>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem', gap: '1rem' }}>
                <h2 style={{ fontSize: '0.9375rem', opacity: 0.9, letterSpacing: '-0.01em' }}>
                  {project.name}
                </h2>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noreferrer" style={{ fontSize: '0.6875rem', opacity: 0.5, flexShrink: 0 }}>
                    view ↗
                  </a>
                )}
              </div>

              <p style={{ fontSize: '0.8125rem', lineHeight: 1.75, opacity: 0.65, maxWidth: '60ch', marginBottom: '0.875rem' }}>
                {project.description}
              </p>

              <p style={{ fontSize: '0.6875rem', opacity: 0.45 }}>
                {project.tags.map(t => t.toLowerCase()).join(' · ')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
