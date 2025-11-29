import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'Resume', to: 'resume' },
    { name: 'Projects', to: 'projects' },
    { name: 'About us', to: 'about' },
    { name: 'Contact Us', to: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-dark/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <h1 className="font-orbitron font-bold text-2xl text-white hover:text-primary transition-colors">VK</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                className="font-michroma text-sm text-light-200 hover:text-primary cursor-pointer transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://github.com/Vignesh58728" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/vigneshwaran-m-442673254/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-dark-100 absolute w-full shadow-xl border-b border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-white hover:text-primary cursor-pointer font-michroma"
              >
                {item.name}
              </Link>
            ))}
            {/* Mobile Social Links */}
            <div className="flex gap-4 px-3 py-2 mt-2 border-t border-white/10 pt-4">
              <a href="https://github.com/Vignesh58728" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/vigneshwaran-m-442673254/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};
