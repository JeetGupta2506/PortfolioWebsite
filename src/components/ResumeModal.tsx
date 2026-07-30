import { useEffect, useRef } from 'react';
import { Close } from './icons';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
    const closeButtonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if (!isOpen) return;

        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', onKey);

        const focusTimer = setTimeout(() => closeButtonRef.current?.focus(), 60);

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', onKey);
            clearTimeout(focusTimer);
            document.body.style.overflow = previousOverflow;
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
            <div
                onClick={onClose}
                className="absolute inset-0 bg-[rgba(17,24,39,.6)] backdrop-blur-[6px]"
            />

            <div
                role="dialog"
                aria-modal="true"
                aria-label="Resume preview"
                className="relative flex h-[86vh] w-full max-w-[56rem] flex-col overflow-hidden rounded-2xl bg-surface shadow-xl"
            >
                <div className="flex items-center justify-between gap-4 border-b border-line px-[22px] py-[18px]">
                    <p className="m-0 text-base font-bold text-ink">Résumé</p>
                    <div className="flex gap-2.5">
                        <a
                            href="/resume.pdf"
                            download
                            data-btn=""
                            className="grad-fill inline-flex items-center gap-2 rounded-xl px-4 py-[9px] text-[.82rem] font-semibold text-white"
                        >
                            Download
                        </a>
                        <button
                            ref={closeButtonRef}
                            type="button"
                            onClick={onClose}
                            aria-label="Close"
                            className="flex h-[38px] w-[38px] items-center justify-center rounded-xl border border-line bg-surface text-muted"
                        >
                            <Close size={18} />
                        </button>
                    </div>
                </div>

                <iframe
                    src="/resume.pdf"
                    title="Résumé preview"
                    className="w-full flex-1 border-0 bg-surface-2"
                />
            </div>
        </div>
    );
};

export default ResumeModal;
