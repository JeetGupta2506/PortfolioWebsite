import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';
import useTheme from './hooks/useTheme';
import useReducedMotion from './hooks/useReducedMotion';
import useGoogleAnalytics from './hooks/useGoogleAnalytics';

function App() {
  // Respect user's motion preferences for accessibility
  useReducedMotion();

  // Google Analytics - Replace with your actual Measurement ID
  useGoogleAnalytics(import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX');

  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* Skip to main content for keyboard users */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      <LoadingScreen />
      <ScrollProgress />

      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* Section order follows the design source. */}
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
