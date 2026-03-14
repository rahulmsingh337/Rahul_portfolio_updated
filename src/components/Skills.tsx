import React from 'react';
import { motion } from 'motion/react';
import data from '../data.json';

export const Skills: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>Technical Arsenal</h2>
          <p className={isDark ? 'text-white/50' : 'text-black/50'}>Core competencies and specialized tools.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {data.skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: index * 0.05 
              }}
              className={`group relative p-6 rounded-3xl border transition-all duration-300 ${
                isDark 
                  ? 'bg-white/5 border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]' 
                  : 'bg-black/5 border-black/10 hover:border-blue-500/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]'
              }`}
            >
              {/* Tooltip */}
              <div className={`absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 rounded-xl text-xs font-bold font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:-top-14 transition-all duration-300 pointer-events-none z-10 shadow-2xl ${
                isDark ? 'bg-white text-black' : 'bg-black text-white'
              }`}>
                {skill.name} — Level {skill.level}
                <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 ${isDark ? 'bg-white' : 'bg-black'}`} />
              </div>

              <div className={`font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>{skill.name}</div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 flex-1 rounded-full ${
                      i < skill.level ? 'bg-blue-500' : isDark ? 'bg-white/10' : 'bg-black/10'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className={`text-xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-black'}`}>
              <span className="w-8 h-px bg-blue-500" />
              Languages
            </h3>
            <div className="flex flex-wrap gap-3">
              {data.languages.map((lang, i) => (
                <span key={i} className={`px-4 py-2 rounded-full border text-sm ${
                  isDark ? 'bg-white/5 border-white/10 text-white/70' : 'bg-black/5 border-black/10 text-black/70'
                }`}>
                  {lang}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className={`text-xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-black'}`}>
              <span className="w-8 h-px bg-blue-500" />
              Interests
            </h3>
            <div className="flex flex-wrap gap-3">
              {data.interests.map((interest, i) => (
                <span key={i} className={`px-4 py-2 rounded-full border text-sm ${
                  isDark ? 'bg-white/5 border-white/10 text-white/70' : 'bg-black/5 border-black/10 text-black/70'
                }`}>
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
