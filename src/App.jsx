import { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';

import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const AppContent = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <HeroSection isDark={isDark} />
        <AboutSection isDark={isDark} />
    
        <ExperienceSection isDark={isDark} />
        <ProjectsSection isDark={isDark} />
        <ContactSection isDark={isDark} />
      </main>
      <Footer isDark={isDark} />
    </div>
  );
};

const App = () => {
  return (
   
      <AppContent />
   
  );
};

export default App;