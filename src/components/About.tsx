import { useMode } from './ModeContext';
import { STATS } from '../data';

export default function About() {
  const { isDesigner } = useMode();
  const border = isDesigner ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.07)';
  const accent = isDesigner ? '#c1440e' : '#c8ff00';
  const muted = isDesigner ? '#9a9490' : '#444444';
  const text = isDesigner ? '#1a1714' : '#e8e4db';

  return (
    <section
      id="about"
      className="grid grid-cols-2 transition-colors duration-700"
      style={{ borderTop: `1px solid ${border}` }}
    >
      <div className="px-12 py-16 transition-colors duration-700" style={{ borderRight: `1px solid ${border}` }}>
        <div
          className="font-mono uppercase text-[10px] tracking-[0.2em] mb-6 transition-colors duration-700"
          style={{ color: accent }}
        >
          About
        </div>
        <h2
          className="font-serif text-[2.2rem] leading-tight tracking-[-0.02em] mb-6 transition-colors duration-700"
          style={{ color: text }}
        >
          Two modes.<br />One person.
        </h2>
        <p className="font-mono text-[11px] leading-loose transition-colors duration-700" style={{ color: muted }}>
          {isDesigner
            ? "I got into design through engineering — frustrated that beautiful things broke in production. The ability to write the code changes how I design: I prototype in browser, I know what's expensive to build, and I never hand off a spec that can't ship."
            : "I design with code in my head. Three years of engineering means I know what's actually expensive to build, what's a one-liner, and where the interesting constraints live. I never hand off a spec that surprises the developer."}
        </p>
      </div>

      <div className="px-12 py-16 flex flex-col gap-10">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <div
              className="font-serif text-[3rem] leading-none tracking-[-0.03em] mb-1 transition-colors duration-700"
              style={{ color: text }}
            >
              {stat.value}
            </div>
            <div
              className="font-mono uppercase text-[10px] tracking-[0.1em] transition-colors duration-700"
              style={{ color: muted }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
