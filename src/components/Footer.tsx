import React from 'react';
import { Instagram, Linkedin, Mail, Youtube, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#2B384C] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          
          {/* Logo */}
          <h2 className="font-orbitron font-bold text-4xl">VK</h2>
          
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8">
            {['Home', 'About', 'Resume', 'Product', 'Portfolio', 'Youtube', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[#F0F1F3] hover:text-primary transition-colors font-work">
                {item}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-6">
            <a 
              href="https://www.facebook.com/share/1H2jCyT3Ng/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-black p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="https://www.instagram.com/itz_vicky_5_?igsh=MW4wMmV0Z3g4YmI0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-black p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/vigneshwaran-m-442673254/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-black p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://youtube.com/@vicky_editz?si=PeId_4KpQe3C9qAZ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-black p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <Youtube size={20} />
            </a>
            <a href="mailto:saivigneshas@yahoo.com" className="bg-white text-black p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-8 border-t border-gray-700 w-full">
            <p className="font-work text-sm text-gray-400">
              2025-2030 | Copyright | VK STUDIO, All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
