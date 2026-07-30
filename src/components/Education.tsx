import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

type Entry = {
  score: string;
  scoreLabel: string;
  degree: string;
  institution: string;
  meta: string;
  description?: string;
  chips?: string[];
  featured?: boolean;
};

const EDUCATION: Entry[] = [
  {
    score: '7.66',
    scoreLabel: 'CGPA / 10.0',
    degree: 'Bachelor of Technology in Artificial Intelligence',
    institution: 'National Institute of Technology (NIT) Surat',
    meta: '2022 – 2026 · Third Year · Currently Pursuing',
    description:
      'Specializing in machine learning, deep learning, computer vision and natural language processing, with strong foundations in mathematics and programming.',
    chips: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'SQL', 'Docker'],
    featured: true,
  },
  {
    score: '87%',
    scoreLabel: 'CBSE aggregate',
    degree: 'Higher Secondary (Class XII), Science',
    institution: 'Satyameva Jayate International School',
    meta: 'Ahmedabad · 2022 – 2023',
  },
  {
    score: '97%',
    scoreLabel: 'ICSE aggregate',
    degree: 'Secondary (Class X)',
    institution: 'Zydus School for Excellence',
    meta: 'Ahmedabad · 2019 – 2020',
  },
];

const Education = () => (
  <section id="education" className="band bg-paper">
    <div className="shell">
      <SectionHeading title="Education" />

      <div className="mx-auto flex max-w-[62rem] flex-col gap-[18px]">
        {EDUCATION.map((entry, i) => (
          <Reveal key={entry.degree} delay={i * 80}>
            <article
              data-lift=""
              className={`grid grid-cols-1 items-center gap-[18px] rounded-2xl border border-line shadow-lg card:grid-cols-[150px_minmax(0,1fr)] card:gap-7 ${
                entry.featured
                  ? 'grad-tint-135 p-7 card:p-8'
                  : 'bg-surface p-7 card:px-8 card:py-7'
              }`}
            >
              <p className="text-left card:text-center">
                <span
                  className={`block text-[2rem] font-bold leading-none tracking-[-.03em] ${
                    entry.featured ? 'text-accent' : 'text-accent-2'
                  }`}
                >
                  {entry.score}
                </span>
                <span className="mt-2 block text-[.72rem] font-bold uppercase tracking-[.12em] text-muted">
                  {entry.scoreLabel}
                </span>
              </p>

              <div className="min-w-0 border-t border-line pt-[18px] card:border-l card:border-t-0 card:pl-8 card:pt-0">
                <h3 className="text-[1.15rem] font-bold tracking-[-.02em] text-ink">
                  {entry.degree}
                </h3>
                <p
                  className={`mt-2.5 font-semibold text-accent ${
                    entry.featured ? 'text-base' : 'text-[.92rem]'
                  }`}
                >
                  {entry.institution}
                </p>
                <p className="mt-2 text-[.92rem] text-soft">{entry.meta}</p>

                {entry.description && (
                  <p className="mt-4 text-base leading-[1.7] text-muted">{entry.description}</p>
                )}

                {entry.chips && (
                  <div className="mt-4 flex flex-wrap gap-[7px]">
                    {entry.chips.map((chip) => (
                      <span
                        key={chip}
                        data-chip=""
                        className="rounded-full bg-chip px-[11px] py-[5px] text-[.72rem] font-medium text-muted"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
