import { CONTACT } from '../data';

export default function Footer() {
  return (
    <footer id="contact" style={{ padding: '8vmin 8vw 6vmin' }}>
      <p style={{ fontSize: '0.75rem', opacity: 0.5, marginBottom: '2.5rem' }}>
        ## contact
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
        <a href={`mailto:${CONTACT.email}`} style={{ fontSize: '0.875rem', opacity: 0.75 }}>
          {CONTACT.email}
        </a>
        <a href={CONTACT.github} target="_blank" rel="noreferrer" style={{ fontSize: '0.875rem', opacity: 0.75 }}>
          github
        </a>
        <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" style={{ fontSize: '0.875rem', opacity: 0.75 }}>
          linkedin
        </a>
        <a href={CONTACT.resume} target="_blank" rel="noreferrer" style={{ fontSize: '0.875rem', opacity: 0.75 }}>
          resume ↗
        </a>
      </div>

      <p style={{ marginTop: '6vmin', fontSize: '0.6875rem', opacity: 0.35 }}>© 2026 russal arya</p>
    </footer>
  );
}
