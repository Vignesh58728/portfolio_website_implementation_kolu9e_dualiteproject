import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ role, date, company, description, isLast }: { role: string, date: string, company: string, description: string, isLast?: boolean }) => (
  <div className="flex gap-6">
    {/* Line & Dot */}
    <div className="flex flex-col items-center">
      <div className="w-5 h-5 rounded-full border-4 border-white bg-dark shadow-[0_0_0_4px_rgba(255,255,255,1)] z-10"></div>
      {!isLast && <div className="w-0.5 bg-gray-200 h-full min-h-[100px] -mt-2"></div>}
    </div>
    
    {/* Content */}
    <div className="pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 mb-2">
        <h3 className="font-inter font-bold text-xl text-dark-300">{role}</h3>
        <span className="font-inter text-gray-500 text-sm">{date}</span>
      </div>
      <h4 className="font-inter font-medium text-dark-400 mb-3">{company}</h4>
      <p className="font-inter text-gray-500 leading-relaxed max-w-2xl">
        {description}
      </p>
    </div>
  </div>
);

export const Timeline = () => {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-inter font-extrabold text-3xl text-dark-300 mb-12">Career Progression</h2>
        
        <div className="space-y-0">
          <TimelineItem 
            role="Senior Product Designer"
            date="2021 - Present"
            company="TechFlow Solutions"
            description="Led the redesign of the core SaaS platform, resulting in a 40% increase in user retention. Mentored a team of 5 junior designers."
          />
          <TimelineItem 
            role="UX Engineer"
            date="2018 - 2021"
            company="Creative Pulse Agency"
            description="Developed responsive interfaces for Fortune 500 clients. Specialized in accessibility standards (WCAG 2.1) implementation."
          />
          <TimelineItem 
            role="Junior Web Developer"
            date="2016 - 2018"
            company="StartUp Inc."
            description="Full-stack contribution using React and Node.js. Shipped 3 major products from concept to launch."
            isLast={true}
          />
        </div>
      </div>
    </section>
  );
};
