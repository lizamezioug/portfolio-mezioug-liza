const AboutSection = ({ isDark }) => {
  

  const skills = [
    // Frontend Development
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    
    // Mobile Development
    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
    
    // Backend Development
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    
    // Databases
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
    { name: 'Oracle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
    
    // AI & Data Science
    { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'Scikit-learn', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
    { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    
    // Tools
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  ];

  return (
    <>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 30s linear infinite;
        }
        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <section id="about" className={`py-20 px-4 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          {/* Titre About Me */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h2>

          {/* Contenu About flex */}
          <div className="flex flex-col lg:flex-row gap-2 items-start mb-12">
            
            {/* Résumé à gauche */}
            <div className="w-full lg:w-1/2 order-1 lg:pl-32">
              <div className={`space-y-5 ${isDark ? 'text-white' : 'text-black'}`}>
                <p className="text-lg leading-relaxed">
                  I'm <span className="bg-gradient-to-r from-fuchsia-400 to-pink-500 bg-clip-text text-transparent font-bold">Liza Mezioug</span>, final year student in Intelligent Computer Systems at USTHB, Algiers <span className="bg-gradient-to-r from-fuchsia-400 to-violet-500 bg-clip-text text-transparent font-semibold"> (future AI Engineer)</span> 
                </p>

                <p className="text-lg leading-relaxed">
                  <span className="bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent font-semibold">Full-Stack Web Developer</span> and <span className="bg-gradient-to-r from-fuchsia-400 to-pink-500 bg-clip-text text-transparent font-semibold">GDG Member</span> since 2024 in the Development Department.
                </p>




                <p className="text-lg leading-relaxed">
                  Always exploring new technologies to enhance my expertise in <span className="bg-gradient-to-r from-fuchsia-400 to-pink-500 bg-clip-text text-transparent font-semibold">machine learning</span>, <span className="bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent font-semibold">deep learning</span>, and <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent font-semibold">full-stack development</span>.
                </p>

                <p className="text-lg leading-relaxed">
                  Open to new challenges and impactful projects 🚀
                </p>
              </div>
            </div>

            {/* Photo à droite */}
            <div className="w-full lg:w-1/2 flex justify-center order-2">
              <div className="relative group">
                {/* Lueur diffuse derrière l'image */}
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 via-blue-500 to-violet-600 blur-2xl opacity-40 group-hover:opacity-70 transition-all duration-700"></div>
                
                {/* Image */}
                <div className="relative overflow-hidden w-48 h-60 md:w-56 md:h-72 lg:w-64 lg:h-80 rounded-2xl">
                  <img 
                    src="/public/liza.png" 
                    alt="Liza Mezioug"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                </div>

                {/* Particules flottantes */}
                <div className="absolute -top-2 -left-2 w-3 h-3 bg-fuchsia-500 rounded-full blur-sm opacity-75 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                <div className="absolute top-10 -right-2 w-2 h-2 bg-blue-500 rounded-full blur-sm opacity-75 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
                <div className="absolute -bottom-2 left-10 w-3 h-3 bg-violet-500 rounded-full blur-sm opacity-75 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
              </div>
            </div>
          </div>

          {/* Section Skills - 2 lignes */}
          <div className="mt-20">
            {/* Première ligne de skills */}
            <div className="relative overflow-hidden mb-6">
              <div className="flex animate-scroll gap-10">
                {[...skills.slice(0, 14), ...skills.slice(0, 14)].map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 group cursor-pointer flex-shrink-0"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 via-blue-500 to-violet-600 blur-lg opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-10 h-10 relative z-10 transition-transform duration-300 group-hover:scale-110" 
                        style={{ 
                          filter: (!isDark || skill.name === 'Django' || skill.name === 'Express.js') ? 'invert(1)' : 'none' 
                        }} 
                      />
                    </div>
                    <span className={`font-medium text-base transition-all duration-300 whitespace-nowrap ${
                      isDark 
                        ? 'text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-fuchsia-400 group-hover:to-violet-500 group-hover:bg-clip-text' 
                        : 'text-black group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-fuchsia-400 group-hover:to-violet-500 group-hover:bg-clip-text'
                    }`}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deuxième ligne de skills (direction inverse) */}
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll-reverse gap-10">
                {[...skills.slice(14), ...skills.slice(14)].map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 group cursor-pointer flex-shrink-0"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 via-blue-500 to-violet-600 blur-lg opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-10 h-10 relative z-10 transition-transform duration-300 group-hover:scale-110" 
                        style={{ 
                          filter: (!isDark || skill.name === 'Django' || skill.name === 'Express.js') ? 'invert(1)' : 'none' 
                        }} 
                      />
                    </div>
                    <span className={`font-medium text-base transition-all duration-300 whitespace-nowrap ${
                      isDark 
                        ? 'text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-fuchsia-400 group-hover:to-violet-500 group-hover:bg-clip-text' 
                        : 'text-black group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-fuchsia-400 group-hover:to-violet-500 group-hover:bg-clip-text'
                    }`}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;