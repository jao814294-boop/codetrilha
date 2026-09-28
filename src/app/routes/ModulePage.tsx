import { useParams } from 'react-router-dom';
import modules from '@/modules';

export default function ModulePage() {
  const { modulo } = useParams();
  const module = modules.find((item) => item.id === modulo);

  if (!module) {
    return <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300">Módulo não encontrado.</div>;
  }

  return (
    <section className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Trilha</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-white">{module.nome}</h1>
        </div>
        <span className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
          {module.status}
        </span>
      </div>

      <p className="max-w-2xl text-slate-300">{module.descricao}</p>

      <div className="grid gap-4 md:grid-cols-2">
        {module.trilha.map((section) => (
          <div key={section.titulo} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
            <h2 className="mb-3 font-semibold text-white">{section.titulo}</h2>
            <ul className="space-y-2 text-sm text-slate-300">
              {section.aulas.map((aula) => (
                <li key={aula.id} className="rounded-xl border border-white/5 bg-white/5 px-3 py-2">
                  {aula.titulo}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
