import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, Phone, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
  const { email, phone, location, github, linkedin } = portfolioData.personal;

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 space-y-24">
        
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
          <p className="text-gray-500 font-bold uppercase tracking-[0.2rem] text-xs">Get in touch</p>
        </div>

        <div className="max-w-3xl mx-auto w-full">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8 flex flex-col justify-center"
          >
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: email, href: `mailto:${email}`, color: "text-primary" },
                { icon: Phone, label: "Phone", value: phone, href: `tel:${phone}`, color: "text-secondary" },
                { icon: MapPin, label: "Location", value: location, href: "#", color: "text-accent" }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href}
                  className="glass-card p-6 flex items-center gap-6 group hover:border-primary/30 transition-all"
                >
                  <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-primary group-hover:text-base transition-all duration-500 ${item.color}`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{item.label}</p>
                    <p className="text-lg font-bold text-textmain">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <a 
              href={`mailto:${email}`}
              className="w-full btn-primary py-5 flex items-center justify-center gap-4 text-lg mt-8"
            >
              Send an Email <Send size={20} />
            </a>

            <div className="flex gap-4">
               {[
                 { icon: Github, href: github },
                 { icon: Linkedin, href: linkedin }
               ].map((social, i) => (
                 <a 
                   key={i} 
                   href={social.href}
                   className="flex-1 glass-card p-6 flex flex-col items-center gap-2 group hover:border-accent/40"
                 >
                   <social.icon size={24} className="text-gray-400 group-hover:text-accent transition-colors" />
                   <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Connect</span>
                 </a>
               ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
