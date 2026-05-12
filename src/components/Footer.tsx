import { useState } from 'react';
import { useMode } from './ModeContext';

const LINKS = ['GitHub', 'Dribbble', 'LinkedIn', 'Email'];

export default function Footer() {
  const { isDesigner } = useMode();
  const [ctaHovered, setCtaHovered] = useState(false);
  const border = isDesigner ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.07)';
  const accent = isDesigner ? '#c1440e' : '#c8ff00';
  const muted = isDesigner ? '#9a9490' : '#444444';
  const text = isDesigner ? '#1a1714' : '#e8e4db';

  return (
    <footer
      id="contact"
      className="flex justify-between items-end px-12 py-12 transition-colors duration-700"
      style={{ borderTop: `1px solid ${border}` }}
    >
      <div
        className="font-serif italic relative inline-block cursor-pointer transition-colors duration-300"
        style={{
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          lineHeight: '0.9',
          letterSpacing: '-0.02em',
          color: ctaHovered ? accent : text,
        }}
        onMouseEnter={() => setCtaHovered(true)}
        onMouseLeave={() => setCtaHovered(false)}
      >
        Let's make<br />something real.
        <span
          className="absolute left-0 right-0 bottom-0 h-0.5 origin-left transition-transform duration-500"
          style={{ background: accent, transform: ctaHovered ? 'scaleX(1)' : 'scaleX(0)' }}
        />
      </div>

      <div className="flex flex-col items-end gap-2">
        {LINKS.map((link) => (
          <button
            key={link}
            className="font-mono uppercase text-[10px] tracking-[0.12em] bg-transparent border-0 cursor-pointer p-0 transition-colors duration-200"
            style={{ color: muted }}
            onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
            onMouseLeave={(e) => (e.currentTarget.style.color = muted)}
          >
            {link}
          </button>
        ))}
        <span className="font-mono text-[10px] mt-2 opacity-40" style={{ color: muted }}>© 2026</span>
      </div>
    </footer>
  );
}
