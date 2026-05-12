const cells = [
  {
    type: 'swatch',
    bg: '#c1440e',
    label: 'Terracotta',
    labelColor: 'rgba(255,255,255,0.5)',
  },
  {
    type: 'type',
    bg: '#ede8df',
    label: 'DM Serif',
    labelColor: 'rgba(26,23,20,0.4)',
  },
  {
    type: 'shape',
    bg: '#f5f0e8',
    label: 'Form',
    labelColor: 'rgba(26,23,20,0.4)',
  },
  {
    type: 'swatch',
    bg: '#1a1714',
    label: 'Ink',
    labelColor: 'rgba(255,255,255,0.3)',
  },
  {
    type: 'grid',
    bg: '#f5f0e8',
    label: 'Layout',
    labelColor: 'rgba(26,23,20,0.4)',
  },
  {
    type: 'swatch',
    bg: '#e8c49a',
    label: 'Sand',
    labelColor: 'rgba(26,23,20,0.4)',
  },
];

export default function DesignerPanel() {
  return (
    <div
      className="absolute inset-0 grid"
      style={{
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr',
        gap: '1px',
        background: 'rgba(0,0,0,0.08)',
      }}
    >
      {cells.map((cell, i) => (
        <div
          key={i}
          className="relative flex items-center justify-center overflow-hidden transition-opacity duration-200 hover:opacity-90"
          style={{ background: cell.bg }}
        >
          {cell.type === 'type' && (
            <span className="font-serif italic text-[3.5rem] leading-none" style={{ color: '#1a1714' }}>
              Aa
            </span>
          )}
          {cell.type === 'shape' && (
            <span
              className="w-16 h-16 rounded-full"
              style={{ border: '1.5px solid rgba(26,23,20,0.3)' }}
            />
          )}
          {cell.type === 'grid' && (
            <div className="grid grid-cols-2 gap-1.5 p-5 w-full h-full">
              {[0, 1, 2, 3].map((j) => (
                <div
                  key={j}
                  className="rounded-sm"
                  style={{
                    background: j === 1 ? 'rgba(193,68,14,0.3)' : '#ede8df',
                  }}
                />
              ))}
            </div>
          )}
          <span
            className="absolute bottom-3 left-3 font-mono text-[9px] tracking-[0.15em] uppercase"
            style={{ color: cell.labelColor }}
          >
            {cell.label}
          </span>
        </div>
      ))}
    </div>
  );
}
