import { useEffect, useState } from 'react';

/**
 * Brief splash. The design source is a page, not an app shell, so this keeps the
 * existing behaviour and simply adopts the blue/teal tokens and JG monogram.
 */
const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isExiting, setIsExiting] = useState(false);
    const [filled, setFilled] = useState(false);

    useEffect(() => {
        const start = requestAnimationFrame(() => setFilled(true));
        const exitTimer = setTimeout(() => setIsExiting(true), 1400);
        const unmountTimer = setTimeout(() => setIsLoading(false), 1900);

        return () => {
            cancelAnimationFrame(start);
            clearTimeout(exitTimer);
            clearTimeout(unmountTimer);
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div
            aria-hidden="true"
            className={`fixed inset-0 z-[90] flex items-center justify-center bg-paper transition-opacity duration-500 ${
                isExiting ? 'opacity-0' : 'opacity-100'
            }`}
        >
            <div className="text-center">
                <div className="grad-fill-135 mx-auto flex h-24 w-24 items-center justify-center rounded-2xl shadow-xl">
                    <span className="text-4xl font-bold text-white">JG</span>
                </div>

                <p className="mt-6 text-[.72rem] font-semibold uppercase tracking-[.14em] text-faint">
                    Loading portfolio
                </p>

                <div className="mx-auto mt-5 h-1 w-64 overflow-hidden rounded-full bg-chip">
                    <div
                        className="grad-fill h-full w-full origin-left transition-transform duration-1000 ease-dc"
                        style={{ transform: `scaleX(${filled ? 1 : 0.04})` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
