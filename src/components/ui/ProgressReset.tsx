import { useProgressStore } from '@/store/progress';

export default function ProgressReset() {
  const resetProgress = useProgressStore((state) => state.resetProgress);
  return <button type="button" onClick={() => { if (window.confirm('Zerar todo o progresso?')) resetProgress(); }} className="text-sm text-rose-300 hover:text-rose-200">Zerar progresso</button>;
}
