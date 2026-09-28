import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-violet-500/10" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-900/20 via-slate-900/20 to-violet-900/20 p-8 text-center sm:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Pronto para começar sua jornada?
          </h2>
          <p className="mt-3 text-slate-300">
            Não é preciso criar conta, instalar nada ou fazer download. Apenas comece a aprender.
          </p>

          <motion.div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/python"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Começar agora <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="#trilha"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-8 py-4 font-semibold text-cyan-300 transition hover:bg-cyan-500/20"
            >
              Ver trilha completa
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
