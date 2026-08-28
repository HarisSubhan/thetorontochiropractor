import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * On route change, scrolls smoothly to the element matching the URL hash
 * (e.g. /services#orthotics -> #orthotics), or to the top of the page
 * when there is no hash. Used once in <Layout /> so every page benefits.
 */
export default function useScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [hash, pathname]);
}
