import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Folder, Search, Filter, X } from 'lucide-react';
import data from '../data.json';

export const Projects: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const allTechs = useMemo(() => {
    const techs = new Set<string>();
    data.projects.forEach(p => p.stack?.forEach(t => techs.add(t)));
    return Array.from(techs).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    return data.projects.filter(project => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.bullets.some(b => b.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesTech = !selectedTech || project.stack?.includes(selectedTech);
      
      return matchesSearch && matchesTech;
    });
  }, [searchQuery, selectedTech]);

  return (
    <section id="projects" className="py-32 px-6 bg-white/[0.02] dark:bg-white/[0.02] light:bg-black/[0.02]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white dark:text-white light:text-black mb-4">Key Projects</h2>
          <p className="text-white/50 dark:text-white/50 light:text-black/50">Strategic implementations and technical solutions.</p>
        </motion.div>

        {/* Search and Filter Controls */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 dark:text-white/30 light:text-black/30" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 text-white dark:text-white light:text-black focus:outline-none focus:border-blue-500 transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              <Filter className="w-5 h-5 text-white/30 dark:text-white/30 light:text-black/30 shrink-0" />
              <button
                onClick={() => setSelectedTech(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all shrink-0 ${
                  !selectedTech 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white/5 dark:bg-white/5 light:bg-black/5 text-white/50 dark:text-white/50 light:text-black/50 hover:text-white'
                }`}
              >
                All
              </button>
              {allTechs.map(tech => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(tech)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all shrink-0 ${
                    selectedTech === tech 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-white/5 dark:bg-white/5 light:bg-black/5 text-white/50 dark:text-white/50 light:text-black/50 hover:text-white'
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative p-8 rounded-3xl bg-white/5 dark:bg-white/5 light:bg-black/5 border border-white/10 dark:border-white/10 light:border-black/10 hover:border-blue-500/50 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 dark:bg-white/5 light:bg-black/5 flex items-center justify-center text-white/40 dark:text-white/40 light:text-black/40 group-hover:text-blue-400 transition-colors">
                    <Folder className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-medium font-mono text-white/30 dark:text-white/30 light:text-black/30 uppercase tracking-widest">
                    {project.dates}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white dark:text-white light:text-black mb-4 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <ul className="space-y-3 mb-6">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm text-white/50 dark:text-white/50 light:text-black/50 leading-relaxed flex gap-3">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-white/20 dark:bg-white/20 light:bg-black/20 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {project.stack && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.stack.map(tech => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 text-[10px] font-bold font-mono uppercase tracking-wider bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-5 h-5 text-blue-400" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-white/30 text-lg italic">No projects found matching your criteria.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
