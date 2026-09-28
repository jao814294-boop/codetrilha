import { motion } from 'framer-motion';
import { BookOpen, Code2, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: BookOpen,
    title: 'Leia a aula',
    description: 'Conteúdo estruturado em português, com exemplos e explanações claras',
  },
  {
    icon: Code2,
    title: 'Rode o código',
    description: 'Execute e experimente os exemplos direto no editor integrado',
  },
  {
    icon: CheckCircle2,
    title: 'Resolva exercícios',
    description: 'Aplique o aprendizado com desafios que testam seu código',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Como funciona</h2>
          <p className="mt-2 text-slate-400">Um ciclo simples de aprendizado</p>
        </div>

        <motion.div
          className="grid gap-8 sm:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div key={idx} className="relative" variants={stepVariants}>
                {idx < steps.length - 1 && (
                  <div className="absolute right-0 top-12 hidden h-0.5 w-8 -translate-x-8 bg-gradient-to-r from-cyan-500 to-transparent sm:block" />
                )}

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                  <div className="mb-4 inline-flex rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="mb-2 inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-300">
                    Passo {idx + 1}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm text-slate-400">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
