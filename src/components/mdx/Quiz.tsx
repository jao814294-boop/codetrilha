import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

interface QuizQuestion {
  id: string;
  question: string;
  options: Array<{ text: string; correct: boolean }>,
  explanation: string;
}

interface QuizProps {
  questions: QuizQuestion[];
}

export default function Quiz({ questions }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentIndex];
  const isCorrect = selectedAnswer !== null && currentQuestion.options[selectedAnswer]?.correct;

  const handleAnswer = (index: number) => {
    if (answered) return;
    setSelectedAnswer(index);
    setAnswered(true);
    if (currentQuestion.options[index]?.correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    }
  };

  const isComplete = currentIndex === questions.length - 1 && answered;

  return (
    <div className="my-6 rounded-lg border border-white/10 bg-slate-900/60 p-6">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-slate-400">
          Pergunta {currentIndex + 1} de {questions.length}
        </p>
        <div className="h-2 w-32 rounded-full bg-slate-800 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 to-violet-500"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <h3 className="mb-6 text-lg font-semibold text-white">{currentQuestion.question}</h3>

      <div className="space-y-3 mb-6">
        {currentQuestion.options.map((option, idx) => (
          <motion.button
            key={idx}
            onClick={() => handleAnswer(idx)}
            disabled={answered}
            className={`w-full text-left p-4 rounded-lg border-2 transition ${
              selectedAnswer === idx
                ? isCorrect
                  ? 'border-emerald-500/60 bg-emerald-500/10 text-emerald-200'
                  : 'border-red-500/60 bg-red-500/10 text-red-200'
                : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20'
            }`}
            whileHover={!answered ? { x: 4 } : {}}
          >
            <div className="flex items-center justify-between">
              <span>{option.text}</span>
              {answered && selectedAnswer === idx && (
                isCorrect ? (
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-400" />
                )
              )}
            </div>
          </motion.button>
        ))}
      </div>

      {answered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mb-6 p-4 rounded-lg ${
            isCorrect
              ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-200'
              : 'bg-red-500/10 border border-red-500/30 text-red-200'
          }`}
        >
          <p className="font-semibold mb-2">
            {isCorrect ? '✓ Correto!' : '✗ Resposta incorreta'}
          </p>
          <p className="text-sm">{currentQuestion.explanation}</p>
        </motion.div>
      )}

      {!isComplete && answered && (
        <button
          onClick={handleNext}
          className="w-full rounded-lg bg-cyan-500 px-4 py-2 font-medium text-slate-950 hover:bg-cyan-400 transition"
        >
          Próxima pergunta
        </button>
      )}

      {isComplete && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-6 rounded-lg bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-cyan-500/30"
        >
          <p className="text-3xl font-bold text-white mb-2">
            {score}/{questions.length}
          </p>
          <p className="text-slate-300">
            {score === questions.length
              ? 'Perfeito! Você acertou tudo!'
              : `Ótimo! Você acertou ${score} de ${questions.length}`}
          </p>
        </motion.div>
      )}
    </div>
  );
}
