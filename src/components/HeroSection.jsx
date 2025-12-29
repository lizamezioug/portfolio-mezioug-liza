import { useEffect, useRef } from 'react';
import { Calendar, Mail, Download, ChevronDown } from 'lucide-react';

const HeroSection = ({ isDark }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const DPR = window.devicePixelRatio || 1;

    const resize = () => {
      canvas.width = window.innerWidth * DPR;
      canvas.height = window.innerHeight * DPR;
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      ctx.scale(DPR, DPR);
    };

    resize();
    window.addEventListener('resize', resize);

    // Formules mathématiques enrichies en relation avec l'IA
    const terms = [
      // Activation Functions
      'σ(x)', 'ReLU(x)', 'tanh(x)', 'Softmax', 'ELU(x)', 'Swish',
      
      // Loss Functions
      'MSE', 'L(θ)', 'BCE', 'Loss',
      
      // Gradient & Optimization
      '∇L', 'θ-η∇J', 'Adam', 'SGD', '∂L/∂w',
      
      // Neural Network
      'Wx+b', 'f(z)', 'y=ŷ', 'h=σ(Wx)', 'Layer',
      
      // Math Symbols
      'Σ', '∂', '∇', 'α', 'β', 'θ', 'λ', 'μ', 'σ²', '∫',
      
      // Distance & Metrics
      '||x-y||', 'd(x,y)', 'Accuracy', 'Recall', 'F1',
      
      // Probability
      'P(y|x)', 'E[X]', 'P(A∩B)',
      
      // Matrix Operations
      'Aᵀ', 'det(A)', 'A⁻¹', 'eigenλ',
      
      // AI/ML Models
      'CNN', 'LSTM', 'GAN', 'BERT', 'GPT', 
      
      // LLMs & NLP
      'Token', 'seq2seq',
      
      // Neural Network Components
      'Neuron', 'Backprop', 'Dropout', 'Batch',
      
      // Data Mining & Curves
      'ROC', 'AUC', 
      
      // Deep Learning
      'ResNet', 'VGG', 'AlexNet', 'U-Net', 'YOLO',
      
      // Training Concepts
      'Epoch', 'Batch',
    ];

    class FloatingFormula {
      constructor() {
        this.reset();
      }

      reset() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        // Zone centrale à éviter (contenu principal)
        const centerZoneWidth = Math.min(width * 0.55, 900);
        const centerZoneHeight = height * 0.65;
        const centerLeft = (width - centerZoneWidth) / 2;
        const centerRight = centerLeft + centerZoneWidth;
        const centerTop = (height - centerZoneHeight) / 2;
        const centerBottom = centerTop + centerZoneHeight;
        
        // Position initiale avec distribution équilibrée
        let startX, startY;
        const side = Math.floor(Math.random() * 4);
        
        switch(side) {
          case 0: // Gauche (plus de marge)
            startX = Math.random() * (centerLeft - 50);
            startY = Math.random() * height;
            break;
          case 1: // Droite (zone élargie pour équilibrer)
            startX = centerRight + 50 + Math.random() * (width - centerRight - 50);
            startY = Math.random() * height;
            break;
          case 2: // Haut
            startX = Math.random() * width;
            startY = Math.random() * (centerTop - 50);
            break;
          case 3: // Bas
            startX = Math.random() * width;
            startY = centerBottom + 50 + Math.random() * (height - centerBottom - 50);
            break;
        }
        
        this.x = startX;
        this.y = startY;
        
        // Direction aléatoire avec vitesse plus rapide
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.4 + Math.random() * 0.5; // Plus rapide (0.4-0.9 au lieu de 0.25-0.65)
        
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        
        this.text = terms[Math.floor(Math.random() * terms.length)];
        this.size = 14 + Math.random() * 9; // Plus grand (14-23px au lieu de 12-19px)
        
        // Cycle de vie
        this.life = 0;
        this.maxLife = 220 + Math.random() * 180;
        this.opacity = 0;
        
        // Couleurs plus foncées pour light mode
        const colorsDark = [
          ['#ec4899', '#a855f7'], // fuchsia to purple
          ['#a855f7', '#8b5cf6'], // purple to violet
          ['#8b5cf6', '#3b82f6'], // violet to blue
          ['#ec4899', '#8b5cf6'], // fuchsia to violet
          ['#a855f7', '#3b82f6'], // purple to blue
        ];
        
        const colorsLight = [
          ['#db2777', '#9333ea'], // darker fuchsia to darker purple
          ['#9333ea', '#7c3aed'], // darker purple to darker violet
          ['#7c3aed', '#2563eb'], // darker violet to darker blue
          ['#db2777', '#7c3aed'], // darker fuchsia to darker violet
          ['#9333ea', '#2563eb'], // darker purple to darker blue
        ];
        
        this.colorPairDark = colorsDark[Math.floor(Math.random() * colorsDark.length)];
        this.colorPairLight = colorsLight[Math.floor(Math.random() * colorsLight.length)];
      }

      update() {
        this.life += 1;
        this.x += this.vx;
        this.y += this.vy;
        
        // Fade in
        if (this.life < 45) {
          this.opacity = this.life / 45;
        }
        // Reste visible
        else if (this.life < this.maxLife - 90) {
          this.opacity = 1;
        }
        // Fade out
        else {
          this.opacity = (this.maxLife - this.life) / 90;
        }
        
        // Reset si mort ou hors écran
        if (this.life >= this.maxLife || 
            this.x < -100 || this.x > window.innerWidth + 100 ||
            this.y < -100 || this.y > window.innerHeight + 100) {
          this.reset();
        }
      }

      draw() {
        // Utiliser les bonnes couleurs selon le mode
        const colorPair = isDark ? this.colorPairDark : this.colorPairLight;
        
        const gradient = ctx.createLinearGradient(
          this.x, this.y,
          this.x + 60, this.y + 25
        );
        gradient.addColorStop(0, colorPair[0]);
        gradient.addColorStop(1, colorPair[1]);

        ctx.save();
        ctx.font = `${this.size}px 'Courier New', monospace`;
        ctx.fillStyle = gradient;
        // Opacité augmentée pour meilleure visibilité
        ctx.globalAlpha = this.opacity * (isDark ? 0.6 : 0.65);
        ctx.fillText(this.text, this.x, this.y);
        ctx.restore();
      }
    }

    // 35 particules pour une meilleure répartition
    const particles = Array.from({ length: 35 }, () => new FloatingFormula());

    function animate() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [isDark]);

  return (
    <section className={`min-h-screen flex items-center justify-center relative overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>
      {/* Canvas pour animations */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Contenu */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-20">
        <div className="mb-12">
          <h2 className={`text-xl md:text-2xl font-light mb-6 ${isDark ? 'text-white/60' : 'text-black/60'}`}>
            Hi, I'm Liza Mezioug
          </h2>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-sky-600 to-pink-200  bg-clip-text text-transparent">
              Web Developer & AI Future Engineer
            </span>
          </h1>

          <p className={`text-base md:text-lg max-w-2xl mx-auto ${isDark ? 'text-white/50' : 'text-black/50'}`}>
            Building intelligent solutions with cutting-edge technology
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className={`group px-8 py-3 rounded-full transition-all duration-300 border-2 ${
              isDark 
                ? 'border-fuchsia-500/40 hover:border-fuchsia-500 text-white' 
                : 'border-fuchsia-400/40 hover:border-fuchsia-400 text-black'
            }`}
          >
            <span className="flex items-center gap-2 font-medium group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-fuchsia-500 group-hover:to-violet-600 group-hover:bg-clip-text transition-all duration-300">
              <Calendar size={18} />
              View My Work
              <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
            </span>
          </button>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className={`group px-8 py-3 rounded-full transition-all duration-300 border-2 ${
              isDark 
                ? 'border-blue-500/40 hover:border-blue-500 text-white' 
                : 'border-blue-400/40 hover:border-blue-400 text-black'
            }`}
          >
            <span className="flex items-center gap-2 font-medium group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-violet-600 group-hover:bg-clip-text transition-all duration-300">
              <Mail size={18} />
              Get in Touch
            </span>
          </button>

          <a
            href="/src/assets/CV EN.pdf"
            download="MEZIOUG_Liza_CV.pdf"
            className={`group px-8 py-3 rounded-full transition-all duration-300 border-2 ${
              isDark 
                ? 'border-violet-500/40 hover:border-violet-500 text-white' 
                : 'border-violet-400/40 hover:border-violet-400 text-black'
            }`}
          >
            <span className="flex items-center gap-2 font-medium group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:to-fuchsia-600 group-hover:bg-clip-text transition-all duration-300">
              <Download size={18} />
              Download CV
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;