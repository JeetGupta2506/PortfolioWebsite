import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let ticking = false;
        const toggleVisibility = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                setIsVisible(window.scrollY > 300);
                ticking = false;
            });
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-40 p-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:scale-110 active:scale-95 animate-fade-in-up group"
                    aria-label="Back to top"
                >
                    <ArrowUp size={24} className="group-hover:animate-bounce" />
                </button>
            )}
        </>
    );
};

export default BackToTop;
