import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    question: 'É gratuito mesmo?',
    answer: 'Sim! CodeTrilha é 100% gratuito e sempre será. Acreditamos que educação em programação deve ser acessível para todos.',
  },
  {
    question: 'Preciso instalar algo?',
    answer: 'Não. Tudo roda no seu navegador. Python executável via Pyodide, editor Monaco integrado, tudo funciona sem downloads ou instalações.',
  },
  {
    question: 'Serve para iniciantes?',
    answer: 'Perfeito! As trilhas começam do zero, com conceitos fundamentais explicados de forma clara e prática. Você pode começar agora mesmo.',
  },
  {
    question: 'Meu progresso fica salvo?',
    answer: 'Sim. Seu XP, streaks, aulas completadas e preferências são salvos localmente no navegador via localStorage.',
  },
  {
    question: 'Funciona no celular?',
    answer: 'Funciona totalmente. O design é responsivo de 360px a 1920px, e todos os recursos (editor, executor, exercícios) funcionam bem em dispositivos móveis.',
  },
  {
    question: 'Quando saem Flask e Django?',
    answer: 'Em breve! Os módulos estão reservados na trilha e você pode ver a preview. Novidades em breve no repositório do projeto.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Perguntas frequentes</h2>
          <p className="mt-2 text-slate-400">Tudo que você precisa saber</p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="rounded-lg border border-white/10 bg-white/5"
              initial={false}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-white/[0.08]"
              >
                <span className="font-medium text-white">{item.question}</span>
                <ChevronDown
                  className="h-5 w-5 text-slate-400 transition"
                  style={{
                    transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/10 px-5 py-4 text-slate-400">{item.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
