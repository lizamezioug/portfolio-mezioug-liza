import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import ScrollToTop from '../components/ScrollToTop';

const Home = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
      <div className={`${isDark ? 'bg-black' : 'bg-white'} text-gray-900 dark:text-white`}>
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />
        <main>
          <HeroSection isDark={isDark} />
          <AboutSection isDark={isDark} />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />  
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

export default Home;