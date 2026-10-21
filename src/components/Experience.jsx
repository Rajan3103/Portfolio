import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Briefcase, MapPin, Calendar, Rocket } from 'lucide-react';

const ExperienceCard = ({ exp, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay: index * 0.2 }}
    className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
  >
    {/* Timeline Connector */}
    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10 hidden md:block" />
    
    {/* Timeline Node */}
    <div className="absolute left-1/2 -translate-x-1/2 top-8 w-6 h-6 rounded-full bg-base border-2 border-primary hidden md:flex items-center justify-center z-10 shadow-[0_0_20px_rgba(250,189,47,0.5)]">
       <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
    </div>

    {/* Card Content */}
    <div className={`${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'} space-y-4`}>
      <div className="glass-card p-8 group hover:border-primary/40 transition-all duration-500 relative">
        <div className={`absolute top-4 ${index % 2 === 0 ? 'right-4' : 'left-4'} p-3 rounded-2xl bg-primary/10 text-primary opacity-0 group-hover:opacity-100 transition-opacity`}>
          <Rocket size={20} />
        </div>
        
        <div className="space-y-1">
          <span className="text-primary font-bold text-xs uppercase tracking-widest">{exp.period}</span>
          <h3 className="text-2xl font-bold font-space text-textmain">{exp.title}</h3>
          <p className="text-secondary font-bold text-sm">{exp.company}</p>
        </div>

        <div className={`flex items-center gap-4 text-xs text-gray-500 font-bold ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
          <div className="flex items-center gap-1"><MapPin size={12} /> {exp.location}</div>
        </div>

        <ul className={`mt-6 space-y-3 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
          {exp.responsibilities.map((task, i) => (
            <li key={i} className="text-sm text-gray-400 leading-relaxed flex gap-3 md:block">
              <span className="md:hidden block">•</span> {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  const experiences = portfolioData.experience;

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 space-y-24">
        
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">
            Experience
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
        </div>

        <div className="space-y-20 relative">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} exp={exp} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
