import { motion } from 'framer-motion';
import { Code, Palette, Rocket, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Neon UI Kit',
    desc: 'A retro-futuristic design system focusing on accessibility and velocity.',
    icon: Palette,
    link: '#',
    gradient: 'from-fuchsia-500/20 to-indigo-500/20',
  },
  {
    title: 'Hyperweb Starter',
    desc: 'SSR-ready web boilerplate with motion primitives and theming.',
    icon: Code,
    link: '#',
    gradient: 'from-cyan-400/20 to-blue-500/20',
  },
  {
    title: 'Launch Console',
    desc: 'Analytics dashboard for product launches with smooth microinteractions.',
    icon: Rocket,
    link: '#',
    gradient: 'from-violet-500/20 to-purple-500/20',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-[#0a0a0f] to-[#0b0b12]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-700/20 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white"
        >
          Selected Projects
        </motion.h2>
        <p className="mt-3 text-slate-300 max-w-2xl">
          Case studies and experiments that blend user-centered design with modern web engineering.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 border border-white/10">
                      <p.icon className="text-fuchsia-300" size={20} />
                    </span>
                    <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  </div>
                  <ExternalLink className="text-slate-400 group-hover:text-white transition-colors" size={18} />
                </div>
                <p className="mt-3 text-slate-300">
                  {p.desc}
                </p>

                <div className="mt-6 flex items-center gap-3 text-xs text-slate-400">
                  <span className="px-2 py-1 rounded bg-white/5 border border-white/10">UX</span>
                  <span className="px-2 py-1 rounded bg-white/5 border border-white/10">React</span>
                  <span className="px-2 py-1 rounded bg-white/5 border border-white/10">Motion</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
