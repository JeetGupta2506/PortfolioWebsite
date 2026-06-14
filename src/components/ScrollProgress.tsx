import { useState, useEffect } from 'react';

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        let ticking = false;
        const updateScrollProgress = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrolled = window.scrollY;
                const progress = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0;
                setScrollProgress(progress);
                ticking = false;
            });
        };

        window.addEventListener('scroll', updateScrollProgress, { passive: true });
        updateScrollProgress(); // Initial calculation

        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-[60] h-1.5 bg-gray-200 dark:bg-gray-800">
            <div
                className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 transition-all duration-150 ease-out shadow-lg shadow-blue-500/50"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    );
};

export default ScrollProgress;
