import { useMode } from './ModeContext';
import EngineerPanel from './EngineerPanel';
import DesignerPanel from './DesignerPanel';

export default function Hero() {
  const { isDesigner } = useMode();

  const accent = isDesigner ? '#c1440e' : '#c8ff00';
  const muted = isDesigner ? '#9a9490' : '#444444';
  const text = isDesigner ? '#1a1714' : '#e8e4db';
  const border = isDesigner ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.07)';

  return (
    <section className="grid grid-cols-2 relative overflow-hidden min-h-screen transition-colors duration-700">

      {/* Left panel */}
      <div
        className="flex flex-col justify-center px-12 py-20 transition-colors duration-700"
        style={{ borderRight: `1px solid ${border}` }}
      >
        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 font-mono uppercase mb-10 text-[10px] tracking-[0.2em] transition-colors duration-700"
          style={{ color: accent }}
        >
          <span className="block flex-shrink-0 h-px w-4" style={{ background: accent }} />
          {isDesigner ? 'Mode: Designer' : 'Mode: Engineer'}
        </div>

        {/* Name */}
        <h1
          className="font-serif mb-0"
          style={{ fontSize: 'clamp(3.5rem, 7vw, 6.5rem)', lineHeight: 0.92, letterSpacing: '-0.02em' }}
        >
          <span className="block" style={{ color: text }}>Russal</span>
          <span className="block italic transition-colors duration-700" style={{ color: accent }}>Arya</span>
        </h1>

        {/* Role */}
        <p
          className="font-mono text-[11px] leading-loose mt-8 mb-12 max-w-[280px] transition-colors duration-700"
          style={{ color: muted }}
        >
          {isDesigner ? (
            <>Product designer.<br />Figma by day. Terminal by night.<br />The one who actually builds the thing.</>
          ) : (
            <>Software engineer.<br />Product-minded. Systems-obsessed.<br />Sometimes also ships the design.</>
          )}
        </p>

        {/* CTA */}
        <a
          href="#work"
          className="inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.15em] uppercase pb-1 w-fit transition-colors duration-300"
          style={{ color: text, borderBottom: `1px solid ${accent}`, textDecoration: 'none' }}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          View selected work ↗
        </a>
      </div>

      {/* Right — animated panel swap */}
      <div className="relative flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center transition-all duration-700"
          style={{
            opacity: isDesigner ? 0 : 1,
            transform: isDesigner ? 'translateY(20px) scale(0.96)' : 'translateY(0) scale(1)',
            pointerEvents: isDesigner ? 'none' : 'auto',
          }}
        >
          <EngineerPanel />
        </div>
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            opacity: isDesigner ? 1 : 0,
            transform: isDesigner ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.96)',
            pointerEvents: isDesigner ? 'auto' : 'none',
          }}
        >
          <DesignerPanel />
        </div>
      </div>
    </section>
  );
}
