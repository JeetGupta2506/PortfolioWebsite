import { useEffect } from 'react';

declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
        dataLayer?: any[];
    }
}

const useGoogleAnalytics = (measurementId: string) => {
    useEffect(() => {
        if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
            console.log('Google Analytics: Measurement ID not configured');
            return;
        }

        // Load Google Analytics script
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
        script.async = true;
        document.head.appendChild(script);

        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        function gtag(...args: any[]) {
            window.dataLayer?.push(args);
        }
        window.gtag = gtag;

        gtag('js', new Date());
        gtag('config', measurementId, {
            page_path: window.location.pathname,
        });

        return () => {
            // Cleanup
            document.head.removeChild(script);
        };
    }, [measurementId]);
};

export default useGoogleAnalytics;
