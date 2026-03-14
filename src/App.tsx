import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Splash } from './components/Splash';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Awards } from './components/Awards';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';
import { ResumeView } from './components/ResumeView';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-black text-white' : 'bg-white text-black'} selection:bg-blue-500/30`}>
      <AnimatePresence mode="wait">
        {!isLoaded ? (
          <Splash key="splash" onComplete={() => setIsLoaded(true)} />
        ) : (
          <main key="content" className="relative">
            <AnimatedBackground isDark={isDark} />
            <Navbar isDark={isDark} toggleTheme={toggleTheme} />
            <Hero onShowResume={() => setShowResume(true)} isDark={isDark} />
            <Experience isDark={isDark} />
            <Projects isDark={isDark} />
            <Skills isDark={isDark} />
            <Certifications isDark={isDark} />
            <Awards isDark={isDark} />
            <Contact isDark={isDark} />
            <Footer isDark={isDark} />
            
            <AnimatePresence>
              {showResume && (
                <ResumeView onClose={() => setShowResume(false)} />
              )}
            </AnimatePresence>
          </main>
        )}
      </AnimatePresence>
    </div>
  );
}
