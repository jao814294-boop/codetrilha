import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import Terminal from './Terminal';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Hero() {
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(56, 189, 248, 0.08), transparent 80%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 pt-20">
      <div
        ref={glowRef}
        className="pointer-events-none fixed inset-0 transition-all duration-300"
        aria-hidden="true"
      />

      <div className="pointer-events-none fixed inset-0 bg-grid bg-[size:36px_36px] opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.span
              className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200"
              variants={itemVariants}
            >
              Código real no navegador
            </motion.span>

            <motion.h1
              className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
              variants={itemVariants}
            >
              Aprenda a programar escrevendo código de verdade
            </motion.h1>

            <motion.p
              className="max-w-xl text-base text-slate-300 sm:text-lg"
              variants={itemVariants}
            >
              Trilhas estruturadas, exercícios práticos e feedback imediato. Tudo roda no navegador, sem instalações.
            </motion.p>

            <motion.div className="flex flex-wrap gap-3" variants={itemVariants}>
              <Link
                to="/python"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-400"
              >
                Começar com Python <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#trilha"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:border-cyan-400/60 hover:bg-white/10"
              >
                Ver trilha
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Terminal />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
