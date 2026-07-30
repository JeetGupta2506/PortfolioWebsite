import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  /** Stagger in ms, applied on the way in — the design's data-reveal-delay. */
  delay?: number;
  className?: string;
};

/**
 * Scroll entry: opacity 0 → 1 and translate3d(0, 2.5rem, 0) → none over 800ms
 * on the design's easing curve. Resolves immediately under reduced motion or
 * when IntersectionObserver is missing, so content can never stay hidden.
 */
const Reveal = ({ children, delay = 0, className = '' }: RevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (
      !node ||
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: shown ? `${delay}ms` : '0ms' }}
      className={`reveal ${shown ? 'reveal-in' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
