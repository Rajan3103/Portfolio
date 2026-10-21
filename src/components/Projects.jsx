import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Rocket, Layout, ShieldCheck, Cpu, BrainCircuit, Database } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const ProjectCard = ({ project, index }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'auth': return ShieldCheck;
      case 'app': return Layout;
      case 'ai': return BrainCircuit;
      case 'data': return Database;
      default: return Cpu;
    }
  };

  const Icon = getIcon(project.type);
  const isAI = project.tags.some(tag => tag.includes('AI') || tag.includes('NLP') || tag.includes('LLM') || tag.includes('ML'));
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -15, scale: 1.02 }}
      className={`glass-card p-0 overflow-hidden group relative flex flex-col ${isAI ? 'border-accent shadow-[0_0_30px_rgba(184,187,38,0.15)]' : 'border-white/10'}`}
    >
      {isAI && (
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent z-30" />
      )}
      {/* Perspective Tilt Effect Wrapper */}
      <div className="relative aspect-video overflow-hidden bg-base/50">
        <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity duration-700">
           <Icon size={120} className="text-primary animate-floating-slow" />
        </div>
        
        {/* Holographic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 pointer-events-none" />
        
        {/* Action Buttons */}
        <div className="absolute top-6 right-6 flex gap-3 z-20">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 rounded-2xl bg-base/80 border border-white/10 text-textmain hover:bg-primary hover:text-base transition-all duration-300"
          >
            <Github size={20} />
          </a>
          {project.demo && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-2xl bg-base/80 border border-white/10 text-textmain hover:bg-accent hover:text-base transition-all duration-300"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-3 py-1 rounded-full border border-primary/20">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-bold font-space text-textmain group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="pt-6 border-t border-white/5">
           <span className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.3rem]">Project {index + 1}</span>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = portfolioData.projects;

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 space-y-24">
        
        <div className="flex justify-between items-end">
          <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">
                Featured <span className="text-gradient">Projects</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full" />
          </div>
          <p className="text-gray-500 font-bold hidden md:block uppercase tracking-widest text-xs">[{projects.length} PROJECTS]</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[minmax(400px,auto)]">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
