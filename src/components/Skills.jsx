import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Database, Code2, Cpu, Globe, BarChart3, Box } from 'lucide-react';

const SkillGroup = ({ category, items, icon: Icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
    className="glass-card p-8 space-y-6 relative group h-full"
  >
    <div className="flex items-center gap-4">
      <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-base transition-all duration-500">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold font-space uppercase tracking-tighter">{category}</h3>
    </div>

    <div className="flex flex-wrap gap-3">
      {items.map((skill, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.1, y: -5 }}
          className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-gray-300 hover:border-primary/50 hover:text-primary transition-all cursor-default flex items-center gap-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
          {skill}
        </motion.div>
      ))}
    </div>

    {/* Subtle Glow Background */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-primary/20 rounded-full animate-pulse-glow" />
    </div>
  </motion.div>
);

const Skills = () => {
  const skills = portfolioData.skills;

  const getIcon = (category) => {
    switch (category) {
      case 'Programming Languages': return Code2;
      case 'Frameworks': return Box;
      case 'Machine Learning': return Cpu;
      case 'Data Science': return BarChart3;
      case 'Backend & Databases': return Database;
      default: return Globe;
    }
  };

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 space-y-20">
        
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
          <p className="text-gray-500 font-bold uppercase tracking-[0.2rem] text-xs">Core Competencies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <SkillGroup 
              key={idx} 
              {...skill} 
              icon={getIcon(skill.category)} 
              delay={idx * 0.1} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
