import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const FACTS = [
  { label: 'Focus', value: 'Generative AI' },
  { label: 'Foundation', value: 'ML · DL · NLP' },
  { label: 'Degree', value: 'B.Tech AI, NIT Surat' },
  { label: 'Based in', value: 'Ahmedabad, India' },
];

const About = () => (
  <section id="about" className="band bg-paper">
    <div className="shell">
      <SectionHeading title="About Me" />

      <div className="mx-auto max-w-[64rem]">
        <Reveal delay={80}>
          <p
            data-card=""
            className="max-w-[52ch] rounded-2xl border-l-4 border-accent bg-surface px-7 py-[26px] text-2xl font-bold leading-[1.45] tracking-[-.015em] text-ink shadow-lg"
          >
            I am not just an algorithm developer; I am an engineer who builds end-to-end systems
            that are <span className="grad-text">reliable, scalable, and truly intelligent.</span>
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-9 border-t border-line pt-[30px] wide:grid-cols-2 wide:gap-11">
          <Reveal delay={140}>
            <p className="mb-3 text-[.72rem] font-bold uppercase tracking-[.14em] text-faint">
              The foundation
            </p>
            <p className="text-base leading-[1.85] text-muted">
              My journey in AI is built on a comprehensive foundation. I started with the core
              principles of Machine Learning, mastering the algorithms that extract patterns from
              data. This led me to the world of Deep Learning, where I built and trained complex
              neural networks for vision and language tasks. My passion for language and
              understanding naturally steered me toward Natural Language Processing, where I worked
              on everything from text classification to machine translation.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mb-3 text-[.72rem] font-bold uppercase tracking-[.14em] text-accent">
              The focus today
            </p>
            <p className="text-base leading-[1.85] text-muted">
              Today, my focus is on the most dynamic field to emerge from this convergence:
              Generative AI. I see it as the culmination of ML, DL, and NLP. My work involves
              leveraging Large Language Models to create solutions that can reason, generate, and
              collaborate — building accurate RAG systems, customizing models for specific domains,
              and creating frameworks for AI agents to work in concert.
            </p>
          </Reveal>
        </div>

        <Reveal delay={260}>
          {/* The design collapses these to two columns below 901px, dropping the
              dividers and horizontal padding with them. */}
          <dl className="mt-9 grid grid-cols-2 border-t border-line wide:grid-cols-4">
            {FACTS.map((fact, i) => (
              <div
                key={fact.label}
                className={`pt-[18px] wide:pr-[18px] ${
                  i < FACTS.length - 1 ? 'wide:border-r wide:border-line' : ''
                } ${i > 0 ? 'wide:pl-[18px]' : ''}`}
              >
                <dt className="text-[.72rem] font-bold uppercase tracking-[.12em] text-faint">
                  {fact.label}
                </dt>
                <dd className="mt-2 text-base font-bold text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;
