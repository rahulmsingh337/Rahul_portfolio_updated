import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Star, Award } from 'lucide-react';
import data from '../data.json';

export const Awards: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  return (
    <section id="awards" className={`py-32 px-6 ${isDark ? 'bg-blue-500/[0.02]' : 'bg-blue-500/[0.01]'}`}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>Achievements</h2>
          <p className={isDark ? 'text-white/50' : 'text-black/50'}>Recognition for excellence and impact.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {data.achievements.map((ach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl border ${
                isDark 
                  ? 'bg-white/5 border-white/10' 
                  : 'bg-black/5 border-black/10'
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={(ach as any).image} 
                  alt={ach.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-black/80 via-black/20' : 'from-white/80 via-white/20'} to-transparent opacity-60 group-hover:opacity-40 transition-opacity`} />
              </div>
              
              <div className="p-6 relative">
                <div className="w-10 h-10 mb-4 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Trophy className="w-5 h-5" />
                </div>
                <h3 className={`text-xl font-bold mb-2 font-display ${isDark ? 'text-white' : 'text-black'}`}>{ach.title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-white/60' : 'text-black/60'}`}>{ach.context}</p>
              </div>

              {/* Decorative glow */}
              <div className="absolute -inset-px bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <div className="space-y-6">
          {data.awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`p-6 rounded-2xl border flex flex-col md:flex-row md:items-center gap-6 ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                isDark ? 'bg-white/5 text-white/40' : 'bg-black/5 text-black/40'
              }`}>
                <Award className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                  <h4 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-black'}`}>{award.title}</h4>
                  <span className="text-xs font-medium text-blue-400 uppercase tracking-widest px-3 py-1 bg-blue-500/10 rounded-full">
                    {award.organization}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-white/50' : 'text-black/50'}`}>{award.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
