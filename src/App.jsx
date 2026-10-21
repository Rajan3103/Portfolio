import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import ExtraSections from './components/ExtraSections';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial sequence
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-base text-textmain selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <CustomCursor />

      {loading ? (
        <div className="fixed inset-0 z-[100] bg-base flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full shadow-[0_0_30px_rgba(250,189,47,0.5)]"
          />
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10"
        >
          <Navbar />

          <main className="space-y-0">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <ExtraSections />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
