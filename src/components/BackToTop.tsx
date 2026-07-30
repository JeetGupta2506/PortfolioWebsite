import { ArrowUp } from './icons';
import { useScrollMetrics } from '../hooks/useScrollChrome';

const BackToTop = () => {
    const { scrollY } = useScrollMetrics();
    const visible = scrollY > 420;

    return (
        <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            aria-hidden={!visible}
            tabIndex={visible ? 0 : -1}
            data-btn=""
            className={`grad-fill fixed bottom-7 right-7 z-40 flex h-[50px] w-[50px] items-center justify-center rounded-full text-white shadow-xl transition-[opacity,transform] duration-[400ms] ${
                visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
            }`}
        >
            <ArrowUp size={22} />
        </button>
    );
};

export default BackToTop;
