import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, ChevronDown, MapPin } from 'lucide-react';
import data from '../data.json';

export const Experience: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold font-display mb-4 ${isDark ? 'text-white' : 'text-black'}`}>Professional Journey</h2>
          <p className={isDark ? 'text-white/50' : 'text-black/50'}>My career path in the SAP ecosystem.</p>
        </motion.div>

        <div className="space-y-6">
          {data.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className={`cursor-pointer p-8 rounded-3xl border transition-all duration-500 ${
                  expandedIndex === index
                    ? isDark ? 'bg-white/5 border-white/20' : 'bg-black/5 border-black/20'
                    : isDark 
                      ? 'bg-transparent border-white/5 hover:border-white/10 hover:bg-white/[0.02]'
                      : 'bg-transparent border-black/5 hover:border-black/10 hover:bg-black/[0.02]'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>{exp.role}</h3>
                      <p className={`${isDark ? 'text-white/60' : 'text-black/60'} font-medium`}>{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="text-right hidden md:block">
                      <p className={`font-medium font-mono ${isDark ? 'text-white' : 'text-black'}`}>{exp.dates}</p>
                      <div className={`flex items-center justify-end gap-1 text-sm font-mono ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 transition-transform duration-500 ${
                        isDark ? 'text-white/20' : 'text-black/20'
                      } ${expandedIndex === index ? 'rotate-180' : ''}`}
                    />
                  </div>
                </div>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className={`pt-8 mt-8 border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                        <ul className="space-y-4">
                          {exp.bullets.map((bullet, i) => (
                            <li key={i} className={`flex gap-4 leading-relaxed ${isDark ? 'text-white/60' : 'text-black/60'}`}>
                              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
