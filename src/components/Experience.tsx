import type { ReactNode } from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { Check, Flag, Pin } from './icons';

type Role = {
  period: string;
  kind: string;
  title: string;
  company: string;
  /** Omit when there is no logo file; the tile falls back to initials. */
  logo?: string;
  description: string;
  achievements: string[];
  technologies?: string[];
  side: 'left' | 'right';
  featured?: boolean;
};

/**
 * Chronological, earliest first, so the "Where it started" → "Open to 2026
 * roles" bookends describe a real arc. Accenture stays on the right of the rail
 * so its accent border faces inward.
 */
const ROLES: Role[] = [
  {
    period: 'May 2025 – Jul 2025',
    kind: 'Internship',
    title: 'AI ML Intern',
    company: 'Accenture · Remote',
    logo: '/logos/accenture.png',
    description:
      'Contributed to building AI chatbots and agents for a Bank of Baroda web application and integrated GenAI workflows into banking solutions.',
    achievements: [
      "Coordinated with the team to develop chatbots and agents for Bank of Baroda's web application",
      'Learned and applied GenAI frameworks: LangChain, LangGraph, MCP, CrewAI and n8n',
      'Integrated generative AI workflows to streamline development of conversational agents',
    ],
    technologies: ['Python', 'LangChain', 'LangGraph', 'MCP', 'CrewAI', 'n8n', 'OpenAI'],
    side: 'right',
  },
  {
    period: 'Jul 2025 – Present',
    kind: 'Campus leadership',
    title: 'Technical Lead',
    company: 'Nexus Cell SVNIT · Surat',
    logo: '/logos/nexus.png',
    description:
      'Leading technical initiatives for Nexus Cell SVNIT, collaborating across campus cells for events and hackathons while mentoring juniors in full-stack and AI/ML.',
    achievements: [
      'Collaborated with campus cells to plan and run events and hackathons',
      'Mentored junior members in full-stack development and AI/ML',
      'Shipped features and bug fixes on the Nexus official website',
    ],
    side: 'left',
  },
  {
    period: 'Sep 2025 – Present',
    kind: 'Campus leadership',
    title: 'AI/ML Lead',
    company: 'GDGC NIT Surat · Surat',
    logo: '/logos/gdgc.png',
    description:
      'Leading AI/ML initiatives at Google Developer Groups on Campus NIT Surat — organizing workshops, conducting sessions and guiding students in machine learning and artificial intelligence.',
    achievements: [
      'Organized and conducted AI/ML workshops and technical sessions for students',
      'Mentored team members in machine learning, deep learning and AI technologies',
      'Collaborated with Google Developer Student Clubs to promote AI/ML education on campus',
    ],
    side: 'right',
  },
  {
    period: 'Dec 2025 – Feb 2026',
    kind: 'Internship',
    title: 'AI & Automation Intern',
    company: 'Clint',
    description:
      'Designed and shipped agentic automation for research and outreach — from multi-agent orchestration through to production calling assistants.',
    achievements: [
      'Built multi-agent workflows with LangGraph and CrewAI, coordinating agents across retrieval, synthesis and action for research and outreach',
      'Shipped AI calling assistants, RAG chatbots and lead-scraping pipelines that replaced manual prospecting end to end',
    ],
    technologies: ['LangGraph', 'CrewAI', 'RAG', 'Multi-agent systems', 'Web scraping'],
    side: 'left',
  },
  {
    period: 'Mar 2026 – Jul 2026',
    kind: 'Internship',
    title: 'AI Intern',
    company: 'WombTo18 Integrated Care Pvt. Ltd.',
    description:
      'Worked on the AI layer of a live healthcare product, from clinical document understanding through to the patient-facing conversational experience.',
    achievements: [
      'Built an OCR + AI extraction pipeline turning scanned lab reports and prescriptions into structured, queryable patient records on a live healthcare product',
      'Added RAG retrieval over the extracted corpus and shipped the conversational layer — chatbots and voicebots — into core patient-facing workflows',
      'Grounded assistant responses in real clinical records rather than model priors, cutting hallucinated answers in production',
    ],
    technologies: ['OCR', 'RAG', 'LLMs', 'Chatbots', 'Voicebots'],
    side: 'right',
    featured: true,
  },
];

