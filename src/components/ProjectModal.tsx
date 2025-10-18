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
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={onClose} />

      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-modal-title-${project.id}`}
        className={`relative w-full mx-2 md:mx-auto max-w-lg md:max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 ease-out ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        style={{ maxHeight: '90vh' }}
      >
        <div className="relative">
          <div className="absolute top-4 right-4 z-10">
            <button
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Close"
              className="p-2.5 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg transition-all duration-200 hover:scale-110 group"
            >
              <X size={20} className="text-gray-700 group-hover:text-gray-900" />
            </button>
          </div>

          <div className="relative h-64 md:h-80 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h3
                id={`project-modal-title-${project.id}`}
                className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg"
              >
                {project.title}
              </h3>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 max-h-[calc(90vh-16rem)] md:max-h-[calc(90vh-20rem)] overflow-auto">
          <div className="space-y-6">
            <div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium border border-blue-100 hover:bg-blue-100 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-5 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-all duration-200 hover:shadow-lg hover:scale-105"
                >
                  <Github size={18} />
                  <span>View Code</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all duration-200 hover:shadow-lg hover:scale-105"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
