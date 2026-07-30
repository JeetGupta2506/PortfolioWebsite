import type { ReactNode } from 'react';

/**
 * Icon set ported 1:1 from the design source's inline SVGs — same paths, same
 * 24px grid, same stroke weights. Kept local rather than pulled from an icon
 * library so the marks match the design exactly.
 */

export type IconProps = {
  size?: number;
  className?: string;
};

const Glyph = ({
  size = 20,
  className,
  strokeWidth = 2,
  children,
}: IconProps & { strokeWidth?: number; children: ReactNode }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    {children}
  </svg>
);

export const Burger = (p: IconProps) => (
  <Glyph {...p} strokeWidth={1.8}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </Glyph>
);

export const Close = (p: IconProps) => (
  <Glyph {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </Glyph>
);

export const Sun = (p: IconProps) => (
  <Glyph {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </Glyph>
);

export const Moon = (p: IconProps) => (
  <Glyph {...p}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </Glyph>
);

export const Eye = (p: IconProps) => (
  <Glyph {...p}>
    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </Glyph>
);

export const Download = (p: IconProps) => (
  <Glyph {...p}>
    <path d="M12 3v12" />
    <path d="m7 10 5 5 5-5" />
    <path d="M5 21h14" />
  </Glyph>
);

export const Github = (p: IconProps) => (
  <Glyph {...p}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 4.94-2.22 4.94-5.52a4.9 4.9 0 0 0-1.38-3.4 4.6 4.6 0 0 0-.09-3.4s-1.32-.4-4.3 1.6a12.6 12.6 0 0 0-6.46 0C6.79 2.4 5.47 2.8 5.47 2.8a4.6 4.6 0 0 0-.09 3.4A4.9 4.9 0 0 0 4 9.63c0 3.27 1.8 5.14 4.94 5.49a3.37 3.37 0 0 0-.94 2.58V22" />
  </Glyph>
);

export const Linkedin = (p: IconProps) => (
  <Glyph {...p}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </Glyph>
);

export const Mail = (p: IconProps) => (
  <Glyph {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 6 10-6" />
  </Glyph>
);

export const Phone = (p: IconProps) => (
  <Glyph {...p}>
    <path d="M5 3h4l2 5-3 2a12 12 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A18 18 0 0 1 3 5a2 2 0 0 1 2-2Z" />
  </Glyph>
);

export const Pin = (p: IconProps) => (
  <Glyph {...p}>
    <path d="M12 21s-7-4.6-7-10a7 7 0 0 1 14 0c0 5.4-7 10-7 10Z" />
    <circle cx="12" cy="11" r="2.5" />
  </Glyph>
);

export const Flag = (p: IconProps) => (
  <Glyph {...p}>
    <path d="M5 21V4" />
    <path d="M5 4h11l-1.5 3.5L16 11H5" />
  </Glyph>
);

export const Check = (p: IconProps) => (
  <Glyph {...p} strokeWidth={2.5}>
    <path d="m20 6-11 11-5-5" />
  </Glyph>
);

export const ChevronDown = (p: IconProps) => (
  <Glyph {...p}>
    <path d="m6 9 6 6 6-6" />
  </Glyph>
);

export const ArrowUp = (p: IconProps) => (
  <Glyph {...p}>
    <path d="M12 19V5" />
    <path d="m5 12 7-7 7 7" />
  </Glyph>
);
