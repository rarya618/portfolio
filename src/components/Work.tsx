import { useState } from 'react';
import { useMode } from './ModeContext';
import { PROJECTS } from '../data';
import type { Project } from '../types';

function ProjectCard({ project, borderRight, borderBottom }: {
  project: Project;
  borderRight: boolean;
  borderBottom: boolean;
}) {
  const { isDesigner } = useMode();
  const [hovered, setHovered] = useState(false);

  const accent = isDesigner ? '#c1440e' : '#c8ff00';
  const muted = isDesigner ? '#9a9490' : '#444444';
  const border = isDesigner ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.07)';
  const text = isDesigner ? '#1a1714' : '#e8e4db';
  const hoverBg = isDesigner ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.03)';

  return (
    <div
      className="relative px-12 py-10 cursor-pointer transition-colors duration-300"
      style={{
        borderRight: borderRight ? `1px solid ${border}` : 'none',
        borderBottom: borderBottom ? `1px solid ${border}` : 'none',
        background: hovered ? hoverBg : 'transparent',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="flex items-center gap-2 font-mono uppercase mb-4 text-[10px] tracking-[0.15em] transition-colors duration-700"
        style={{ color: accent }}
      >
        <span className="block h-px w-3 flex-shrink-0" style={{ background: accent }} />
        {project.mode}
      </div>

      <h3
        className="font-serif text-2xl tracking-[-0.02em] leading-tight mb-3 transition-colors duration-700"
        style={{ color: text }}
      >
        {project.name}
      </h3>

      <p
        className="font-mono text-[11px] leading-loose mb-6 transition-colors duration-700"
        style={{ color: muted }}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono uppercase text-[9px] tracking-[0.1em] px-2 py-1 rounded-sm transition-colors duration-700"
            style={{ border: `1px solid ${border}`, color: muted }}
          >
            {tag}
          </span>
        ))}
      </div>

      <span
        className="absolute top-8 right-10 text-base transition-all duration-300"
        style={{
          color: accent,
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translate(3px, -3px)' : 'translate(0,0)',
        }}
      >
        ↗
      </span>
    </div>
  );
}

export default function Work() {
  const { isDesigner } = useMode();
  const border = isDesigner ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.07)';
  const accent = isDesigner ? '#c1440e' : '#c8ff00';
  const muted = isDesigner ? '#9a9490' : '#444444';
  const text = isDesigner ? '#1a1714' : '#e8e4db';

  return (
    <section id="work" className="transition-colors duration-700" style={{ borderTop: `1px solid ${border}` }}>
      {/* Header row */}
      <div className="grid grid-cols-2" style={{ borderBottom: `1px solid ${border}` }}>
        <div
          className="flex items-baseline gap-6 px-12 py-8 transition-colors duration-700"
          style={{ borderRight: `1px solid ${border}` }}
        >
          <span className="font-mono uppercase text-[10px] tracking-[0.15em] transition-colors duration-700" style={{ color: accent }}>02</span>
          <h2 className="font-serif italic text-[1.8rem] tracking-[-0.02em] transition-colors duration-700" style={{ color: text }}>Selected Work</h2>
        </div>
        <div className="flex items-baseline px-12 py-8">
          <span className="font-mono uppercase text-[10px] tracking-[0.15em] transition-colors duration-700" style={{ color: muted }}>Both disciplines</span>
        </div>
      </div>

      {/* Project cards */}
      <div className="grid grid-cols-2">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            borderRight={(i + 1) % 2 !== 0}
            borderBottom={i < PROJECTS.length - 2}
          />
        ))}
      </div>
    </section>
  );
}
