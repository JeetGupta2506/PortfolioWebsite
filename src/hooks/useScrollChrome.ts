import { useEffect, useState } from 'react';

/**
 * One rAF-throttled scroll listener feeding all the fixed chrome: the progress
 * rail, the nav's elevation, and the back-to-top button. The design polled on a
 * 200ms timer as well; an rAF-throttled passive listener plus a resize handler
 * covers the same ground without a permanent timer.
 */
export function useScrollMetrics() {
  const [metrics, setMetrics] = useState({ progress: 0, scrollY: 0 });

  useEffect(() => {
    let ticking = false;

    const update = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setMetrics({ progress: max > 0 ? Math.min(1, y / max) : 0, scrollY: y });
        ticking = false;
      });
    };

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return metrics;
}

/**
 * Active section for the nav. Mirrors the design's test: the section whose box
 * straddles the viewport midpoint wins, defaulting to the first id.
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0] ?? '');

  useEffect(() => {
    let ticking = false;

    const update = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const vh = window.innerHeight;
        let current = ids[0] ?? '';
        ids.forEach((id) => {
          const el = document.getElementById(id);
          if (!el) return;
          const rect = el.getBoundingClientRect();
          if (rect.top <= vh * 0.55 && rect.bottom >= vh * 0.45) current = id;
        });
        setActive(current);
        ticking = false;
      });
    };

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [ids]);

  return active;
}

/** Smooth-scroll to a section, offset for the sticky nav (design uses 70px). */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
}
