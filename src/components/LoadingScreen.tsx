import { useState, useEffect } from 'react';

const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[100] bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center animate-fade-out">
            <div className="text-center">
                {/* Logo/Initials */}
                <div className="mb-8 animate-bounce-in">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center shadow-2xl shadow-blue-500/50">
                        <span className="text-white font-bold text-4xl">JG</span>
                    </div>
                </div>

                {/* Loading Text */}
                <h2 className="text-2xl font-bold text-white mb-4 animate-fade-in-up">
                    Loading Portfolio
                </h2>

                {/* Loading Bar */}
                <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden mx-auto">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-teal-600 animate-expand"></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
