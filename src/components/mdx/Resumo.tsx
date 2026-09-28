import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface ResumoProps {
  pontos: string[];
  titulo?: string;
}

export default function Resumo({ pontos, titulo = 'Resumo da aula' }: ResumoProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="my-6 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-6">
      <h3 className="mb-4 text-lg font-semibold text-cyan-300 flex items-center gap-2">
        <CheckCircle2 className="h-5 w-5" />
        {titulo}
      </h3>

      <motion.ul
        className="space-y-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {pontos.map((ponto, idx) => (
          <motion.li
            key={idx}
            className="flex items-start gap-3 text-slate-300"
            variants={itemVariants}
          >
            <span className="mt-1 block h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0" />
            <span>{ponto}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
