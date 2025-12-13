import { X, Download } from 'lucide-react';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out animate-fade-in backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-5xl h-[85vh] bg-white rounded-2xl shadow-2xl animate-scale-in overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-teal-50">
                    <h3 className="text-xl font-bold text-gray-900">Resume Preview</h3>
                    <div className="flex items-center gap-3">
                        <a
                            href="/resume.pdf"
                            download
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover-button-3d transform-3d"
                        >
                            <Download size={18} />
                            <span>Download</span>
                        </a>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                            aria-label="Close modal"
                        >
                            <X size={24} className="text-gray-600" />
                        </button>
                    </div>
                </div>

                {/* PDF Preview */}
                <div className="w-full h-[calc(85vh-72px)] bg-gray-100">
                    <iframe
                        src="/resume.pdf"
                        className="w-full h-full border-0"
                        title="Resume Preview"
                    />
                </div>
            </div>
        </div>
    );
};

export default ResumeModal;
