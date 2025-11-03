import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Mail, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-20 overflow-hidden bg-[#0a0a0f]">
      {/* Ambient gradient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-80 w-80 bg-fuchsia-600/30 rounded-full blur-3xl" />
        <div className="absolute top-40 right-0 h-96 w-96 bg-indigo-600/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
        <div className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
            Retro-futuristic portfolio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
          >
            Almaas Rozikin
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-violet-400 to-indigo-400">
              UX Designer • Web Developer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-5 max-w-xl text-slate-300"
          >
            I craft human-centered interfaces and develop delightful, performant web experiences. Blending usability with a neon-soaked aesthetic.
          </motion.p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98, y: 0 }}
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-5 py-3 text-white shadow-lg shadow-fuchsia-500/30"
            >
              Explore Work
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98, y: 0 }}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-slate-200 hover:bg-white/10"
            >
              <Mail size={18} /> Contact
            </motion.a>
            <motion.a
              href="#" download
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98, y: 0 }}
              className="inline-flex items-center gap-2 rounded-lg border border-fuchsia-500/30 bg-gradient-to-r from-fuchsia-500/10 to-indigo-500/10 px-5 py-3 text-fuchsia-200 hover:from-fuchsia-500/20 hover:to-indigo-500/20"
            >
              <Download size={18} /> Resume
            </motion.a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="relative h-[60vh] lg:h-[70vh] rounded-2xl overflow-hidden border border-white/10 bg-[#0b0b12]"
        >
          <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />

          {/* subtle overlay gradient for depth - does not block interaction */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* scrolling cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400"
      >
        <div className="h-10 w-6 rounded-full border border-white/20 flex items-start justify-center p-1">
          <motion.span
            className="h-2 w-1 rounded-full bg-white/60"
            animate={{ y: [0, 14, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
