import { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

export const ProjectsSection = ({ isDark }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const projects = [
    {
      title: 'Forest Fire Risk Prediction',
      description: 'AI model using soil and climate data to predict forest fire risks in Algeria and Tunisia with supervised and unsupervised machine learning algorithms',
      github: 'https://github.com/lizamezioug',
      tech: [
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Scikit-learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
        { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
        { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
        { name: 'Matplotlib', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg' }
      ],
      gradient: 'from-fuchsia-500 to-pink-600'
    },
    {
      title: 'Baby Cry Classification',
      description: 'Real-time mobile application using deep learning to classify baby cries and identify their needs instantly',
      github: 'https://github.com/lizamezioug',
      tech: [
        { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
        { name: 'Dart', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
        { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
        { name: 'ML', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Hey_Machine_Learning_Logo.png' }
      ],
      gradient: 'from-pink-500 to-purple-600'
    },
    {
      title: 'E-commerce Auction Platform',
      description: 'Full-stack e-commerce platform with bidding system, intelligent price prediction using ML, and Stripe payment integration',
      github: 'https://github.com/lizamezioug/e-commerce',
      tech: [
        { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
        { name: 'SQLite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
        { name: 'Stripe', logo: 'https://images.opencollective.com/stripe/f815868/logo/256.png' }
      ],
      gradient: 'from-purple-500 to-blue-600'
    },
    {
      title: 'Hair Salon Booking Website',
      description: 'Online reservation management system for hair salons with admin dashboard, real-time availability and appointment scheduling',
      github: 'https://github.com/lizamezioug/Site-salon-de-coiffure',
      tech: [
        { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
      ],
      gradient: 'from-violet-500 to-fuchsia-600'
    },
    {
      title: 'Earthquake Magnitude Predictor',
      description: 'ML model for predicting earthquake magnitudes based on seismic data analysis using advanced machine learning algorithms',
      github: 'https://github.com/lizamezioug/Earthquake-prediction',
      tech: [
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
        { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
        { name: 'Scikit-learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' }
      ],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'World Clock Mobile App',
      description: 'Real-time global clock display application with multiple time zones support and API integration',
      github: 'https://github.com/lizamezioug/App-Mobile-World-time',
      tech: [
        { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
        { name: 'Dart', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
        { name: 'API', logo: 'https://cdn-icons-png.flaticon.com/512/8099/8099256.png' }
      ],
      gradient: 'from-indigo-500 to-pink-600'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height - window.innerHeight;
        
        if (sectionTop < window.innerHeight && sectionTop + rect.height > 0) {
          const progress = Math.max(0, Math.min(1, -sectionTop / sectionHeight));
          setScrollProgress(progress);
          const newIndex = Math.min(projects.length - 1, Math.floor(progress * projects.length));
          setActiveIndex(newIndex);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [projects.length]);

  return (
    <section 
      ref={sectionRef} 
      id="projects" 
      className={`pt-24 pb-12 px-4 ${isDark ? 'bg-black' : 'bg-white'}`}
      style={{ minHeight: `${projects.length * 100}vh` }}
    >
      <div className="sticky top-16 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        {/* Desktop: Stacking cards effect */}
        <div className="hidden lg:block relative h-[380px]">
          <div className="absolute inset-0 flex items-center justify-center">
            {projects.map((project, index) => {
              const isActive = index === activeIndex;
              const isPast = index < activeIndex;
              const offset = index - activeIndex;
              
              return (
                <div
                  key={index}
                  className="absolute w-full max-w-6xl transition-all duration-700 ease-out"
                  style={{
                    transform: `
                      translateY(${offset * 40}px)
                      scale(${isPast ? 0.85 : 1 - Math.abs(offset) * 0.05})
                    `,
                    opacity: isPast ? 0.15 : (isActive ? 1 : Math.max(0.3, 1 - Math.abs(offset) * 0.3)),
                    zIndex: projects.length - Math.abs(offset),
                    pointerEvents: isActive ? 'auto' : 'none',
                    filter: isPast ? 'blur(3px)' : 'blur(0px)'
                  }}
                >
                  <div className={`relative backdrop-blur-sm rounded-2xl overflow-hidden ${isDark ? 'bg-gray-900/95' : 'bg-white/95'}`}>
                    {/* Static Border with gradient */}
                    <div 
                      className="absolute inset-0 rounded-2xl p-[3px] pointer-events-none z-10"
                      style={{
                        background: 'linear-gradient(135deg, #ec4899, #8b5cf6, #3b82f6)',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude'
                      }}
                    />

                    {/* Card Content */}
                    <div className="relative z-20 grid grid-cols-2 gap-12 p-8">
                      {/* Left: Description */}
                      <div className="flex flex-col justify-center">
                        <div className={`h-1 w-20 rounded-full bg-gradient-to-r ${project.gradient} mb-4`}></div>
                        
                        <h3 className={`text-3xl font-bold mb-4 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                          {project.title}
                        </h3>
                        
                        <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-base leading-relaxed`}>
                          {project.description}
                        </p>
                      </div>

                      {/* Right: Tech Stack & Button */}
                      <div className="flex flex-col justify-center items-end relative">
                        <h4 className={`text-lg font-semibold mb-6 ${isDark ? 'text-gray-200' : 'text-gray-800'} self-start w-full`}>
                         
                        </h4>
                        
                        <div className="flex flex-wrap gap-4 mb-8 justify-end relative">
                          {project.tech.map((tech, techIndex) => (
                            <div 
                              key={techIndex} 
                              className="flex flex-col items-center gap-2 hover:scale-110 transition-transform floating-tech"
                              style={{
                                animation: `float ${3 + techIndex * 0.5}s ease-in-out infinite`,
                                animationDelay: `${techIndex * 0.2}s`
                              }}
                            >
                              <img 
                                src={tech.logo} 
                                alt={tech.name}
                                className="w-10 h-10 object-contain"
                                onError={(e) => e.target.style.display = 'none'}
                              />
                              <span className={`text-xs font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                {tech.name}
                              </span>
                            </div>
                          ))}
                        </div>
                        
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl transition-all text-sm font-semibold transform hover:scale-105 hover:shadow-lg`}
                        >
                          <Github size={18} />
                          View Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet: Simple vertical stack */}
        <div className="lg:hidden space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative backdrop-blur-sm rounded-2xl overflow-hidden"
              style={{ background: isDark ? '#0a0a0a' : '#ffffff' }}
            >
              {/* Static Border */}
              <div 
                className="absolute inset-0 rounded-2xl p-[2px] pointer-events-none z-10"
                style={{
                  background: 'linear-gradient(135deg, #ec4899, #8b5cf6, #3b82f6)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude'
                }}
              />

              <div className="relative z-20 p-5">
                <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${project.gradient} mb-3`}></div>
                
                <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                  {project.title}
                </h3>
                
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4 text-sm leading-relaxed`}>
                  {project.description}
                </p>
                
                <h4 className={`text-sm font-semibold mb-3 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                  Technologies Used
                </h4>
                
                <div className="flex flex-wrap gap-3 mb-4 justify-center">
                  {project.tech.map((tech, techIndex) => (
                    <div 
                      key={techIndex} 
                      className="flex flex-col items-center gap-1.5"
                    >
                      <img 
                        src={tech.logo} 
                        alt={tech.name}
                        className="w-8 h-8 object-contain"
                        onError={(e) => e.target.style.display = 'none'}
                      />
                      <span className={`text-xs font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
                
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${project.gradient} text-white rounded-xl transition-all text-sm font-semibold w-full justify-center hover:shadow-lg`}
                >
                  <Github size={16} />
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'w-8 bg-gradient-to-r from-fuchsia-500 to-pink-500' 
                  : 'w-2 bg-gray-400'
              }`}
            ></div>
          ))}
        </div>

        {/* See More GitHub - only visible at the end */}
        <div 
          className="text-center mt-8 transition-all duration-500"
          style={{
            opacity: activeIndex === projects.length - 1 ? 1 : 0,
            pointerEvents: activeIndex === projects.length - 1 ? 'auto' : 'none',
            transform: activeIndex === projects.length - 1 ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <a
            href="https://github.com/lizamezioug"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-fuchsia-500 via-violet-500 to-blue-500 text-white rounded-2xl hover:shadow-2xl transition-all text-lg font-bold transform hover:scale-105 group"
          >
            <Github size={24} />
            <span>See More Projects on GitHub</span>
            <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .floating-tech {
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;