import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    // Jump instantly on a new page; only animate when moving within the same page
    const samePage = prevPathname.current === pathname;
    prevPathname.current = pathname;

    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: samePage ? 'smooth' : 'instant' });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash, key]);
  return null;
}