/** "Accenture · Remote" → "A"; "Nexus Cell SVNIT · Surat" → "NC". */
const initials = (company: string) =>
  company
    .split('·')[0]
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();

const CURVES = {
  left: 'M50,0 C50,26 24,34 24,50 C24,66 50,74 50,100',
  right: 'M50,0 C50,26 76,34 76,50 C76,66 50,74 50,100',
  straight: 'M50,0 C50,30 50,70 50,100',
};

/**
 * The serpentine link between entries. The design only ships the centred curve;
 * below the card breakpoint the rail moves to a 34px left column, so the curve
 * would float away from it — a straight aligned segment is used there instead.
 */
const Connector = ({ dir }: { dir: keyof typeof CURVES }) => (
  <>
    <div aria-hidden="true" className="relative h-10 card:hidden">
      <span className="rail-glow left-[9.5px]" />
      <span className="rail-dash left-4" />
    </div>

    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="hidden h-16 w-full overflow-visible card:block"
    >
      {[
        { width: 15, opacity: 0.16, dash: undefined },
        { width: 2, opacity: 0.7, dash: '7 9' },
      ].map((stroke) => (
        <path
          key={stroke.width}
          d={CURVES[dir]}
          fill="none"
          stroke="var(--accent)"
          strokeWidth={stroke.width}
          strokeDasharray={stroke.dash}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          opacity={stroke.opacity}
        />
      ))}
    </svg>
  </>
);

const Rail = ({ featured }: { featured?: boolean }) => (
  <div className="relative order-1 flex items-center justify-center card:order-2">
    <span aria-hidden="true" className="rail-glow left-[9.5px] card:left-1/2 card:-translate-x-1/2" />
    <span aria-hidden="true" className="rail-dash left-4 card:left-1/2 card:-translate-x-1/2" />

    {featured ? (
      <span
        aria-hidden="true"
        className="grad-fill-135 relative flex h-9 w-9 items-center justify-center rounded-full text-white"
        style={{ boxShadow: '0 0 0 5px var(--paper), var(--shadow-lg)' }}
      >
        <Check size={17} />
      </span>
    ) : (
      <span
        aria-hidden="true"
        className="relative flex h-[26px] w-[26px] items-center justify-center rounded-full bg-surface"
        style={{ boxShadow: '0 0 0 3px var(--accent-2), var(--shadow-md)' }}
      >
        <span className="grad-fill-135 h-[9px] w-[9px] animate-pulse-slow rounded-full [animation-duration:2.6s]" />
      </span>
    )}
  </div>
);

const Milestone = ({ children, end }: { children: ReactNode; end?: boolean }) => (
  <div className="flex flex-col items-center">
    <span
      className={`inline-flex items-center gap-[9px] rounded-full text-[.72rem] font-bold uppercase tracking-[.08em] ${
        end
          ? 'grad-fill px-5 py-[9px] text-white shadow-lg'
          : 'border border-line bg-surface px-4 py-[7px] text-accent shadow-md'
      }`}
    >
      {children}
    </span>
  </div>
);

