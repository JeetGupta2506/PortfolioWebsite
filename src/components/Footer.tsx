import { scrollToSection } from '../hooks/useScrollChrome';

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
];

const ELSEWHERE = [
  { label: 'GitHub', url: 'https://github.com/JeetGupta2506', external: true },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/jeet-gupta-559099295', external: true },
  { label: 'Email', url: 'mailto:guptajeet2506@gmail.com', external: false },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    /* The footer stays ink-dark in both themes, as designed. */
    <footer className="border-t border-line bg-[#111827] px-0 pb-8 pt-14 text-[#F9FAFB]">
      <div className="shell">
        <div className="grid grid-cols-1 gap-10 card:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <p className="flex items-center gap-3">
              <span className="grad-fill-135 flex h-[38px] w-[38px] items-center justify-center rounded-xl text-[.92rem] font-bold text-white">
                JG
              </span>
              <span className="text-[1.15rem] font-bold">Jeet Gupta</span>
            </p>
            <p className="mt-4 max-w-[32rem] text-[.92rem] leading-[1.7] opacity-70">
              Data scientist and ML engineer building intelligent systems end to end — from the
              mathematics underneath a model to the infrastructure that serves it.
            </p>
          </div>

          <div>
            <p className="text-[.72rem] font-semibold uppercase tracking-[.1em] opacity-50">
              Sections
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  {/* py-1/-my-1 lifts the hit area past the 24px WCAG 2.2
                      target-size minimum without shifting the layout. */}
                  <button
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className="-my-1 border-0 bg-transparent px-0 py-1 text-[.92rem] text-inherit opacity-70 transition-opacity hover:opacity-100"
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[.72rem] font-semibold uppercase tracking-[.1em] opacity-50">
              Elsewhere
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {ELSEWHERE.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="-my-1 inline-block py-1 text-[.92rem] text-inherit opacity-70 transition-opacity hover:text-inherit hover:opacity-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-11 flex flex-wrap items-center justify-between gap-3.5 border-t border-white/[.14] pt-6">
          <p className="text-[.82rem] opacity-50">
            © {currentYear} Jeet Gupta — Ahmedabad, India
          </p>
          <p className="text-[.82rem] opacity-50">React · TypeScript · Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
