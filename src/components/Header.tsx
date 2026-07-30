import { useEffect, useState } from 'react';
import { Burger, Close, Moon, Sun } from './icons';
import { scrollToSection, useActiveSection, useScrollMetrics } from '../hooks/useScrollChrome';
import type { Theme } from '../hooks/useTheme';

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
] as const;

const SECTION_IDS = [
  'home', 'about', 'experience', 'projects', 'skills', 'education', 'certifications', 'contact',
] as const;

type HeaderProps = {
  theme: Theme;
  toggleTheme: () => void;
};

const Header = ({ theme, toggleTheme }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScrollMetrics();
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const go = (id: string) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  const goHome = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const themeToggle = (className: string) => (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      data-btn=""
      className={`flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-muted ${className}`}
    >
      {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );

  return (
    <header
      className="sticky top-0 z-50 border-b border-line bg-paper transition-shadow duration-[400ms]"
      style={{ boxShadow: scrollY > 16 ? 'var(--shadow-lg)' : 'none' }}
    >
      <div className="mx-auto flex max-w-[80rem] items-center justify-between gap-6 px-6 py-[14px]">
        <button
          type="button"
          onClick={goHome}
          aria-label="Back to top"
          className="flex items-center gap-3 border-0 bg-transparent p-0 font-[inherit]"
        >
          <span className="grad-fill-135 flex h-[38px] w-[38px] items-center justify-center rounded-xl text-[.92rem] font-bold text-white">
            JG
          </span>
          <span className="text-left">
            <span className="block text-base font-bold text-ink">Jeet Gupta</span>
            <span className="mt-px block text-[.72rem] font-medium uppercase tracking-[.06em] text-muted">
              AI / ML Engineer
            </span>
          </span>
        </button>

        {/* Mobile: the design ships only a burger here; the theme control is kept
            reachable on small screens rather than being desktop-only. */}
        <div className="flex items-center gap-2 nav:hidden">
          {themeToggle('')}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-xl border border-line bg-transparent text-ink"
          >
            {menuOpen ? <Close size={20} /> : <Burger size={20} />}
          </button>
        </div>

        <nav aria-label="Primary" className="hidden items-center gap-[2px] nav:flex">
          {NAV.map((item) => {
            const on = active === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                aria-current={on ? 'true' : undefined}
                className={`rounded-xl px-[13px] py-2 text-[.92rem] font-medium transition-colors hover:bg-chip hover:text-accent ${
                  on ? 'bg-chip text-accent dark:text-accent-ink' : 'bg-transparent text-muted'
                }`}
              >
                {item.label}
              </button>
            );
          })}

          {themeToggle('ml-2.5')}

          <button
            type="button"
            onClick={() => go('contact')}
            data-btn=""
            className="grad-fill ml-2 rounded-xl px-5 py-2.5 text-[.92rem] font-semibold text-white shadow-md"
          >
            Hire me
          </button>
        </nav>
      </div>

      {menuOpen && (
        <div className="border-t border-line bg-paper px-6 pb-[18px] pt-2.5 nav:hidden">
          <div className="flex flex-col gap-[2px]">
            {NAV.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.id)}
                className="rounded-xl px-3 py-[13px] text-left text-base font-medium text-ink hover:bg-chip"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => go('contact')}
              className="grad-fill mt-2 rounded-xl px-3 py-3.5 text-center text-base font-semibold text-white"
            >
              Get in touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
