import React from 'react';
import { motion } from 'motion/react';
import { X, Printer } from 'lucide-react';
import data from '../data.json';

export const ResumeView: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black overflow-y-auto p-6 md:p-20"
    >
      <div className="max-w-4xl mx-auto bg-white text-black p-8 md:p-16 rounded-sm shadow-2xl print:p-0 print:shadow-none">
        <div className="flex justify-between items-start mb-12 print:hidden">
          <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
          <button onClick={handlePrint} className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full hover:bg-black/80 transition-colors">
            <Printer className="w-4 h-4" />
            Print / Save as PDF
          </button>
        </div>

        <header className="border-b-2 border-black pb-8 mb-8">
          <h1 className="text-4xl font-bold font-display mb-2 uppercase tracking-tight">{data.basics.name}</h1>
          <p className="text-xl font-medium font-display text-black/60 mb-4">{data.basics.title}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-mono">
            <span>{data.basics.email}</span>
            <span>{data.basics.phone}</span>
            <span>{data.basics.location}</span>
            <a href={data.basics.linkedin} className="underline">LinkedIn</a>
          </div>
        </header>

        <section className="mb-8">
          <h2 className="text-lg font-bold font-display uppercase border-b border-black/10 mb-4 pb-1">Profile</h2>
          <p className="text-sm leading-relaxed">{data.basics.summary}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold font-display uppercase border-b border-black/10 mb-4 pb-1">Experience</h2>
          <div className="space-y-6">
            {data.experience.map((exp, i) => (
              <div key={i}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold font-display">{exp.role} | {exp.company}</h3>
                  <span className="text-sm font-mono">{exp.dates}</span>
                </div>
                <p className="text-xs text-black/60 mb-2 italic">{exp.location}</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold font-display uppercase border-b border-black/10 mb-4 pb-1">Projects</h2>
          <div className="space-y-4">
            {data.projects.map((project, i) => (
              <div key={i}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold font-display">{project.title}</h3>
                  <span className="text-sm font-mono">{project.dates}</span>
                </div>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {project.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-2 gap-8">
          <section>
            <h2 className="text-lg font-bold font-display uppercase border-b border-black/10 mb-4 pb-1">Education</h2>
            <div className="space-y-4">
              {data.education.map((edu, i) => (
                <div key={i}>
                  <p className="font-bold font-display text-sm">{edu.degree}</p>
                  <p className="text-sm">{edu.institution}</p>
                  <p className="text-xs text-black/60 font-mono">{edu.dates} | {edu.location}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold font-display uppercase border-b border-black/10 mb-4 pb-1">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, i) => (
                <span key={i} className="text-sm px-2 py-1 bg-black/5 rounded-sm font-mono">{skill.name}</span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};
