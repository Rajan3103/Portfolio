import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, MessageSquare } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
  const { name, tagline } = portfolioData.personal;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Minimal Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto"
        >
          <div className="space-y-6 flex flex-col items-center">
            <motion.p variants={itemVariants} className="font-mono text-sm md:text-base text-gray-500">
              <span className="text-accent">karthig@dev</span>:<span className="text-teal">~/portfolio</span>$ <span className="text-textmain">whoami</span>
            </motion.p>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-textmain">
              {name}
            </motion.h1>

            <motion.div variants={itemVariants} className="pt-2 h-16 md:h-20 flex items-center justify-center">
              <TypeAnimation
                sequence={[
                  'Software Developer',
                  2000,
                  'AI Engineer',
                  2000,
                  'Data Analyst',
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                className="text-2xl md:text-4xl lg:text-5xl font-space font-bold text-secondary term-cursor"
                repeat={Infinity}
              />
            </motion.div>
          </div>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed font-medium">
            {tagline}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 md:gap-6 pt-8">
            <a href="#projects" className="btn-primary flex items-center gap-2 text-sm md:text-base">
              View Projects <ArrowRight size={18} />
            </a>
            <a 
              href="https://drive.google.com/file/d/1cO8EfNkRbxhHYMwaTecw63DsjlEIwGcx/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary flex items-center gap-2 text-sm md:text-base"
            >
              Resume <Download size={18} />
            </a>
            <a href="#contact" className="btn-secondary flex items-center gap-2 text-sm md:text-base border-transparent bg-white/5 hover:border-accent/50">
              Contact Me <MessageSquare size={18} />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-6 pt-12">
            {[
              { icon: Github, href: portfolioData.personal.github },
              { icon: Linkedin, href: portfolioData.personal.linkedin },
              { icon: Mail, href: `mailto:${portfolioData.personal.email}` }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                className="p-4 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
              >
                <social.icon size={22} />
              </a>
            ))}
          </motion.div>
        </motion.div>

      </div>


    </section>
  );
};

export default Hero;
