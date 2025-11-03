import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-[#0b0b12]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-10 left-10 h-72 w-72 bg-fuchsia-600/20 rounded-full blur-3xl" />
        <div className="absolute -top-16 right-10 h-80 w-80 bg-indigo-600/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center"
        >
          Let's build something delightful
        </motion.h2>
        <p className="mt-3 text-slate-300 text-center">
          Open to freelance, product design, and frontend collaborations.
        </p>

        <motion.form
          onSubmit={(e) => e.preventDefault()}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="group">
              <label className="text-sm text-slate-300">Name</label>
              <input
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-slate-100 outline-none ring-0 focus:border-fuchsia-400/50 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div className="group">
              <label className="text-sm text-slate-300">Email</label>
              <input
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-slate-100 outline-none ring-0 focus:border-fuchsia-400/50 transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="group">
            <label className="text-sm text-slate-300">Message</label>
            <textarea
              rows={5}
              required
              className="mt-1 w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-slate-100 outline-none ring-0 focus:border-fuchsia-400/50 transition-colors"
              placeholder="Tell me about your project..."
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98, y: 0 }}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-3 text-white shadow-lg shadow-fuchsia-500/30"
          >
            <Mail size={18} /> Send message
          </motion.button>
          <p className="text-xs text-slate-400 text-center">
            This is a demo form. Hook it to your favorite email/API provider.
          </p>
        </motion.form>

        <div className="mt-10 text-center text-slate-500">
          © {new Date().getFullYear()} Almaas Rozikin. All rights reserved.
        </div>
      </div>
    </section>
  );
}
