import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Palette, Code2 } from 'lucide-react';

const featureItem = (Icon, title, text) => (
  <motion.li
    key={title}
    className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-transform hover:-translate-y-1"
    whileHover={{ scale: 1.02 }}
    viewport={{ once: true, amount: 0.3 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-fuchsia-500/10 via-violet-500/10 to-cyan-500/10" />
    <Icon className="mb-3 h-6 w-6 text-fuchsia-300" />
    <h3 className="mb-1 font-medium text-white">{title}</h3>
    <p className="text-sm text-white/70">{text}</p>
  </motion.li>
);

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#0b0b12] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <motion.h2
          className="mb-4 bg-gradient-to-r from-fuchsia-300 via-violet-200 to-cyan-200 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About
        </motion.h2>
        <motion.p
          className="max-w-3xl text-white/80"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          I’m Almaas Rozikin — blending human-centered UX with robust front-end engineering. I prototype quickly, iterate with real users, and ship responsive interfaces that feel playful yet purposeful.
        </motion.p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featureItem(Rocket, 'Product-thinking', 'From discovery to launch, I align UX, brand, and dev constraints for outcomes, not just outputs.')}
          {featureItem(Palette, 'Pixel-perfect craft', 'Thoughtful micro-interactions, accessible color, and typography that scales across breakpoints.')}
          {featureItem(Code2, 'Production-ready code', 'Modern stacks, component systems, and performance-first build practices.')}
        </ul>
      </div>
    </section>
  );
};

export default About;
