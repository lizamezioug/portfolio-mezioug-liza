import { useState, useEffect } from 'react';
import { Mail, Linkedin, MessageCircle } from 'lucide-react';

const ContactSection = ({ isDark = true }) => {
  const [lines, setLines] = useState([]);
  
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'lizamezioug22@gmail.com',
      href: 'mailto:lizamezioug22@gmail.com',
      gradientColors: ['#3b82f6', '#a855f7', '#ec4899']
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/liza-mezioug-b09829333/',
      gradientColors: ['#3b82f6', '#a855f7', '#ec4899']
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+213554791535',
      href: 'https://wa.me/yourphonenumber',
      gradientColors: ['#3b82f6', '#a855f7', '#ec4899']
    }
  ];

  const colors = ['#06b6d4', '#d946ef', '#ec4899', '#a855f7'];
  const gridSize = 50;

  // Générer des traits aléatoires
  const generateRandomLines = () => {
    const newLines = [];
    const numLines = 10;
    
    for (let i = 0; i < numLines; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const delay = Math.random() * 1.5;
      
      // Position aléatoire - SEULEMENT gauche OU droite, JAMAIS au milieu
      let x, y;
      const isLeft = Math.random() > 0.5;
      
      if (isLeft) {
        // Zone GAUCHE uniquement (avant les cartes)
        x = 20 + Math.random() * 200; // Limité à 220px max
        y = Math.random() * 700;
      } else {
        // Zone DROITE uniquement (après les cartes)
        x = window.innerWidth - 250 + Math.random() * 230; // Les derniers 250px
        y = Math.random() * 700;
      }
      
      // Arrondir à la grille
      x = Math.round(x / gridSize) * gridSize;
      y = Math.round(y / gridSize) * gridSize;
      
      // Type de trait aléatoire (tailles plus petites pour rester dans les bords)
      const type = Math.floor(Math.random() * 5);
      let path = '';
      
      switch(type) {
        case 0: // Petit trait horizontal
          path = `M ${x} ${y} L ${x + gridSize * (1 + Math.floor(Math.random() * 2))} ${y}`;
          break;
        case 1: // Petit trait vertical
          path = `M ${x} ${y} L ${x} ${y + gridSize * (1 + Math.floor(Math.random() * 2))}`;
          break;
        case 2: // Forme en L
          const lWidth = gridSize * (1 + Math.floor(Math.random() * 2));
          const lHeight = gridSize * (1 + Math.floor(Math.random() * 2));
          path = `M ${x} ${y} L ${x} ${y + lHeight} L ${x + lWidth} ${y + lHeight}`;
          break;
        case 3: // Forme en U
          const uWidth = gridSize * (1 + Math.floor(Math.random() * 2));
          const uHeight = gridSize * (1 + Math.floor(Math.random() * 2));
          path = `M ${x} ${y} L ${x} ${y + uHeight} L ${x + uWidth} ${y + uHeight} L ${x + uWidth} ${y}`;
          break;
        case 4: // Rectangle presque complet (rare et petit)
          const rWidth = gridSize * (1 + Math.floor(Math.random() * 2));
          const rHeight = gridSize * (1 + Math.floor(Math.random() * 2));
          path = `M ${x} ${y} L ${x} ${y + rHeight} L ${x + rWidth} ${y + rHeight} L ${x + rWidth} ${y} L ${x} ${y}`;
          break;
      }
      
      newLines.push({
        id: Date.now() + i,
        path,
        color,
        delay
      });
    }
    
    setLines(newLines);
  };

  useEffect(() => {
    generateRandomLines();
    const interval = setInterval(generateRandomLines, 3500); // Plus rapide - 3.5 secondes
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="contact" 
      className={`relative py-20 px-4 ${isDark ? 'bg-black' : 'bg-white'} transition-colors duration-300 overflow-hidden`}
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-50">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Grille visible */}
            <pattern id="grid" width={gridSize} height={gridSize} patternUnits="userSpaceOnUse">
              <path 
                d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`}
                fill="none" 
                stroke={isDark ? '#1e293b' : '#94a3b8'} 
                strokeWidth="1"
              />
            </pattern>
            
            <style>
              {`
                @keyframes drawLine {
                  0% { 
                    stroke-dashoffset: 500; 
                    opacity: 0; 
                  }
                  10% { 
                    opacity: 1; 
                  }
                  90% { 
                    stroke-dashoffset: 0; 
                    opacity: 1; 
                  }
                  100% { 
                    stroke-dashoffset: 0; 
                    opacity: 0; 
                  }
                }
              `}
            </style>
          </defs>
          
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Traits animés générés aléatoirement */}
          {lines.map((line) => (
            <path 
              key={line.id}
              d={line.path}
              fill="none" 
              stroke={line.color}
              strokeWidth="2.5"
              strokeDasharray="500"
              strokeDashoffset="500"
              style={{ 
                filter: `drop-shadow(0 0 12px ${line.color})`,
                animation: `drawLine 3s ease-in-out`, // Plus rapide
                animationDelay: `${line.delay}s`
              }}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6
          bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400
          bg-clip-text text-transparent">
          Let's Connect
        </h2>

        {/* Subtitle */}
        <p className={`text-center text-lg md:text-xl mb-16 max-w-2xl mx-auto ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          I'm always open to new challenges and opportunities.
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
            Let's discuss how we can work together!
          </span>
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 
                  hover:scale-105 hover:shadow-2xl`}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${link.gradientColors[0]}, ${link.gradientColors[1]}, ${link.gradientColors[2]})`
                  }} 
                />

                {/* Icon */}
                <div className="relative mb-4 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mx-auto"
                  style={{
                    background: `linear-gradient(135deg, ${link.gradientColors[0]}, ${link.gradientColors[1]}, ${link.gradientColors[2]})`
                  }}>
                  <Icon size={28} className="text-white" />
                </div>

                {/* Label */}
                <h3 className={`relative text-xl font-bold mb-2 text-center ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {link.label}
                </h3>

                {/* Value */}
                <p className={`relative text-sm text-center ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                } group-hover:text-purple-500 transition-colors duration-300`}>
                  {link.value}
                </p>

                {/* Arrow indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 
                  transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    className="text-purple-500"
                  >
                    <path 
                      d="M4 10h12m0 0l-4-4m4 4l-4 4" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;