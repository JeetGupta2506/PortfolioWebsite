import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { Github, Linkedin, Mail, Phone, Pin } from './icons';

const CHANNELS = [
  {
    Icon: Mail,
    label: 'Email',
    value: 'guptajeet2506@gmail.com',
    href: 'mailto:guptajeet2506@gmail.com',
    breakAll: true,
  },
  {
    Icon: Phone,
    label: 'Phone',
    value: '+91 7984060375',
    href: 'tel:+917984060375',
    breakAll: false,
  },
  {
    Icon: Pin,
    label: 'Location',
    value: 'Ahmedabad, India',
    href: null,
    breakAll: false,
  },
];

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/JeetGupta2506', Icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jeet-gupta-559099295', Icon: Linkedin },
];

const Contact = () => (
  <section id="contact" className="band band-tint">
    <div className="shell">
      <SectionHeading
        title="Let's Build Something Together"
        intro="Open to AI/ML roles, internships and collaborations. I read everything that lands here."
        introMax="40rem"
      />

      <div className="grid grid-cols-1 gap-5 card:grid-cols-3">
        {CHANNELS.map(({ Icon, label, value, href, breakAll }, i) => {
          const body = (
            <>
              <span
                data-icon-tile=""
                className="grad-tint-135 mx-auto flex h-[54px] w-[54px] items-center justify-center rounded-xl text-accent"
              >
                <Icon size={24} />
              </span>
              <p className="mt-4 text-[.72rem] font-semibold uppercase tracking-[.1em] text-faint">
                {label}
              </p>
              <p
                className={`mt-2 text-base font-semibold ${href ? 'text-accent' : 'text-ink'} ${
                  breakAll ? 'break-all' : ''
                }`}
              >
                {value}
              </p>
            </>
          );

          const shell =
            'rounded-2xl border border-line bg-surface p-7 text-center shadow-lg';

          return (
            <Reveal key={label} delay={i * 80} className="h-full">
              {href ? (
                <a href={href} data-card="" className={`block h-full text-inherit ${shell}`}>
                  {body}
                </a>
              ) : (
                <div data-card="" className={`h-full ${shell}`}>
                  {body}
                </div>
              )}
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={120}>
        <div className="mt-6 flex justify-center gap-3.5">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              data-social=""
              className="flex h-[50px] w-[50px] items-center justify-center rounded-full border border-line bg-surface text-muted shadow-md"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default Contact;
