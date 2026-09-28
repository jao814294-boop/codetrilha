import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GlossarioProps {
  termo: string;
  definicao: string;
  children?: React.ReactNode;
}

export default function Glossario({
  termo,
  definicao,
  children,
}: GlossarioProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={() => setShowTooltip(!showTooltip)}
        className="border-b-2 border-dotted border-cyan-400/60 text-cyan-300 hover:text-cyan-200 transition cursor-help"
      >
        {children || termo}
      </button>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 rounded-lg bg-slate-950 border border-white/20 p-3 text-sm text-slate-300 shadow-lg z-50 pointer-events-none"
          >
            <p className="font-semibold text-cyan-300 mb-1">{termo}</p>
            <p>{definicao}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
