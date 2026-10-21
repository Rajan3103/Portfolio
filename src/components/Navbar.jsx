import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket, Terminal, Zap, User, Code, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Rocket },
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills', href: '#skills', icon: Zap },
    { name: 'Projects', href: '#projects', icon: Code },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="container mx-auto px-6">
        <div className={`glass-card px-8 py-4 flex justify-between items-center transition-all duration-500 ${scrolled ? 'rounded-2xl border-primary/20 shadow-primary/10' : 'rounded-3xl'}`}>
          
          <motion.a 
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-[#1d2021] group-hover:rotate-12 transition-transform">
              <Terminal size={20} />
            </div>
            <span className="text-lg font-bold font-mono tracking-tight">
              <span className="text-accent">karthig</span><span className="text-gray-500">@</span>dev<span className="text-primary">:~$</span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-primary hover:bg-white/5 transition-all flex items-center gap-2 group"
              >
                <link.icon size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 rounded-xl bg-white/5 text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 mt-4 px-6"
          >
            <div className="glass-card p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-4 rounded-2xl bg-white/5 text-gray-300 font-bold uppercase tracking-widest text-sm hover:bg-primary/10 hover:text-primary transition-all flex items-center gap-4"
                >
                  <link.icon size={18} />
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
