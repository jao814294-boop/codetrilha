import { useParams } from 'react-router-dom';

export default function LessonPage() {
  const { modulo, aula } = useParams();

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Aula</p>
      <h1 className="mt-2 font-display text-3xl font-bold text-white">{modulo}</h1>
      <p className="mt-3 text-slate-300">Página de aula em construção. O conteúdo será carregado por MDX na próxima etapa.</p>
      <pre className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-slate-950 p-4 text-sm text-cyan-200">
        {`slug: ${aula}`}
      </pre>
    </section>
  );
}
