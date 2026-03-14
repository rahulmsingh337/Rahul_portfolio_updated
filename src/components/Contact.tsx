import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import data from '../data.json';

export const Contact: React.FC<{ isDark: boolean }> = ({ isDark }) => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${isDark ? 'text-white' : 'text-black'}`}>Let's Connect</h2>
            <p className={`mb-12 leading-relaxed ${isDark ? 'text-white/50' : 'text-black/50'}`}>
              Interested in collaborating or have a question? Feel free to reach out. 
              I'm always open to discussing new projects and technical challenges.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className={`text-xs uppercase tracking-widest mb-1 ${isDark ? 'text-white/30' : 'text-black/30'}`}>Email</p>
                  <a href={`mailto:${data.basics.email}`} className={`transition-colors ${isDark ? 'text-white hover:text-blue-400' : 'text-black hover:text-blue-600'}`}>
                    {data.basics.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className={`text-xs uppercase tracking-widest mb-1 ${isDark ? 'text-white/30' : 'text-black/30'}`}>Phone</p>
                  <p className={isDark ? 'text-white' : 'text-black'}>{data.basics.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className={`text-xs uppercase tracking-widest mb-1 ${isDark ? 'text-white/30' : 'text-black/30'}`}>Location</p>
                  <p className={isDark ? 'text-white' : 'text-black'}>{data.basics.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`p-8 rounded-3xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block text-xs uppercase tracking-widest mb-2 ${isDark ? 'text-white/40' : 'text-black/40'}`}>Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-blue-500 transition-colors ${
                    isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-black/5 border-black/10 text-black'
                  }`}
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label className={`block text-xs uppercase tracking-widest mb-2 ${isDark ? 'text-white/40' : 'text-black/40'}`}>Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-blue-500 transition-colors ${
                    isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-black/5 border-black/10 text-black'
                  }`}
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className={`block text-xs uppercase tracking-widest mb-2 ${isDark ? 'text-white/40' : 'text-black/40'}`}>Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-blue-500 transition-colors resize-none ${
                    isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-black/5 border-black/10 text-black'
                  }`}
                  placeholder="How can I help?"
                />
              </div>

              <button
                type="submit"
                disabled={status !== 'idle'}
                className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 ${
                  status === 'success'
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
              >
                {status === 'idle' && (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
                {status === 'sending' && (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                )}
                {status === 'success' && (
                  <>
                    Message Sent
                    <CheckCircle className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
