import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = ({ isDark }) => {
  return (
    <footer className={`${isDark ? 'bg-black' : 'bg-white'} transition-colors duration-300`}>
      {/* Separator Line */}
      <div className={`h-px ${isDark ? 'bg-gradient-to-r from-transparent via-gray-700 to-transparent' : 'bg-gradient-to-r from-transparent via-gray-300 to-transparent'}`} />
      
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main Text */}
        <div className="text-center mb-6">
          <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Developed with <Heart size={18} className="inline-block text-pink-500 animate-pulse mx-1" /> by{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
              Mezioug Liza
            </span>
          </p>
          <p className={`text-sm mt-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            © 2025 All rights reserved
          </p>
        </div>

    

      </div>
    </footer>
  );
};

export default Footer;