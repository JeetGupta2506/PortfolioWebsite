import { useEffect, useRef, useState } from 'react';
import { X, Github, ExternalLink } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  metrics: Record<string, string>;
};

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [visible, setVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // enter animation trigger
  useEffect(() => {
    setVisible(true);
    // focus the close button when modal opens
    setTimeout(() => closeButtonRef.current?.focus(), 50);
  }, []);

  // focus trap
  useEffect(() => {
    const root = modalRef.current;
    if (!root) return;

    const focusableSelector = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
    const nodes = Array.from(root.querySelectorAll<HTMLElement>(focusableSelector)).filter(n => n.offsetParent !== null);
    if (nodes.length === 0) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];

    const handleKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    root.addEventListener('keydown', handleKey as any);
    return () => root.removeEventListener('keydown', handleKey as any);
  }, []);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-modal-title-${project.id}`}
        className={`relative w-full mx-2 md:mx-auto max-w-lg md:max-w-4xl bg-white dark:bg-gray-900 rounded-xl md:rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 ease-out ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        style={{ maxHeight: '90vh' }}
      >
        <div className="flex items-start justify-between p-4 border-b dark:border-gray-800">
          <h3 id={`project-modal-title-${project.id}`} className="text-lg font-bold">{project.title}</h3>
          <button ref={closeButtonRef} onClick={onClose} aria-label="Close" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
            <X size={18} />
          </button>
        </div>

        <div className="p-4 md:p-6 max-h-[75vh] md:max-h-[70vh] overflow-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <img src={project.image} alt={project.title} className="w-full h-44 md:h-48 object-cover rounded-md shadow-sm" />

              <div className="mt-4 space-y-2">
                <div className="flex flex-wrap gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e)=>e.stopPropagation()} className="inline-flex items-center px-3 py-2 bg-gray-100 rounded-md text-sm hover:bg-gray-200">
                    <Github size={14} />
                    <span className="ml-2">Code</span>
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={(e)=>e.stopPropagation()} className="inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                    <ExternalLink size={14} />
                    <span className="ml-2">Live</span>
                  </a>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-gray-600">Technologies</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 bg-gray-100 rounded-md">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-4">
              <p className="text-sm text-gray-700 leading-relaxed">{project.description}</p>

              <section>
                <h4 className="font-semibold">Overview</h4>
                <p className="text-sm text-gray-600 mt-2">MLXplore is a full-stack Machine Learning experimentation platform designed to simplify building, testing, and exploring ML models. It supports classification, regression, and clustering with dataset previews, model training, visualizations, and hyperparameter tuning.</p>
              </section>

              <section>
                <h4 className="font-semibold">Key features</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                  <li>End-to-end ML experimentation with interactive visualizations.</li>
                  <li>Interactive algorithm playgrounds and dataset exploration.</li>
                  <li>Model training, evaluation metrics, and hyperparameter tuning.</li>
                  <li>Light/Dark theming and a modern UI built with Material-UI and React.</li>
                </ul>
              </section>

              <section>
                <h4 className="font-semibold">Technology</h4>
                <p className="text-sm text-gray-600 mt-2">Frontend: React, Material-UI, TypeScript. Backend: FastAPI, Python. ML: scikit-learn, pandas, numpy.</p>
              </section>

              <section>
                <h4 className="font-semibold">Try it</h4>
                <p className="text-sm text-gray-600 mt-2">Live demo: <a href="https://ml-xplore-omega.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">https://ml-xplore-omega.vercel.app/</a></p>
              </section>

              <section>
                <h4 className="font-semibold">Installation (short)</h4>
                <div className="mt-2 text-sm text-gray-600 space-y-1">
                  <div>Backend: FastAPI — create virtualenv, pip install -r requirements.txt, run main.py</div>
                  <div>Frontend: npm install, npm start</div>
                </div>
              </section>

              <section>
                <h4 className="font-semibold">Screenshots</h4>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <img src={project.image} alt={`${project.title} screenshot`} className="w-full h-36 object-cover rounded-md" />
                  {/* If you have more screenshots in public/screenshots, add them and update the src accordingly */}
                  <a href="https://github.com/JeetGupta2506/MLXplore/tree/main/screenshots" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center border-2 border-dashed rounded-md text-sm text-gray-600">View more screenshots</a>
                </div>
              </section>

              <section>
                <h4 className="font-semibold">Developer</h4>
                <p className="text-sm text-gray-600">Created by Jeet Gupta — <a href="https://github.com/JeetGupta2506" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">GitHub</a> · <a href="mailto:guptajeet2506@gmail.com" className="text-blue-600 underline">Email</a></p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
