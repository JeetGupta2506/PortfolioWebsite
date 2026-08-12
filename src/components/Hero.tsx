import { useEffect, useState } from 'react';
import ResumeModal from './ResumeModal';
import Reveal from './Reveal';
import { ChevronDown, Download, Eye, Github, Linkedin, Mail } from './icons';
import { scrollToSection } from '../hooks/useScrollChrome';

const ROLES = ['Data Scientist', 'ML Engineer', 'GenAI Engineer'];

const TYPE_MS = 85;
const DELETE_MS = Math.max(20, TYPE_MS * 0.5);
const HOLD_MS = 1100;

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/JeetGupta2506', Icon: Github, external: true },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jeet-gupta-559099295',
    Icon: Linkedin,
    external: true,
  },
  { label: 'Email', href: 'mailto:guptajeet2506@gmail.com', Icon: Mail, external: false },
];

const Hero = () => {
  const [typed, setTyped] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const target = ROLES[roleIdx];

    if (!deleting && typed === target) {
      const hold = setTimeout(() => setDeleting(true), HOLD_MS);
      return () => clearTimeout(hold);
    }

    const timer = setTimeout(
      () => {
        if (!deleting) {
          setTyped(target.slice(0, typed.length + 1));
        } else if (typed !== '') {
          setTyped(typed.slice(0, -1));
        } else {
          setDeleting(false);
          setRoleIdx((idx) => (idx + 1) % ROLES.length);
        }
      },
      deleting ? DELETE_MS : TYPE_MS
    );

    return () => clearTimeout(timer);
  }, [typed, deleting, roleIdx]);

  return (
    <section
      id="home"
      className="band-tint relative flex min-h-[88vh] items-center overflow-hidden py-20"
    >
      {/* Drifting accent dots */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute left-[22%] top-[24%] h-3 w-3 animate-float-3d rounded-full bg-dot-1 opacity-70" />
        <span className="absolute right-[24%] top-[72%] h-4 w-4 animate-float-slow rounded-full bg-dot-2 opacity-60" />
        <span className="absolute left-[76%] top-[48%] h-2 w-2 animate-pulse-slow rounded-full bg-accent opacity-80" />
        <span className="absolute right-[34%] top-[33%] h-2 w-2 animate-float-3d rounded-full bg-accent-2 opacity-50 [animation-duration:11s]" />
        <span className="absolute bottom-[24%] left-[32%] h-3 w-3 animate-float-slow rounded-full bg-dot-3 opacity-[.45] [animation-duration:8s]" />
      </div>

      <div className="shell relative">
        <div className="grid grid-cols-1 items-center gap-9 wide:grid-cols-2 wide:gap-14">
          <div>
            <Reveal>
              <h1 className="h1-fluid font-bold text-ink">
                <span className="mb-1.5 block">I&apos;m a</span>
                <span className="grad-text block min-h-[1.2em]">
                  {typed}
                  <span
                    aria-hidden="true"
                    className="ml-1 inline-block h-[1em] w-[3px] translate-y-[.1em] animate-blink bg-accent"
                    style={{ WebkitTextFillColor: 'initial' }}
                  />
                </span>
                <span className="sr-only">{ROLES.join(', ')}</span>
              </h1>
            </Reveal>

            <Reveal delay={80}>
              <p className="mt-[22px] max-w-[38rem] text-[1.15rem] leading-[1.7] text-muted">
                Transforming complex data into actionable insights and building intelligent systems
                that drive business value through advanced analytics and machine learning.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-[30px] flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setResumeOpen(true)}
                  data-btn=""
                  className="grad-fill inline-flex items-center gap-2.5 rounded-xl px-6 py-[13px] text-[.92rem] font-semibold text-white shadow-lg"
                >
                  <Eye size={19} />
                  <span>View Resume</span>
                </button>

                <a
                  href="/resume.pdf"
                  download
                  data-btn=""
                  data-outline=""
                  className="inline-flex items-center gap-2.5 rounded-xl border-2 border-accent px-6 py-[13px] text-[.92rem] font-semibold text-accent dark:border-accent-ink dark:text-accent-ink"
                >
                  <Download size={19} />
                  <span>Download</span>
                </a>

                <button
                  type="button"
                  onClick={() => scrollToSection('projects')}
                  data-btn=""
                  data-outline=""
                  className="rounded-xl border-2 border-accent px-6 py-[13px] text-[.92rem] font-semibold text-accent dark:border-accent-ink dark:text-accent-ink"
                >
                  View My Work
                </button>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-7 flex gap-3.5">
                {SOCIALS.map(({ label, href, Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    data-social=""
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-line bg-surface text-muted shadow-md"
                  >
                    <Icon size={21} />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={140} className="flex justify-center">
            <div className="relative">
              <div
                data-card=""
                className="grad-fill-135 h-[16rem] w-[16rem] overflow-hidden rounded-full p-[5px] shadow-xl xs:h-[20rem] xs:w-[20rem]"
              >
                <img
                  src="/profile.jpg"
                  alt="Jeet Gupta"
                  data-zoom=""
                  className="block h-full w-full rounded-full object-cover"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
              <span
                aria-hidden="true"
                className="absolute -right-4 -top-4 h-8 w-8 animate-float-3d rounded-full bg-dot-1 opacity-60"
              />
              <span
                aria-hidden="true"
                className="absolute -bottom-6 -left-6 h-6 w-6 animate-float-slow rounded-full bg-dot-2 opacity-50"
              />
              <span
                aria-hidden="true"
                className="absolute -right-8 top-1/2 h-4 w-4 animate-pulse-slow rounded-full bg-dot-3 opacity-40 [animation-duration:6s]"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-14 flex justify-center">
          <button
            type="button"
            onClick={() => scrollToSection('about')}
            aria-label="Scroll to about"
            data-btn=""
            className="flex h-12 w-12 animate-bob items-center justify-center rounded-full border border-line bg-surface text-soft shadow-lg"
          >
            <ChevronDown size={26} />
          </button>
        </div>
      </div>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
};

export default Hero;
