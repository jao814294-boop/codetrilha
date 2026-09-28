import { useCallback, useState } from 'react';
import { Play, RotateCcw } from 'lucide-react';
import dynamic from '@/lib/dynamic';

const MonacoEditor = dynamic(
  () => import('@monaco-editor/react').then((mod) => ({ default: mod.default })),
  {
    loading: () => (
      <div className="h-64 rounded-lg border border-white/10 bg-slate-950/50 animate-pulse" />
    ),
  }
);

const CODE_EXAMPLES = [
  {
    name: 'Olá mundo',
    code: 'print("Olá, CodeTrilha!")',
    expected: 'Olá, CodeTrilha!',
  },
  {
    name: 'Loop',
    code: 'for i in range(3):\n    print(f"Número: {i+1}")',
    expected: 'Número: 1\nNúmero: 2\nNúmero: 3',
  },
  {
    name: 'Função',
    code: 'def quadrado(x):\n    return x ** 2\n\nprint(quadrado(5))',
    expected: '25',
  },
];

export default function LiveDemo() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [code, setCode] = useState(CODE_EXAMPLES[0].code);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [hasError, setHasError] = useState(false);

  const activeExample = CODE_EXAMPLES[activeTabIndex];

  const handleTabChange = (index: number) => {
    setActiveTabIndex(index);
    setCode(CODE_EXAMPLES[index].code);
    setOutput('');
    setHasError(false);
  };

  const handleRun = useCallback(async () => {
    setIsRunning(true);
    setOutput('');
    setHasError(false);

    try {
      // Simular execução com delay; Pyodide será carregado sob demanda
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Placeholder: será integrado com Pyodide real
      setOutput(activeExample.expected);
    } catch (error) {
      setHasError(true);
      setOutput(`Erro: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    } finally {
      setIsRunning(false);
    }
  }, [activeExample]);

  const handleReset = () => {
    setCode(activeExample.code);
    setOutput('');
    setHasError(false);
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Experimente agora</h2>
          <p className="mt-2 text-slate-400">Edite e execute código Python em tempo real</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <div className="mb-4 flex gap-2 border-b border-white/10 pb-4">
            {CODE_EXAMPLES.map((example, idx) => (
              <button
                key={idx}
                onClick={() => handleTabChange(idx)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  idx === activeTabIndex
                    ? 'bg-cyan-500/20 text-cyan-300'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {example.name}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-white/10 bg-slate-950/50 p-4 font-mono text-sm">
              <pre className="whitespace-pre-wrap text-cyan-300">{code}</pre>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleRun}
                disabled={isRunning}
                className="flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 font-medium text-slate-950 transition hover:bg-cyan-400 disabled:opacity-60"
              >
                <Play className="h-4 w-4" />
                {isRunning ? 'Executando...' : 'Executar'}
              </button>
              <button
                onClick={handleReset}
                className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 font-medium text-white transition hover:bg-white/10"
              >
                <RotateCcw className="h-4 w-4" />
                Resetar
              </button>
            </div>

            {output && (
              <div
                className={`rounded-lg border p-4 font-mono text-sm ${
                  hasError
                    ? 'border-red-500/30 bg-red-500/10 text-red-300'
                    : 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
                }`}
              >
                <p className="text-xs text-slate-400">Output:</p>
                <pre className="mt-2 whitespace-pre-wrap">{output}</pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
