import { useEffect, useRef, useState } from 'react';
import { MapPin, Calendar } from 'lucide-react';

const ExperienceSection = ({ isDark }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [visibleYears, setVisibleYears] = useState([]);
  const [lineProgress, setLineProgress] = useState(0);
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);
  
  const experiences = [
    {
      year: 2023,
      companies: [
        {
          name: 'Algérie Télécom',
          location: 'Hussein Dey',
          period: 'August - September 2023',
          type: 'On-site',
          description: 'Company discovery and game development '
        }
      ]
    },
    {
      year: 2024,
      companies: [
        {
          name: 'Algérie Télécom',
          location: 'Kouba',
          period: 'July - August 2024',
          type: 'On-site',
          description: 'Development of an interactive website for hair salon management'
        },
        {
          name: 'Sonatrach',
          location: 'Hydra',
          period: 'October - November 2024',
          type: 'On-site',
          description: 'Discovery of the Central Directorate of Digitalization and Information Systems'
        }
      ]
    },
    {
      year: 2025,
      companies: [
        {
          name: 'Air Algérie',
          location: 'Bachdjerrah',
          period: 'July - August 2025',
          type: 'On-site',
          description: 'Planning and optimization of flight schedules '
        },
        {
          name: 'KleerInfini',
          location: 'Remote',
          period: 'July - September 2025',
          type: 'Remote',
          description: 'Frontend development of a B2B platform for managing export opportunities'
        }
      ]
    }
  ];

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animation de la ligne progressive
            let progress = 0;
            const lineInterval = setInterval(() => {
              progress += 2;
              setLineProgress(progress);
              
              // Afficher 2023 et sa carte
              if (progress >= 10 && !visibleYears.includes(0)) {
                setVisibleYears(prev => [...prev, 0]);
                setTimeout(() => setVisibleCards(prev => [...prev, 0]), 300);
              }
              
              // Afficher 2024 et ses cartes
              if (progress >= 50 && !visibleYears.includes(1)) {
                setVisibleYears(prev => [...prev, 1]);
                setTimeout(() => setVisibleCards(prev => [...prev, 1]), 300);
                setTimeout(() => setVisibleCards(prev => [...prev, 2]), 600);
              }
              
              // Afficher 2025 et ses cartes
              if (progress >= 90 && !visibleYears.includes(2)) {
                setVisibleYears(prev => [...prev, 2]);
                setTimeout(() => setVisibleCards(prev => [...prev, 3]), 300);
                setTimeout(() => setVisibleCards(prev => [...prev, 4]), 600);
              }
              
              if (progress >= 100) {
                clearInterval(lineInterval);
              }
            }, 20);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
    };
  }, [visibleYears]);

  let cardIndex = 0;

  return (
    <section ref={sectionRef} id="experience" className={`py-20 px-4 ${isDark ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        
        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block relative min-h-[600px] flex items-center">
          {/* Horizontal Timeline Line with Progressive Animation */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2 z-0">
            <div 
              className="h-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-blue-500 transition-all duration-300 ease-out"
              style={{ width: `${lineProgress}%` }}
            ></div>
          </div>
          
          {/* Years and Cards Container */}
          <div className="w-full flex justify-around relative z-10">
            {experiences.map((yearData, yearIndex) => (
              <div key={yearData.year} className="flex flex-col items-center">
                
                {/* Cards Above Timeline */}
                <div className="mb-8 space-y-4 relative" style={{ minHeight: '200px' }}>
                  {/* Ligne de connexion vers le haut */}
                  {yearData.companies.length > 0 && visibleCards.includes(cardIndex) && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-fuchsia-500 to-violet-500 animate-draw-line"></div>
                  )}
                  
                  {yearData.companies.slice(0, 1).map((company, idx) => {
                    const currentIndex = cardIndex++;
                    return (
                      <div
                        key={idx}
                        ref={(el) => (cardsRef.current[currentIndex] = el)}
                        data-index={currentIndex}
                        className={`w-80 h-64 relative group backdrop-blur-sm rounded-lg p-5 transition-all duration-500 hover:-translate-y-2 ${
                          visibleCards.includes(currentIndex) ? 'animate-slide-up' : 'opacity-0'
                        }`}
                        style={{ 
                          animationDelay: visibleCards.includes(currentIndex) ? `${idx * 0.2}s` : '0s',
                          background: isDark ? '#000' : '#fff'
                        }}
                      >
                        {/* SVG animated border */}
                        <svg className="card-border-svg" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient id={`gradient-${currentIndex}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#ec4899" />
                              <stop offset="50%" stopColor="#8b5cf6" />
                              <stop offset="100%" stopColor="#3b82f6" />
                            </linearGradient>
                          </defs>
                          <rect
                            className="card-border-path"
                            x="2"
                            y="2"
                            width="calc(100% - 4px)"
                            height="calc(100% - 4px)"
                            rx="6"
                            fill="none"
                            stroke={`url(#gradient-${currentIndex})`}
                            strokeWidth="2"
                          />
                        </svg>
                        
                        <div className="relative z-10">
                          {/* Code-like header */}
                          <div className="mb-3 font-mono text-base">
                            <span className="text-purple-400">def</span>{' '}
                            <span className="text-blue-400">{company.name.replace(/\s+/g, '_')}</span>
                            <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>():</span>
                          </div>
                          
                          {/* Indented content like Python code */}
                          <div className="ml-4 space-y-2 font-mono text-sm">
                            <div className="flex gap-2">
                              <span className="text-pink-400">location</span>
                              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>=</span>
                              <span className="text-green-400">"{company.location}"</span>
                            </div>
                            
                            <div className="flex gap-2">
                              <span className="text-pink-400">period</span>
                              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>=</span>
                              <span className="text-green-400">"{company.period}"</span>
                            </div>
                            
                            <div className="flex gap-2">
                              <span className="text-pink-400">type</span>
                              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>=</span>
                              <span className="text-green-400">"{company.type}"</span>
                            </div>
                            
                            <div className="mt-3 pt-3 border-t border-gray-700/30">
                              <span className="text-purple-400">return</span>{' '}
                              <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-sans text-sm leading-relaxed block mt-1`}>
                                {company.description}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Year Badge on Timeline */}
                <div className={`relative z-20 my-4 transition-all duration-500 ${
                  visibleYears.includes(yearIndex) ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}>
                  <div className={`w-20 h-20 rounded-full ${isDark ? 'bg-black' : 'bg-white'} border-4 border-fuchsia-500 flex items-center justify-center text-xl font-bold shadow-lg`}>
                    <span className="bg-gradient-to-r from-fuchsia-400 to-pink-500 bg-clip-text text-transparent">{yearData.year}</span>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-500 via-violet-500 to-blue-500 blur-xl opacity-30"></div>
                </div>
                
                {/* Cards Below Timeline */}
                <div className="mt-8 space-y-4 relative" style={{ minHeight: '200px' }}>
                  {/* Ligne de connexion vers le bas */}
                  {yearData.companies.length > 1 && visibleCards.includes(cardIndex) && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-t from-violet-500 to-blue-500 animate-draw-line"></div>
                  )}
                  
                  {yearData.companies.slice(1).map((company, idx) => {
                    const currentIndex = cardIndex++;
                    return (
                      <div
                        key={idx}
                        ref={(el) => (cardsRef.current[currentIndex] = el)}
                        data-index={currentIndex}
                        className={`w-80 h-64 relative group backdrop-blur-sm rounded-lg p-5 transition-all duration-500 hover:-translate-y-2 ${
                          visibleCards.includes(currentIndex) ? 'animate-slide-up' : 'opacity-0'
                        }`}
                        style={{ 
                          animationDelay: visibleCards.includes(currentIndex) ? `${(idx + 1) * 0.2}s` : '0s',
                          background: isDark ? '#000' : '#fff'
                        }}
                      >
                        {/* SVG animated border */}
                        <svg className="card-border-svg" xmlns="http://www.w3.org/2000/svg">
                          <defs>
                            <linearGradient id={`gradient-bottom-${currentIndex}`} x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#ec4899" />
                              <stop offset="50%" stopColor="#8b5cf6" />
                              <stop offset="100%" stopColor="#3b82f6" />
                            </linearGradient>
                          </defs>
                          <rect
                            className="card-border-path"
                            x="2"
                            y="2"
                            width="calc(100% - 4px)"
                            height="calc(100% - 4px)"
                            rx="6"
                            fill="none"
                            stroke={`url(#gradient-bottom-${currentIndex})`}
                            strokeWidth="2"
                          />
                        </svg>
                        
                        <div className="relative z-10">
                          {/* Code-like header */}
                          <div className="mb-3 font-mono text-sm">
                            <span className="text-purple-400">def</span>{' '}
                            <span className="text-blue-400">{company.name.replace(/\s+/g, '_')}</span>
                            <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>():</span>
                          </div>
                          
                          {/* Indented content like Python code */}
                          <div className="ml-4 space-y-2 font-mono text-sm">
                            <div className="flex gap-2">
                              <span className="text-pink-400">location</span>
                              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>=</span>
                              <span className="text-green-400">"{company.location}"</span>
                            </div>
                            
                            <div className="flex gap-2">
                              <span className="text-pink-400">period</span>
                              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>=</span>
                              <span className="text-green-400">"{company.period}"</span>
                            </div>
                            
                            <div className="flex gap-2">
                              <span className="text-pink-400">type</span>
                              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>=</span>
                              <span className="text-green-400">"{company.type}"</span>
                            </div>
                            
                            <div className="mt-3 pt-3 border-t border-gray-700/30">
                              <span className="text-purple-400">return</span>{' '}
                              <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-sans text-sm leading-relaxed block mt-1`}>
                                {company.description}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet: Vertical Timeline */}
        <div className="lg:hidden relative max-w-2xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-300 z-0">
            <div 
              className="w-full bg-gradient-to-b from-fuchsia-500 via-violet-500 to-blue-500 transition-all duration-300 ease-out"
              style={{ height: `${lineProgress}%` }}
            ></div>
          </div>

          {/* Vertical Timeline Content */}
          <div className="relative z-10 space-y-12 py-8">
            {experiences.map((yearData, yearIndex) => {
              let localCardIndex = 0;
              const startIndex = experiences.slice(0, yearIndex).reduce((sum, y) => sum + y.companies.length, 0);
              
              return (
                <div key={yearData.year} className="relative">
                  {/* Year Badge */}
                  <div className={`flex justify-center mb-8 transition-all duration-500 ${
                    visibleYears.includes(yearIndex) ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`}>
                    <div className={`w-16 h-16 rounded-full ${isDark ? 'bg-black' : 'bg-white'} border-4 border-fuchsia-500 flex items-center justify-center text-lg font-bold shadow-lg relative`}>
                      <span className="bg-gradient-to-r from-fuchsia-400 to-pink-500 bg-clip-text text-transparent">{yearData.year}</span>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-500 via-violet-500 to-blue-500 blur-xl opacity-30"></div>
                    </div>
                  </div>

                  {/* Company Cards */}
                  <div className="space-y-6">
                    {yearData.companies.map((company, idx) => {
                      const currentIndex = startIndex + localCardIndex++;
                      return (
                        <div
                          key={idx}
                          ref={(el) => (cardsRef.current[currentIndex] = el)}
                          data-index={currentIndex}
                          className={`w-full max-w-md mx-auto relative group backdrop-blur-sm rounded-lg p-5 transition-all duration-500 hover:scale-105 ${
                            visibleCards.includes(currentIndex) ? 'animate-slide-up-mobile' : 'opacity-0'
                          }`}
                          style={{ 
                            animationDelay: visibleCards.includes(currentIndex) ? `${idx * 0.2}s` : '0s',
                            background: isDark ? '#000' : '#fff'
                          }}
                        >

                          {/* SVG animated border */}
                          <svg className="card-border-svg" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <linearGradient id={`gradient-mobile-${currentIndex}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#ec4899" />
                                <stop offset="50%" stopColor="#8b5cf6" />
                                <stop offset="100%" stopColor="#3b82f6" />
                              </linearGradient>
                            </defs>
                            <rect
                              className="card-border-path"
                              x="2"
                              y="2"
                              width="calc(100% - 4px)"
                              height="calc(100% - 4px)"
                              rx="6"
                              fill="none"
                              stroke={`url(#gradient-mobile-${currentIndex})`}
                              strokeWidth="2"
                            />
                          </svg>
                          
                          <div className="relative z-10">
                            {/* Code-like header */}
                            <div className="mb-3 font-mono text-sm">
                              <span className="text-purple-400">def</span>{' '}
                              <span className="text-blue-400">{company.name.replace(/\s+/g, '_')}</span>
                              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>():</span>
                            </div>
                            
                            {/* Indented content like Python code */}
                            <div className="ml-4 space-y-2 font-mono text-xs">
                              <div className="flex gap-2">
                                <span className="text-pink-400">location</span>
                                <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>=</span>
                                <span className="text-green-400">"{company.location}"</span>
                              </div>
                              
                              <div className="flex gap-2">
                                <span className="text-pink-400">period</span>
                                <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>=</span>
                                <span className="text-green-400">"{company.period}"</span>
                              </div>
                              
                              <div className="flex gap-2">
                                <span className="text-pink-400">type</span>
                                <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>=</span>
                                <span className="text-green-400">"{company.type}"</span>
                              </div>
                              
                              <div className="mt-3 pt-3 border-t border-gray-700/30">
                                <span className="text-purple-400">return</span>{' '}
                                <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-sans text-xs leading-relaxed block mt-1`}>
                                  {company.description}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      <style >{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-right {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-up-mobile {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes border-draw {
          0% {
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes draw-line {
          from {
            height: 0;
          }
          to {
            height: 2rem;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }

        .animate-slide-right {
          animation: slide-right 0.6s ease-out forwards;
        }

        .animate-slide-up-mobile {
          animation: slide-up-mobile 0.6s ease-out forwards;
        }

        .animate-draw-line {
          animation: draw-line 0.4s ease-out forwards;
        }

        .card-border-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .card-border-path {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: border-draw 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;