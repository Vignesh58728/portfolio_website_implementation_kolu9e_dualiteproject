import React, { useState, useEffect } from 'react';
import { Award, BookOpen, Users, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const StatCard = ({ number, label, icon: Icon }: { number: string; label: string; icon: any }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
  >
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-start">
        <h3 className="font-inter font-extrabold text-3xl text-dark-300">{number}</h3>
        <Icon className="text-primary w-6 h-6" />
      </div>
      <p className="font-inter font-medium text-sm text-gray-500 uppercase tracking-wide">{label}</p>
    </div>
  </motion.div>
);

export const Milestones = () => {
  const images = [
    "https://file-service.dualite.ai/api/file/7192a79c-3983-4992-80a0-703e3f18d16b?project_id=928f359f-247f-485f-a1f7-930c26322211",
    "https://file-service.dualite.ai/api/file/02583450-2951-4806-b47e-c1d344931b5c?project_id=928f359f-247f-485f-a1f7-930c26322211",
    "/cyberfest-2k25.jpg" // Image path for the Cyber Fest photo
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Side - Image Slideshow */}
          <div className="lg:w-1/3 w-full h-[400px] relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white group">
            <AnimatePresence mode='wait'>
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt="Achievement Event"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </AnimatePresence>
            
            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
              {images.map((_, idx) => (
                <div 
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-primary w-4' : 'bg-white/50'}`}
                />
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
               <p className="text-white font-michroma text-xs tracking-widest text-center">EVENT HIGHLIGHTS</p>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <StatCard number="10+" label="Course Certificate" icon={BookOpen} />
            <StatCard number="85+" label="Symposium Certificate" icon={Users} />
            <StatCard number="10+" label="Workshop Certificate" icon={Award} />
            <StatCard number="10+" label="Sports/Other Event" icon={Trophy} />
          </div>

        </div>
      </div>
    </section>
  );
};
