import { useState } from 'react';
import { CONTACT } from '../data';

const links = [
  { label: 'work', href: '#work' },
  { label: 'about', href: '#about' },
  { label: 'contact', href: '#contact' },
  { label: 'resume ↗', href: CONTACT.resume, external: true },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          background: 'var(--bg)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 8vw',
        }}
      >
        <a href="#" style={{ fontSize: '0.8125rem', opacity: 0.9 }}>
          russal arya
        </a>

        <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center', fontSize: '0.75rem', opacity: 0.45 }}>
          {links.map(({ label, href, external }) => (
            <a key={label} href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
              {label}
            </a>
          ))}
        </div>

        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
          }}
        >
          <span style={{ display: 'block', width: '20px', height: '1px', background: 'var(--fg)', opacity: open ? 0 : 0.7, transition: 'opacity 0.2s' }} />
          <span style={{ display: 'block', width: '20px', height: '1px', background: 'var(--fg)', opacity: 0.7 }} />
          <span style={{ display: 'block', width: '20px', height: '1px', background: 'var(--fg)', opacity: open ? 0 : 0.7, transition: 'opacity 0.2s' }} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="mobile-menu"
        style={{
          display: 'none',
          position: 'fixed',
          inset: 0,
          zIndex: 9,
          background: 'var(--bg)',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 8vw',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.2s',
        }}
      >
        {links.map(({ label, href, external }) => (
          <a
            key={label}
            href={href}
            onClick={() => setOpen(false)}
            {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
            style={{ fontSize: '1.5rem', opacity: 0.7, paddingBlock: '0.75rem' }}
          >
            {label}
          </a>
        ))}
      </div>
    </>
  );
}
