import { motion } from 'framer-motion';
import {
  Code2,
  Zap,
  CheckCircle2,
  MessageSquare,
  Trophy,
  Search,
  Moon,
  Smartphone,
} from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Editor de código',
    description: 'Escreva, edite e execute código diretamente no navegador',
  },
  {
    icon: Zap,
    title: 'Python de verdade',
    description: 'Roda Pyodide para executar Python real sem instalar nada',
  },
  {
    icon: CheckCircle2,
    title: 'Exercícios automáticos',
    description: 'Testes imediatos validam seu código a cada submissão',
  },
  {
    icon: MessageSquare,
    title: 'Quizzes com feedback',
    description: 'Perguntas interativas com dicas e explicações',
  },
  {
    icon: Trophy,
    title: 'XP e streak',
    description: 'Ganhe pontos, mantenha sequências e acompanhe progresso',
  },
  {
    icon: Search,
    title: 'Busca rápida (Ctrl+K)',
    description: 'Encontre aulas, exercícios e recursos ao digitar',
  },
  {
    icon: Moon,
    title: 'Tema claro e escuro',
    description: 'Escolha o modo que respeita sua preferência do sistema',
  },
  {
    icon: Smartphone,
    title: 'Totalmente responsivo',
    description: 'Aprenda em desktop, tablet ou celular sem problemas',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
  hover: {
    y: -4,
    transition: { duration: 0.2 },
  },
};

export default function Features() {
  const isTouchDevice = () => {
    return () => false; // Placeholder; implementar detecção real se necessário
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Tudo que você precisa para aprender</h2>
          <p className="mt-2 text-slate-400">Ferramentas modernas e feedback contínuo em um só lugar</p>
        </div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="mb-4 inline-flex rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold text-white">{feature.title}</h3>
                <p className="text-sm text-slate-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
