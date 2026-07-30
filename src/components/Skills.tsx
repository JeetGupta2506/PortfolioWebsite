import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const SKILL_GROUPS = [
  {
    category: 'AI & Machine Learning',
    skills: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision'],
  },
  {
    category: 'Programming & Frameworks',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
  },
  {
    category: 'Data & Analytics',
    skills: ['Data Analysis', 'Statistical Modeling', 'Pandas & NumPy', 'Data Visualization'],
  },
  {
    category: 'Databases & Cloud',
    skills: ['SQL & Databases', 'PostgreSQL', 'MongoDB', 'AWS'],
  },
  {
    category: 'Web Development',
    skills: ['React', 'Node.js', 'FastAPI', 'Flask'],
  },
  {
    category: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'Kubernetes', 'Jupyter'],
  },
];

const Skills = () => (
  <section id="skills" className="band band-tint-alt relative overflow-hidden">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="absolute right-[6%] top-[22%] h-40 w-40 animate-float-3d rounded-full bg-dot-1 opacity-[.16] [animation-duration:12s]" />
      <span className="absolute bottom-[28%] left-[5%] h-32 w-32 animate-float-slow rounded-full bg-dot-2 opacity-20 [animation-duration:14s]" />
    </div>

    <div className="shell relative">
      <SectionHeading title="Skills & Expertise" />

      <div className="mx-auto grid max-w-[70rem] grid-cols-1 gap-5 card:grid-cols-2 wide:grid-cols-3">
        {SKILL_GROUPS.map((group, i) => (
          <Reveal key={group.category} delay={i * 60}>
            <div
              data-card=""
              className="h-full rounded-2xl border border-line bg-surface p-6 shadow-lg"
            >
              <p className="mb-3.5 border-b border-line pb-2.5 text-[.72rem] font-bold uppercase tracking-[.12em] text-ink">
                {group.category}
              </p>
              <p className="text-[.92rem] leading-[2] text-muted">
                {group.skills.map((skill, idx) => (
                  <span key={skill}>
                    {idx > 0 && <br />}
                    {skill}
                  </span>
                ))}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
