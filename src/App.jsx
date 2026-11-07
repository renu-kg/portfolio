import React, { useEffect } from 'react';

// Import Modular CSS System
import './styles/variables.css';
import './styles/base.css';
import './styles/bento.css';
import './styles/components.css';

// Import Portfolio Section Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import OtherProjects from './components/OtherProjects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Learning from './components/Learning';
import ArtSection from './components/ArtSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Respect user's motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        el.classList.add('is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <OtherProjects />
        <Experience />
        <Skills />
        <Education />
        <Certificates />
        <Learning />
        <ArtSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
