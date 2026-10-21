import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, CheckCircle2, Code, Gamepad, Plane, Camera, Music, Sparkles, ShieldCheck, Drama, Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const CertBadge = ({ title, issuer, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
    whileHover={{ y: -10, rotateY: 10, rotateX: 10 }}
    className="glass-card p-6 border-white/5 hover:border-primary/30 transition-all flex flex-col items-center text-center gap-4 group relative overflow-hidden perspective-1000"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    
    <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-base transition-all duration-500 shadow-[0_0_20px_rgba(250,189,47,0.2)]">
      <ShieldCheck size={32} />
    </div>

    <div className="space-y-1">
      <h4 className="font-bold text-textmain font-space text-sm leading-tight">{title}</h4>
      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{issuer}</p>
    </div>

    {/* Holographic Shimmer */}
    <div className="absolute top-[-100%] left-[-100%] w-[300%] h-[300%] bg-gradient-to-br from-transparent via-white/5 to-transparent rotate-[35deg] transition-all duration-1000 group-hover:top-[100%] group-hover:left-[100%]" />
  </motion.div>
);

const ExtraSections = () => {
  const { certifications, activities, hobbies } = portfolioData;

  const getHobbyIcon = (iconName) => {
    switch (iconName) {
      case 'Code': return Code;
      case 'Gamepad': return Gamepad;
      case 'Plane': return Plane;
      case 'Camera': return Camera;
      case 'Music': return Music;
      case 'Drama': return Drama;
      case 'Trophy': return Trophy;
      default: return Sparkles;
    }
  };

  return (
    <section className="relative py-32 space-y-32">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Certifications - Holographic Grid */}
          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-secondary/10 text-secondary border border-secondary/20">
                <Award size={28} />
              </div>
              <h2 className="text-3xl font-bold uppercase tracking-tighter">Certifications</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {certifications.map((cert, idx) => (
                <CertBadge key={idx} {...cert} delay={idx * 0.1} />
              ))}
            </div>
          </div>

          {/* Activities - Floating Card */}
          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary border border-primary/20">
                <Heart size={28} />
              </div>
              <h2 className="text-3xl font-bold uppercase tracking-tighter">Leadership <span className="text-gradient">&amp; Community</span></h2>
            </div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass-card p-10 relative overflow-hidden group h-full flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform">
                <Heart size={150} className="text-accent" />
              </div>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed italic font-medium">
                "{activities.description}"
              </p>
              <ul className="space-y-4">
                {activities.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex gap-4 items-center">
                    <CheckCircle2 size={20} className="text-accent" />
                    <span className="text-gray-300 font-bold uppercase tracking-wider text-xs">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Hobbies - Icons */}
        <div className="space-y-16 pt-40">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold uppercase tracking-tighter">Personal <span className="text-gradient">Interests</span></h2>
            <div className="w-12 h-1 bg-primary/30 rounded-full" />
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {hobbies.map((hobby, idx) => {
              const Icon = getHobbyIcon(hobby.icon);
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center gap-4 group cursor-default"
                >
                  <div className="p-6 rounded-lg bg-white/5 border border-white/10 text-gray-400 group-hover:bg-primary/20 group-hover:border-primary/50 group-hover:text-primary group-hover:scale-110 transition-all duration-500 shadow-xl">
                    <Icon size={32} />
                  </div>
                  <span className="font-bold text-[10px] uppercase tracking-[0.3rem] text-gray-500 group-hover:text-textmain transition-colors">{hobby.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExtraSections;
