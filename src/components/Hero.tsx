import React from 'react';
import { Button } from './ui/Button';
import { Download, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  const techStack = [
    "HTML", "CSS", "JAVASCRIPT", "PYTHON", "JAVA", "REACT", "NODE.JS", "GITHUB", "CLOUD", "UI/UX"
  ];

  return (
    <section id="home" className="relative pt-20 min-h-screen flex flex-col justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 bg-dark z-0"></div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between mt-10 md:mt-0">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 space-y-8 text-center md:text-left"
        >
          <h2 className="font-poppins font-bold text-3xl md:text-5xl lg:text-[64px] leading-tight text-white">
            Hi, I'm Vignesh, a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">UI UX Designer.</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button variant="secondary">
              Hire me
            </Button>
            <Button variant="dark" className="!bg-[#393E46]/75">
              Download CV <Download className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 relative mt-12 md:mt-0 flex justify-center md:justify-end"
        >
          <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 w-full h-full bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-secondary/20 rounded-full blur-3xl"></div>
            
            {/* Yellow SVG Shape simulation */}
            <svg className="absolute top-10 right-10 w-20 h-20 text-accent animate-bounce" viewBox="0 0 100 100" fill="currentColor">
               <circle cx="50" cy="50" r="50" />
            </svg>

            {/* Main Image */}
            <img 
              src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/c326/c57d/3360aeac03692f1e912e8b412ab1b96e?Expires=1765152000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HF-sxVm-tjVAE0-jc1LIh8S5WaiDHqByPbnI79B8IttqDKGfU~porXlOheyM7fttbT-zdUn2x9J5B26L0R3kbXYh2Staf4RGnVYEJYxGCuMTzpWu5Iz8U0ru1-qF3bWXZUShCo5TdEQWHvOqIsPH6QVilcxMsar8y2E~M0T2qVQKJtbbVsOS1~2dEn8chN57o6s8Gd49SJ21YYYrAz-lUo9MTuJNK0NbYLqtiy2-3bvCpmrArVe-KF-HihO6qUHrH1YarigrcwomkRLV-llr-0D4p-Ln6k5HGBavlipo9X4nETtfibToz3OSymENWrfgTTiYmdDl9~PEqnpsZgOp6w__" 
              alt="Vignesh" 
              className="relative z-10 w-full h-full object-cover object-top rounded-b-full mask-image-gradient"
              style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
            />
          </div>
        </motion.div>
      </div>

      {/* Tech Stack Marquee */}
      <div className="w-full bg-dark-200 py-6 mt-12 overflow-hidden border-t border-gray-800">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...techStack, ...techStack].map((tech, index) => (
            <span key={index} className="mx-8 font-michroma text-lg md:text-xl text-white/80 hover:text-primary transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
