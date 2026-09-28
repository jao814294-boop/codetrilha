import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

interface Step {
  title: string;
  description: string;
  visual: string; // Placeholder para diagram/imagem
}

interface StepThroughProps {
  steps: Step[];
  title?: string;
}

export default function StepThrough({ steps, title }: StepThroughProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const step = steps[currentStep];
  const isFirst = currentStep === 0;
  const isLast = currentStep === steps.length - 1;

  return (
    <div className="my-6 rounded-lg border border-white/10 bg-slate-900/60 p-6">
      {title && <h3 className="mb-6 text-lg font-semibold text-white">{title}</h3>}

      <div className="mb-6 rounded-lg bg-slate-950/50 p-8 min-h-64 flex items-center justify-center">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-center"
        >
          <p className="text-sm text-slate-400 mb-4">
            Passo {currentStep + 1} de {steps.length}
          </p>
          <h4 className="text-xl font-semibold text-white mb-3">{step.title}</h4>
          <p className="text-slate-300 mb-4">{step.description}</p>
          <div className="rounded-lg bg-slate-800/50 p-4 font-mono text-sm text-cyan-300">
            {step.visual}
          </div>
        </motion.div>
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={isFirst}
          className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 font-medium text-white hover:bg-white/10 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="h-4 w-4" />
          Anterior
        </button>

        <button
          onClick={() => setCurrentStep(0)}
          className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 font-medium text-white hover:bg-white/10 transition"
        >
          <RotateCcw className="h-4 w-4" />
        </button>

        <button
          onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
          disabled={isLast}
          className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 font-medium text-white hover:bg-white/10 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Próximo
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-4 h-1 rounded-full bg-slate-800 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 to-violet-500"
          initial={{ width: 0 }}
          animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}
