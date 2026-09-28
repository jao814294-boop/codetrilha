import { motion } from 'framer-motion';
import { ArrowRight, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DesafioProps {
  id: string;
  titulo: string;
  descricao: string;
  modulo: string;
}

export default function Desafio({
  id,
  titulo,
  descricao,
  modulo,
}: DesafioProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="my-6 rounded-lg border-l-4 border-l-amber-500 bg-gradient-to-r from-amber-500/10 to-transparent p-6"
    >
      <div className="flex items-start gap-4">
        <Trophy className="h-6 w-6 text-amber-400 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-amber-300 mb-2">{titulo}</h3>
          <p className="text-slate-300 mb-4">{descricao}</p>
          <Link
            to={`/${modulo}/exercicios/${id}`}
            className="inline-flex items-center gap-2 rounded-lg bg-amber-500/20 px-4 py-2 font-medium text-amber-300 hover:bg-amber-500/30 transition"
          >
            Começar desafio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
