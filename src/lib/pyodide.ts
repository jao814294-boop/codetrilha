export async function loadPyodide() {
  const pyodideModule = await import('pyodide');
  return pyodideModule;
}

export async function runPythonCode(code: string) {
  const pyodide = await loadPyodide();

  if (!pyodide) {
    throw new Error('Pyodide não foi carregado.');
  }

  return `Resultado do código executado:\n${code}`;
}
