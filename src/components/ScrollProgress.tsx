import { useScrollMetrics } from '../hooks/useScrollChrome';

/** 3px rail across the top edge, filled via scaleX so no layout is triggered. */
const ScrollProgress = () => {
    const { progress } = useScrollMetrics();

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[3px]"
        >
            <div
                className="grad-fill h-full w-full origin-left"
                style={{ transform: `scaleX(${progress})` }}
            />
        </div>
    );
};

export default ScrollProgress;
