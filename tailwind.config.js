/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Theming is driven by [data-theme] on <html>, matching the design source.
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    // Breakpoints mirror the design's own thresholds (max-width 700/820/900),
    // expressed mobile-first so the layout can be written without !important.
    screens: {
      xs: '481px',
      sm: '640px',
      card: '701px',
      md: '768px',
      nav: '821px',
      wide: '901px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        paper: 'var(--paper)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        ink: 'var(--text)',
        muted: 'var(--muted)',
        soft: 'var(--soft)',
        faint: 'var(--faint)',
        line: 'var(--border)',
        chip: 'var(--chip)',
        accent: 'var(--accent)',
        'accent-2': 'var(--accent-2)',
        'accent-ink': 'var(--accent-ink)',
        'dot-1': 'var(--dot-1)',
        'dot-2': 'var(--dot-2)',
        'dot-3': 'var(--dot-3)',
      },
      // Themed shadow ramp — dark mode deepens these via the custom properties.
      boxShadow: {
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
      },
      transitionTimingFunction: {
        dc: 'cubic-bezier(.22,.61,.36,1)',
      },
      keyframes: {
        'float-3d': {
          '0%,100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-18px,0)' },
        },
        'float-slow': {
          '0%,100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(12px,-14px,0)' },
        },
        'pulse-slow': {
          '0%,100%': { opacity: '.8', transform: 'scale(1)' },
          '50%': { opacity: '.4', transform: 'scale(1.25)' },
        },
        blink: {
          '0%,45%': { opacity: '1' },
          '55%,100%': { opacity: '0' },
        },
        bob: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(7px)' },
        },
      },
      animation: {
        'float-3d': 'float-3d 7s ease-in-out infinite',
        'float-slow': 'float-slow 9s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 5s ease-in-out infinite',
        blink: 'blink 1.1s steps(1) infinite',
        bob: 'bob 2.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
