import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const CERTIFICATES = [
  {
    name: 'Fundamentals of AI Agents Using RAG and LangChain',
    url: 'https://coursera.org/share/523440f624ef9a5be5b217c877232ad0',
  },
  {
    name: 'Machine Learning with Python',
    url: 'https://coursera.org/share/af8c43fc51a2d006d9ae7d0f65550e27',
  },
];

const Certifications = () => (
  <section id="certifications" className="band bg-paper">
    <div className="shell">
      <SectionHeading title="Certifications" />

      <div className="mx-auto grid max-w-[66rem] grid-cols-1 items-center gap-8 card:grid-cols-2 card:gap-12">
        {/* Overlapping, tilted certificate plates */}
        <Reveal>
          <div className="relative aspect-[10/9]">
            <img
              src="/certificates/ml-python.jpg"
              alt="Machine Learning with Python certificate"
              loading="lazy"
              className="absolute left-[5%] top-[6%] block w-[76%] -rotate-[5deg] rounded-xl shadow-xl"
            />
            <img
              src="/certificates/rag-langchain.jpg"
              alt="Fundamentals of AI Agents Using RAG and LangChain certificate"
              loading="lazy"
              className="absolute left-[19%] top-[28%] block w-[76%] rotate-[3deg] rounded-xl shadow-xl"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-2xl font-bold leading-[1.45] tracking-[-.015em] text-ink">
            Verified IBM credentials in generative AI and machine learning.
          </p>

          <div className="mt-6 flex flex-col">
            {CERTIFICATES.map((cert, i) => (
              <a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-baseline justify-between gap-4 border-t border-line py-4 text-inherit ${
                  i === CERTIFICATES.length - 1 ? 'border-b' : ''
                }`}
              >
                <span className="text-base font-semibold leading-[1.4] text-ink">{cert.name}</span>
                <span className="whitespace-nowrap text-[.82rem] font-semibold text-accent">
                  Verify ↗
                </span>
              </a>
            ))}
          </div>

          <p className="mt-[18px] text-[.82rem] text-soft">Both issued through Coursera.</p>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Certifications;
