import { useParams } from 'react-router-dom';

export default function ExercisePage() {
  const { modulo, id } = useParams();

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Exercício</p>
      <h1 className="mt-2 font-display text-3xl font-bold text-white">{modulo}</h1>
      <p className="mt-3 text-slate-300">Detalhe do exercício {id}. Aqui irá o editor, testes e execução com Pyodide.</p>
    </section>
  );
}
