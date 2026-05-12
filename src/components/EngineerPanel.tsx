const COMMITS = [
  { hash: 'a3f91c2', message: 'ship: inference pipeline v2' },
  { hash: 'b12de90', message: 'feat: crdt merge resolution' },
  { hash: 'c44fa11', message: 'perf: 3× latency reduction' },
  { hash: 'd91bc03', message: 'fix: race condition in queue' },
  { hash: 'e07ca22', message: 'init: design system tokens' },
];

export default function EngineerPanel() {
  return (
    <div
      className="w-[340px] rounded-lg overflow-hidden"
      style={{ border: '1px solid rgba(255,255,255,0.07)' }}
    >
      {/* Traffic lights */}
      <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: '#1c1c1c' }}>
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      </div>

      {/* Terminal body */}
      <div className="px-5 py-4 font-mono text-xs leading-loose min-h-[180px]" style={{ background: '#0d0d0d' }}>
        <div className="flex gap-2">
          <span style={{ color: '#c8ff00' }}>~</span>
          <span style={{ color: '#e8e4db' }}>git log --oneline -5</span>
        </div>
        {COMMITS.map((c) => (
          <div key={c.hash} style={{ color: '#555' }}>
            {c.hash} {c.message}
          </div>
        ))}
        <div className="flex gap-2 mt-2">
          <span style={{ color: '#c8ff00' }}>~</span>
          <span
            className="inline-block w-[7px] h-[13px] align-middle"
            style={{
              background: '#c8ff00',
              animation: 'blink 1s step-end infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </div>
  );
}
