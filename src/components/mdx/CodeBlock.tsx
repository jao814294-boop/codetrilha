import { useState } from 'react';
import { Copy, Check, Play } from 'lucide-react';
import { motion } from 'framer-motion';

interface CodeBlockProps {
  children: string;
  language?: string;
  filename?: string;
  highlight?: number[];
  showLineNumbers?: boolean;
  executable?: boolean;
}

export default function CodeBlock({
  children,
  language = 'python',
  filename,
  highlight = [],
  showLineNumbers = true,
  executable = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleExecute = async () => {
    setIsRunning(true);
    try {
      // Placeholder: Pyodide será integrado
      await new Promise((resolve) => setTimeout(resolve, 500));
      setOutput('Código executado com sucesso!');
    } catch (error) {
      setOutput(`Erro: ${error instanceof Error ? error.message : 'Erro desconhecido'}`);
    } finally {
      setIsRunning(false);
    }
  };

  const lines = children.split('\n');

  return (
    <div className="my-6 rounded-lg border border-white/10 bg-slate-900/60 overflow-hidden">
      {filename && (
        <div className="flex items-center justify-between border-b border-white/10 bg-slate-950/80 px-4 py-2">
          <span className="text-xs font-mono text-slate-400">{filename}</span>
          <span className="text-xs text-slate-500">{language}</span>
        </div>
      )}

      <div className="relative">
        <pre className="overflow-x-auto p-4 font-mono text-sm">
          <code>
            {lines.map((line, idx) => {
              const lineNum = idx + 1;
              const isHighlighted = highlight.includes(lineNum);
              return (
                <div
                  key={idx}
                  className={`flex gap-4 ${
                    isHighlighted ? 'bg-cyan-500/10' : ''
                  }`}
                >
                  {showLineNumbers && (
                    <span className="inline-block w-8 text-right text-slate-500">
                      {lineNum}
                    </span>
                  )}
                  <span className="flex-1 text-slate-200">{line}</span>
                </div>
              );
            })}
          </code>
        </pre>

        <div className="absolute right-2 top-2 flex gap-2">
          <motion.button
            onClick={handleCopy}
            whileTap={{ scale: 0.95 }}
            className="rounded-lg bg-slate-800/80 p-2 text-slate-300 hover:bg-slate-700 hover:text-white transition"
            title="Copiar"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </motion.button>
          {executable && (
            <button
              onClick={handleExecute}
              disabled={isRunning}
              className="rounded-lg bg-cyan-500/20 p-2 text-cyan-300 hover:bg-cyan-500/30 transition disabled:opacity-50"
              title="Executar"
            >
              <Play className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {output && (
        <div className="border-t border-white/10 bg-slate-950/50 p-4">
          <p className="text-xs text-slate-400 mb-2">Output:</p>
          <pre className="font-mono text-sm text-emerald-400 overflow-x-auto">{output}</pre>
        </div>
      )}
    </div>
  );
}