const RoleCard = ({ role }: { role: Role }) => (
  <div
    data-card=""
    className={`rounded-2xl border border-line bg-surface ${
      role.featured ? 'border-l-4 border-l-accent p-7 shadow-xl' : 'p-[26px] shadow-lg'
    }`}
  >
    <p className="flex flex-wrap items-center gap-2.5">
      <span
        className={`text-[.72rem] font-bold uppercase tracking-[.08em] ${
          role.featured ? 'text-accent' : 'text-accent-2'
        }`}
      >
        {role.period}
      </span>
      <span
        className={`rounded-full px-2.5 py-[3px] text-[.72rem] font-semibold ${
          role.featured ? 'grad-fill text-white' : 'bg-chip text-muted'
        }`}
      >
        {role.kind}
      </span>
    </p>

    <div className="mt-3.5 flex items-start gap-3.5">
      <span
        className={`flex shrink-0 items-center justify-center rounded-xl ${
          role.logo ? 'bg-chip' : 'grad-fill-135 text-white'
        } ${role.featured ? 'h-[52px] w-[52px]' : 'h-12 w-12'} ${
          role.logo ? (role.featured ? 'p-2' : 'p-[7px]') : ''
        }`}
      >
        {role.logo ? (
          <img
            src={role.logo}
            alt={role.company}
            loading="lazy"
            className="block max-h-full max-w-full object-contain"
          />
        ) : (
          <span className="text-[.92rem] font-bold tracking-[.02em]">{initials(role.company)}</span>
        )}
      </span>
      <div>
        <h3 className="text-[1.15rem] font-bold text-ink">{role.title}</h3>
        <p
          className={`mt-[5px] ${
            role.featured
              ? 'grad-text text-base font-bold'
              : 'text-[.92rem] font-semibold text-accent'
          }`}
        >
          {role.company}
        </p>
      </div>
    </div>

    <p
      className={`mt-4 leading-[1.75] text-muted ${role.featured ? 'text-base' : 'text-[.92rem]'}`}
    >
      {role.description}
    </p>

    <ul className={`mt-3.5 flex flex-col ${role.featured ? 'gap-2.5' : 'gap-[9px]'}`}>
      {role.achievements.map((achievement) => (
        <li key={achievement} className="flex gap-[11px] text-[.92rem] leading-[1.6] text-muted">
          <span
            aria-hidden="true"
            className={`mt-[7px] shrink-0 rounded-full ${
              role.featured ? 'grad-fill h-1.5 w-1.5' : 'h-[5px] w-[5px] bg-accent'
            }`}
          />
          {achievement}
        </li>
      ))}
    </ul>

    {role.technologies && (
      <div className="mt-[18px] flex flex-wrap gap-[7px] border-t border-line pt-4">
        {role.technologies.map((tech) => (
          <span
            key={tech}
            data-chip=""
            className="rounded-full bg-chip px-3 py-[5px] text-[.72rem] font-medium text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    )}
  </div>
);

const TimelineRow = ({ role }: { role: Role }) => (
  <div className="grid grid-cols-[34px_minmax(0,1fr)] items-stretch gap-[18px] card:grid-cols-[1fr_64px_1fr] card:gap-6">
    <Rail featured={role.featured} />

    <Reveal className={`order-2 ${role.side === 'left' ? 'card:order-1' : 'card:order-3'}`}>
      <RoleCard role={role} />
    </Reveal>

    <div
      aria-hidden="true"
      className={`hidden card:block ${role.side === 'left' ? 'card:order-3' : 'card:order-1'}`}
    />
  </div>
);

const Experience = () => (
  <section id="experience" className="band band-tint">
    <div className="shell">
      <SectionHeading
        title="Experience"
        intro="An enterprise GenAI internship, plus two campus leadership roles teaching and shipping."
      />

      <div className="mx-auto max-w-[66rem]">
        <Milestone>
          <Pin size={15} />
          Where it started
        </Milestone>

        {/* Each curve leans toward the side the next card lands on, so the rail
            stays in sync if the roles are ever reordered again. */}
        <Connector dir={ROLES[0].side} />

        {ROLES.map((role, i) => (
          <div key={role.title}>
            <TimelineRow role={role} />
            <Connector dir={ROLES[i + 1]?.side ?? 'straight'} />
          </div>
        ))}

        <Milestone end>
          <Flag size={15} />
          Open to new roles
        </Milestone>
      </div>
    </div>
  </section>
);

export default Experience;
