import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ExternalLink, X, ZoomIn } from 'lucide-react';
import data from '../data.json';

export const Certifications: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const [selectedCert, setSelectedCert] = useState<any>(null);

  return (
    <section id="certifications" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 font-display ${isDark ? 'text-white' : 'text-black'}`}>
            Professional Certifications
          </h2>
          <p className={`text-lg ${isDark ? 'text-white/50' : 'text-black/50'}`}>
            Validating expertise in SAP S/4HANA and professional excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {(data as any).certifications?.map((cert: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative rounded-2xl overflow-hidden border cursor-pointer ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'
              }`}
              onClick={() => setSelectedCert(cert)}
            >
              <div className="aspect-[1.414/1] overflow-hidden relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
                    {cert.issuer}
                  </span>
                </div>
                <h3 className={`text-lg font-bold font-display ${isDark ? 'text-white' : 'text-black'}`}>
                  {cert.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/3 bg-black flex items-center justify-center p-4">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="max-h-[70vh] w-auto object-contain rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="lg:w-1/3 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                      <Award className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-mono text-blue-400 uppercase tracking-widest">
                      {selectedCert.issuer}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 font-display">
                    {selectedCert.title}
                  </h3>
                  <p className="text-white/60 mb-8 leading-relaxed">
                    Official certification recognizing professional achievement and technical proficiency in SAP ecosystems.
                  </p>
                  <button className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-blue-500 text-white font-bold hover:bg-blue-600 transition-colors">
                    <ExternalLink className="w-5 h-5" />
                    Verify Certificate
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
