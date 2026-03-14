import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Linkedin, Mail } from 'lucide-react';
import data from '../data.json';

export const Hero: React.FC<{ onShowResume: () => void; isDark: boolean }> = ({ onShowResume, isDark }) => {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-widest text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 rounded-full">
            Available for Opportunities
          </span>
          
          <h1 className={`text-6xl md:text-8xl font-bold font-display tracking-tight mb-6 ${isDark ? 'text-white' : 'text-black'}`}>
            {data.basics.name}
          </h1>
          
          <h2 className={`text-2xl md:text-4xl font-medium font-display mb-8 ${isDark ? 'text-white/70' : 'text-black/70'}`}>
            {data.basics.title}
          </h2>
          
          <p className={`text-lg md:text-xl max-w-2xl mb-12 leading-relaxed ${isDark ? 'text-white/50' : 'text-black/50'}`}>
            {data.basics.summary}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-16">
            <button
              onClick={scrollToExperience}
              className={`group flex items-center gap-2 px-8 py-4 font-semibold rounded-full transition-all duration-300 ${
                isDark ? 'bg-white text-black hover:bg-blue-500 hover:text-white' : 'bg-black text-white hover:bg-blue-500'
              }`}
            >
              View Experience
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="/resume.pdf"
              download
              className={`flex items-center gap-2 px-8 py-4 font-semibold border rounded-full transition-all duration-300 ${
                isDark ? 'bg-blue-500 text-white border-blue-500/20 hover:bg-blue-600' : 'bg-blue-600 text-white border-blue-600/20 hover:bg-blue-700'
              }`}
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>

            <button
              onClick={onShowResume}
              className={`flex items-center gap-2 px-8 py-4 font-semibold border rounded-full transition-all duration-300 ${
                isDark ? 'bg-white/5 text-white border-white/10 hover:bg-white/10' : 'bg-black/5 text-black border-black/10 hover:bg-black/10'
              }`}
            >
              View Online
            </button>
          </div>
          
          <div className="flex items-center gap-6">
            <a href={`mailto:${data.basics.email}`} className={`${isDark ? 'text-white/40 hover:text-white' : 'text-black/40 hover:text-black'} transition-colors`}>
              <Mail className="w-6 h-6" />
            </a>
            <a href={data.basics.linkedin} target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-white/40 hover:text-white' : 'text-black/40 hover:text-black'} transition-colors`}>
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className={`w-6 h-10 border-2 rounded-full flex justify-center p-2 ${isDark ? 'border-white/20' : 'border-black/20'}`}>
          <div className={`w-1 h-2 rounded-full ${isDark ? 'bg-white/40' : 'bg-black/40'}`} />
        </div>
      </motion.div>
    </section>
  );
};
