import React from 'react';
import { ArrowRight, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  category?: string;
  description: string;
  image?: string;
  type: 'image' | 'github';
  link?: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  if (project.type === 'github') {
    return (
      <motion.div 
        whileHover={{ y: -10 }}
        className="h-[400px] bg-white rounded-2xl overflow-hidden relative flex flex-col shadow-2xl group"
      >
        <div className="h-1/2 bg-black flex items-center justify-center">
           <Github size={80} className="text-white" />
        </div>
        <div className="h-1/2 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-black mb-2 uppercase tracking-wider font-orbitron">{project.title}</h3>
            <p className="text-gray-500 text-sm line-clamp-3 font-poppins leading-relaxed">{project.description}</p>
          </div>
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-md border border-primary text-primary font-bold flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all duration-300 font-michroma text-xs uppercase tracking-widest"
          >
            See Projects <ArrowRight size={16} />
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="h-[400px] rounded-2xl overflow-hidden relative group shadow-2xl border border-white/10"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
        <div className="transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
          <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2 block font-michroma">
            {project.category}
          </span>
          <h3 className="text-2xl font-bold text-white mb-3 uppercase font-orbitron tracking-wide">
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 h-0 group-hover:h-auto font-poppins leading-relaxed">
            {project.description}
          </p>
          
          <button className="bg-white text-primary px-6 py-3 rounded-md font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 hover:bg-primary hover:text-white transition-colors duration-300 w-max font-michroma">
            {project.type === 'image' ? 'View Projects' : 'View Project'} <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const projects: Project[] = [
    {
      title: "Web Development",
      category: "UI-UX/HTML/CSS/JS",
      description: "Responsive and dynamic web applications built with modern technologies focusing on user experience and performance.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000&auto=format&fit=crop",
      type: "image"
    },
    {
      title: "Software Project",
      category: "React.js / Native",
      description: "Cross-platform software solutions designed to solve complex business problems with scalable architecture.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
      type: "image"
    },
    {
      title: "AI/ML Project",
      category: "AI / Machine Learning",
      description: "Intelligent systems leveraging neural networks and deep learning algorithms to automate and predict outcomes.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
      type: "image"
    },
    {
      title: "Data Science",
      category: "Python / Analytics",
      description: "Extracting actionable insights from raw data through statistical analysis and visualization techniques.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      type: "image"
    },
    {
      title: "Cloud Computing",
      category: "AWS / Azure",
      description: "Scalable cloud infrastructure setups ensuring high availability, security, and cost-optimization.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
      type: "image"
    },
    {
      title: "GITHUB",
      description: "Check out my open source contributions and other coding projects on my GitHub profile.",
      type: "github",
      link: "https://github.com/Vignesh58728"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-orbitron font-bold text-4xl text-white mb-2 tracking-wider">PROJECTS</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
