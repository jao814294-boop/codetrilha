import { useEffect, useState } from 'react';

const EXAMPLES = [
  {
    title: 'Função',
    code: 'def somar(a, b):\n  return a + b\n\nprint(somar(10, 5))',
    output: '15',
  },
  {
    title: 'List Comprehension',
    code: 'numeros = [1, 2, 3, 4, 5]\npares = [x for x in numeros if x % 2 == 0]\nprint(pares)',
    output: '[2, 4]',
  },
  {
    title: 'Loop',
    code: 'for i in range(1, 4):\n  print(f"Iteração {i}")',
    output: 'Iteração 1\nIteração 2\nIteração 3',
  },
];

type TerminalCharacter = {
  char: string;
  visible: boolean;
};

export default function Terminal() {
  const [exampleIndex, setExampleIndex] = useState(0);
  const [displayedCode, setDisplayedCode] = useState<TerminalCharacter[]>([]);
  const [showOutput, setShowOutput] = useState(false);

  const currentExample = EXAMPLES[exampleIndex];
  const codeChars = currentExample.code.split('');

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const typeSpeed = prefersReduced ? 0 : 30;
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex < codeChars.length) {
        setDisplayedCode((prev) => [
          ...prev,
          { char: codeChars[charIndex], visible: true },
        ]);
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => setShowOutput(true), 300);
      }
    }, typeSpeed);

    return () => clearInterval(typeInterval);
  }, [exampleIndex, codeChars]);

  const handleNextExample = () => {
    setExampleIndex((prev) => (prev + 1) % EXAMPLES.length);
    setDisplayedCode([]);
    setShowOutput(false);
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-glow">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-rose-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>
        <div className="flex gap-2">
          {EXAMPLES.map((example, idx) => (
            <button
              key={idx}
              onClick={() => {
                setExampleIndex(idx);
                setDisplayedCode([]);
                setShowOutput(false);
              }}
              className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                idx === exampleIndex
                  ? 'bg-cyan-500/30 text-cyan-200'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {example.title}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4 rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950 p-4">
        <div className="min-h-[120px] font-mono text-sm text-slate-200">
          {displayedCode.map((item, idx) => (
            <span key={idx} className={item.visible ? 'text-cyan-300' : 'opacity-0'}>
              {item.char === '\n' ? <br /> : item.char}
            </span>
          ))}
          {displayedCode.length > 0 && (
            <span className="animate-pulse text-cyan-300">▌</span>
          )}
        </div>

        {showOutput && (
          <div className="space-y-1 border-t border-white/10 pt-4">
            <p className="text-xs text-slate-400">Output:</p>
            <pre className="whitespace-pre-wrap text-sm text-emerald-400">
              {currentExample.output}
            </pre>
          </div>
        )}
      </div>

      <button
        onClick={handleNextExample}
        className="mt-4 w-full rounded-lg border border-cyan-400/40 bg-cyan-500/10 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-500/20"
      >
        Próximo exemplo
      </button>
    </div>
  );
}
