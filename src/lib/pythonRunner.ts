export type WorkerRequest = { id: number; code: string; input?: string };
export type WorkerResponse = { id: number; stdout: string; stderr: string; error?: string };

let worker: Worker | null = null;
let sequence = 0;

function makeWorker() {
  const source = `
    let pyodidePromise;
    self.onmessage = async (event) => {
      const { id, code, input = '' } = event.data;
      try {
        if (!pyodidePromise) {
          importScripts('https://cdn.jsdelivr.net/pyodide/v0.27.0/full/pyodide.js');
          pyodidePromise = loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.27.0/full/' });
        }
        const pyodide = await pyodidePromise;
        const output = [];
        pyodide.setStdout({ batched: (value) => output.push(value) });
        pyodide.setStderr({ batched: (value) => output.push(value) });
        pyodide.globals.set('___codetrilha_input', input);
        const wrapped = "import builtins\\nbuiltins.input = lambda prompt='': ___codetrilha_input\\n" + ${JSON.stringify('code')};
        await pyodide.runPythonAsync(wrapped.replace(${JSON.stringify('code')}, code));
        self.postMessage({ id, stdout: output.join('\\n'), stderr: '' });
      } catch (error) {
        self.postMessage({ id, stdout: '', stderr: error?.message || String(error), error: 'Erro ao executar o código.' });
      }
    };
  `;
  return new Worker(URL.createObjectURL(new Blob([source], { type: 'application/javascript' })));
}

export function runPython(code: string, input = '', timeout = 5000): Promise<WorkerResponse> {
  worker ??= makeWorker();
  const id = ++sequence;
  return new Promise((resolve) => {
    const timer = window.setTimeout(() => { worker?.terminate(); worker = null; resolve({ id, stdout: '', stderr: 'Tempo limite excedido. Verifique se há um loop infinito.', error: 'timeout' }); }, timeout);
    const current = worker!;
    current.onmessage = (event: MessageEvent<WorkerResponse>) => { if (event.data.id === id) { window.clearTimeout(timer); resolve(event.data); } };
    current.onerror = () => { window.clearTimeout(timer); worker?.terminate(); worker = null; resolve({ id, stdout: '', stderr: 'Não foi possível iniciar o Python.', error: 'worker' }); };
    current.postMessage({ id, code, input } satisfies WorkerRequest);
  });
}
