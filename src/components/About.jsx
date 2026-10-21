import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { GraduationCap, Award, Briefcase, Target } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
    whileHover={{ y: -10, scale: 1.05 }}
    className="glass-card p-6 flex flex-col items-center text-center gap-3 group relative overflow-hidden"
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity`} />
    <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors`}>
      <Icon size={24} className="text-primary group-hover:text-textmain transition-colors" />
    </div>
    <div className="space-y-1">
      <h4 className="text-2xl font-bold text-textmain font-space">{value}</h4>
      <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">{label}</p>
    </div>
  </motion.div>
);

const About = () => {
  const { description, highlights, educationBrief } = portfolioData.about;

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 space-y-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">
                About <span className="text-gradient">Me</span>
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
            </div>

            <div className="space-y-6 text-lg text-gray-400 leading-relaxed font-medium">
              {description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(250,189,47,0.8)] transition-all" />
                  <span className="text-sm font-bold text-gray-300 uppercase tracking-wider">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Quick Stats */}
          <div className="grid grid-cols-2 gap-6 relative">
            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full -z-10" />
            
            <StatCard 
              icon={GraduationCap} 
              label="CGPA" 
              value="9.09" 
              color="from-primary/20 to-transparent"
              delay={0.1}
            />
            <StatCard 
              icon={Briefcase} 
              label="Experience" 
              value="3 Internships" 
              color="from-secondary/20 to-transparent"
              delay={0.2}
            />
            <StatCard 
              icon={Award} 
              label="Certifications" 
              value="5+" 
              color="from-accent/20 to-transparent"
              delay={0.3}
            />
            <StatCard 
              icon={Target} 
              label="Projects" 
              value="10+" 
              color="from-teal/20 to-transparent"
              delay={0.4}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
