import { AnimatedCounter } from './AnimatedCounter';
import modules from '@/modules';

function countLessons() {
  const pythonModule = modules.find((m) => m.id === 'python');
  if (!pythonModule) return 0;
  return pythonModule.trilha.reduce((acc, section) => acc + section.aulas.length, 0);
}

function countExercises() {
  // Placeholder: será lido dos arquivos de exercícios quando existirem
  return 24;
}

export default function Stats() {
  const lessonCount = countLessons();
  const exerciseCount = countExercises();
  const moduleCount = modules.filter((m) => m.status === 'available').length;

  return (
    <section className="border-y border-white/10 bg-slate-900/40 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatedCounter from={0} to={lessonCount} label="Aulas" />
          <AnimatedCounter from={0} to={exerciseCount} label="Exercícios" />
          <AnimatedCounter from={0} to={moduleCount} label="Módulos" />
          <div className="text-center">
            <p className="font-display text-3xl font-bold text-white sm:text-4xl">100%</p>
            <p className="text-sm text-slate-400">Gratuito</p>
          </div>
        </div>
      </div>
    </section>
  );
}
