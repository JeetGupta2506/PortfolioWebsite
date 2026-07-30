import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

type Project = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  technologies: string[];
  github: string;
  live?: string;
};

const PROJECTS: Project[] = [
  {
    eyebrow: 'Full-stack · ML',
    title: 'MLXplore — Interactive ML Experimentation Platform',
    description:
      'Full-stack platform to explore, train and visualize ML models across classification, regression and clustering — dataset preview, algorithm playgrounds, model training and hyperparameter tuning.',
    image: '/MLXplore.png',
    alt: 'MLXplore',
    technologies: ['React', 'Material-UI', 'TypeScript', 'FastAPI', 'Python', 'scikit-learn', 'pandas'],
    github: 'https://github.com/JeetGupta2506/MLXplore',
    live: 'https://ml-xplore-omega.vercel.app/',
  },
  {
    eyebrow: 'Machine learning',
    title: 'Movie Recommendation System (Bollywood)',
    description:
      'Web-scraped a custom Bollywood movies dataset, then implemented collaborative and content-based recommendation with interactive filtering.',
    image: '/MovieRecommendation.png',
    alt: 'Movie Recommendation System',
    technologies: ['Python', 'Streamlit', 'BeautifulSoup', 'scikit-learn', 'pandas'],
    github: 'https://github.com/JeetGupta2506/Movie-Recommendation-System',
    live: 'https://movierecommendationbollywood.streamlit.app/',
  },
  {
    eyebrow: 'Deep learning',
    title: 'Multi-Disease Classifier',
    description:
      'Predicts diabetes, asthma, blood pressure and typhoid from symptoms and demographic data — dedicated input forms, pre-trained models and the optimal algorithm per disease.',
    image: '/Medical-Classifier.png',
    alt: 'Multi-Disease Classifier',
    technologies: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'Pandas', 'Streamlit'],
    github: 'https://github.com/JeetGupta2506/Multi-Disease-Prediction',
    live: 'https://multi-disease-prediction-p55veox274sezpbejfkl8b.streamlit.app/',
  },
  {
    eyebrow: 'GenAI · RAG',
    title: 'Multi-Document Embedding Search Engine with Caching',
    description:
      'Semantic search across multiple documents using embeddings, with intelligent caching for retrieval performance and similarity matching.',
    image: '/RAG.png',
    alt: 'Embedding search engine',
    technologies: ['Python', 'Sentence-Transformers', 'FAISS', 'Redis', 'Flask'],
    github: 'https://github.com/JeetGupta2506/Multi-document-Embedding-Search-Engine-with-Caching',
  },
];

const Projects = () => (
  <section id="projects" className="band bg-paper">
    <div className="shell">
      <SectionHeading title="Featured Projects" />

      <div className="mx-auto grid max-w-[66rem] grid-cols-1 gap-5 card:grid-cols-2 card:gap-6">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={i * 60} className="h-full">
            <article
              data-card=""
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  data-zoom=""
                  className="block h-48 w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-[26px]">
                <span className="text-[.72rem] font-bold uppercase tracking-[.1em] text-accent">
                  {project.eyebrow}
                </span>
                <h3 className="mt-2.5 text-[1.15rem] font-bold leading-[1.3] text-ink">
                  {project.title}
                </h3>
                <p className="mt-[11px] text-[.92rem] leading-[1.7] text-muted">
                  {project.description}
                </p>

                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      data-chip=""
                      className="rounded-full bg-chip px-[11px] py-1 text-[.72rem] font-medium text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-[9px] pt-[18px]">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-btn=""
                      className="grad-fill rounded-xl px-[15px] py-2 text-[.82rem] font-semibold text-white"
                    >
                      Live demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-btn=""
                    className="rounded-xl bg-chip px-[15px] py-2 text-[.82rem] font-semibold text-muted"
                  >
                    {project.live ? 'Code' : 'View code'}
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
