import React from 'react';

const Footer = () => {
  return (
    <footer className="relative py-20 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold font-space tracking-tighter">
              Karthig Rajan <span className="text-primary">S</span>
            </h3>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-[0.2rem]">
              Creative Developer | Software Engineer
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-sm text-gray-400 font-medium">
              Crafting digital experiences across the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-semibold">
                digital space
              </span>
            </p>
            <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-primary/5 blur-[100px] -z-10" />
    </footer>
  );
};

export default Footer;
