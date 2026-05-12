import { useMode } from './ModeContext';
import { MARQUEE_ITEMS } from '../data';

export default function Marquee() {
  const { isDesigner } = useMode();

  const border = isDesigner ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.07)';
  const accent = isDesigner ? '#c1440e' : '#c8ff00';
  const muted = isDesigner ? '#9a9490' : '#444';

  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      className="overflow-hidden border-y py-4 transition-colors duration-700"
      style={{ borderColor: border }}
    >
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{ animation: 'marquee 24s linear infinite' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 font-mono text-[10px] tracking-[0.15em] uppercase flex-shrink-0 transition-colors duration-700"
            style={{ color: muted }}
          >
            {item}
            <span style={{ color: accent, fontSize: '1rem' }}>·</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
