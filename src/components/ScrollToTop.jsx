import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-[9999] p-4 rounded-full hover:scale-110 transition-all duration-300 shadow-2xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-blue-500"
      aria-label="Scroll to top"
    >
      <ArrowUp size={28} strokeWidth={3} className="text-white" />
    </button>
  );
};

export default ScrollToTop;
