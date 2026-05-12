import { useMode } from './ModeContext';

export default function ModeToggle() {
  const { setMode, toggle, isDesigner } = useMode();

  const bg = isDesigner ? '#f5f0e8' : '#080808';
  const border = isDesigner ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.07)';
  const accent = isDesigner ? '#c1440e' : '#c8ff00';
  const muted = isDesigner ? '#9a9490' : '#444444';

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-stretch h-[52px] transition-colors duration-700"
      style={{ borderBottom: `1px solid ${border}`, background: bg }}
    >
      <button
        onClick={() => setMode('engineer')}
        className="flex-1 flex items-center px-8 bg-transparent border-0 cursor-pointer"
      >
        <span
          className="font-mono uppercase text-[10px] tracking-[0.18em] transition-colors duration-700"
          style={{ color: !isDesigner ? accent : muted }}
        >
          Engineer
        </span>
      </button>

      <div className="w-[120px] flex items-center justify-center flex-shrink-0">
        <button
          onClick={toggle}
          className="relative overflow-hidden cursor-pointer bg-transparent w-[72px] h-[28px] rounded-full transition-colors duration-700"
          style={{ border: `1px solid ${muted}`, padding: 0 }}
          aria-label="Switch mode"
        >
          <span
            className="absolute top-[3px] left-[3px] w-5 h-5 rounded-full transition-all duration-700"
            style={{ background: accent, transform: isDesigner ? 'translateX(44px)' : 'translateX(0)' }}
          />
        </button>
      </div>

      <button
        onClick={() => setMode('designer')}
        className="flex-1 flex items-center justify-end px-8 bg-transparent border-0 cursor-pointer"
      >
        <span
          className="font-mono uppercase text-[10px] tracking-[0.18em] transition-colors duration-700"
          style={{ color: isDesigner ? accent : muted }}
        >
          Designer
        </span>
      </button>
    </header>
  );
}
