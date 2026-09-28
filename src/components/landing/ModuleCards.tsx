import { motion } from 'framer-motion';
import { Code, Flag, Zap } from 'lucide-react';
import modules from '@/modules';
import { Link } from 'react-router-dom';

const moduleIconMap = {
  python: Code,
  flask: Zap,
  django: Flag,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

export default function ModuleCards() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Explore os módulos</h2>
          <p className="mt-2 text-slate-400">Cada um com uma jornada completa de aprendizado</p>
        </div>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {modules.map((module) => {
            const Icon = moduleIconMap[module.id as keyof typeof moduleIconMap];
            const colorBg = module.id === 'python' ? 'bg-module-python' : 'bg-gradient-to-br from-slate-700 to-slate-800';
            const isAvailable = module.status === 'available';

            return (
              <motion.div
                key={module.id}
                className={`rounded-2xl border p-6 transition ${
                  isAvailable ? 'border-white/15 bg-white/5' : 'border-white/5 bg-white/[0.02] opacity-60'
                }`}
                variants={cardVariants}
              >
                <div className={`mb-4 inline-flex rounded-xl ${colorBg} bg-opacity-10 p-3`}>
                  {Icon && <Icon className="h-6 w-6" />}
                </div>

                <h3 className="font-display text-2xl font-bold text-white">{module.nome}</h3>
                <p className="mt-2 text-slate-400">{module.descricao}</p>

                <div className="mt-6 space-y-2">
                  {module.trilha[0]?.aulas.map((aula) => (
                    <div key={aula.id} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      {aula.titulo}
                    </div>
                  ))}
                </div>

                {isAvailable ? (
                  <Link
                    to={`/${module.id}`}
                    className="mt-6 block rounded-lg bg-cyan-500/20 px-4 py-2 text-center font-medium text-cyan-300 transition hover:bg-cyan-500/30"
                  >
                    Começar →
                  </Link>
                ) : (
                  <div className="mt-6 rounded-lg bg-slate-800/40 px-4 py-2 text-center text-sm font-medium text-slate-400">
                    Em breve
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
