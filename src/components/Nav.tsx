import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT } from '../data';

const hashLinks = [
  { label: 'work', href: '/#work' },
  { label: 'about', href: '/#about' },
  { label: 'contact', href: '/#contact' },
  { label: 'resume ↗', href: CONTACT.resume, external: true },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    const onClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, []);

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
        <a href="/" style={{ fontSize: '0.8125rem', opacity: 1 }}>
          russal arya
        </a>

        <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center', fontSize: '0.75rem', opacity: 0.8 }}>
          <Link to="/consulting">consulting</Link>
          {hashLinks.map(({ label, href, external }) => (
            <a key={label} href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
              {label}
            </a>
          ))}
        </div>

        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
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
          <span style={{ display: 'block', width: '20px', height: '1px', background: 'var(--fg)', opacity: open ? 0 : 0.85, transition: 'opacity 0.2s' }} />
          <span style={{ display: 'block', width: '20px', height: '1px', background: 'var(--fg)', opacity: 0.85 }} />
          <span style={{ display: 'block', width: '20px', height: '1px', background: 'var(--fg)', opacity: open ? 0 : 0.85, transition: 'opacity 0.2s' }} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        ref={menuRef}
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
        <Link to="/consulting" onClick={() => setOpen(false)} style={{ fontSize: '1.5rem', opacity: 0.85, paddingBlock: '0.75rem' }}>consulting</Link>
        {hashLinks.map(({ label, href, external }) => (
          <a
            key={label}
            href={href}
            onClick={() => setOpen(false)}
            {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
            style={{ fontSize: '1.5rem', opacity: 0.85, paddingBlock: '0.75rem' }}
          >
            {label}
          </a>
        ))}
      </div>
    </>
  );
}
