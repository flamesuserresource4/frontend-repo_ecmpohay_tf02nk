import { motion } from 'framer-motion';
import { Rocket, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.a
          href="#home"
          className="flex items-center gap-2 text-slate-100"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Rocket size={22} className="text-fuchsia-400" />
          <span className="font-semibold tracking-tight">Almaas Rozikin</span>
        </motion.a>

        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <motion.li key={l.href} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
              <a
                href={l.href}
                className="text-slate-300 hover:text-white transition-colors relative"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-fuchsia-500 to-indigo-400 group-hover:w-full transition-all" />
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <motion.a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            aria-label="GitHub"
          >
            <Github size={18} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </motion.a>
        </div>
      </nav>
    </header>
  );
}
