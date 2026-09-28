import { useState } from 'react';
import { Play, RotateCcw } from 'lucide-react';

interface PlaygroundProps {
  defaultCode?: string;
  description?: string;
}

export default function Playground({
  defaultCode = 'print("Olá, mundo!")',
  description,
}: PlaygroundProps) {
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = async () => {
    setIsRunning(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 300));
      // Placeholder para Pyodide
      setOutput('Código executado!');
    } finally {
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    setCode(defaultCode);
    setOutput('');
  };

  return (
    <div className="my-6 rounded-lg border border-white/10 bg-slate-900/60 p-4 space-y-4">
      {description && <p className="text-sm text-slate-400">{description}</p>}

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full h-32 rounded-lg bg-slate-950 border border-white/10 p-3 font-mono text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
        spellCheck="false"
      />

      <div className="flex gap-3">
        <button
          onClick={handleRun}
          disabled={isRunning}
          className="flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 font-medium text-slate-950 hover:bg-cyan-400 transition disabled:opacity-50"
        >
          <Play className="h-4 w-4" />
          Executar
        </button>
        <button
          onClick={handleReset}
          className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 font-medium text-white hover:bg-white/10 transition"
        >
          <RotateCcw className="h-4 w-4" />
          Resetar
        </button>
      </div>

      {output && (
        <div className="rounded-lg bg-slate-950/50 border border-emerald-500/30 p-3">
          <p className="text-xs text-slate-400 mb-2">Output:</p>
          <pre className="font-mono text-sm text-emerald-400">{output}</pre>
        </div>
      )}
    </div>
  );
}
