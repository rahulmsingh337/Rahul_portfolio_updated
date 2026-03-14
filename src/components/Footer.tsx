import React from 'react';
import data from '../data.json';

export const Footer: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  return (
    <footer className={`py-12 px-6 border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <div className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
            Rahul Singh<span className="text-blue-500">.</span>
          </div>
          <p className={`text-sm ${isDark ? 'text-white/30' : 'text-black/30'}`}>
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-8">
          <a href={`mailto:${data.basics.email}`} className={`text-sm transition-colors ${isDark ? 'text-white/40 hover:text-white' : 'text-black/40 hover:text-black'}`}>
            Email
          </a>
          <a href={data.basics.linkedin} target="_blank" rel="noopener noreferrer" className={`text-sm transition-colors ${isDark ? 'text-white/40 hover:text-white' : 'text-black/40 hover:text-black'}`}>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};
