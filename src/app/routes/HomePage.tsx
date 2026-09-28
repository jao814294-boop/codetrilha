import { ArrowRight, BookOpen, Code2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <section className="space-y-10 py-8">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow sm:p-8 lg:p-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
              Fundamentos para construir
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Aprenda programação com trilhas claras, visuais bonitos e desafios reais.
            </h1>
            <p className="max-w-xl text-base text-slate-300 sm:text-lg">
              A plataforma de ensino que combina aulas em português, exercícios guiados e feedback em tempo real para iniciantes e intermediários.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/python" className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-400">
                Explorar trilha <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/python/exercicios" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-medium text-white transition hover:border-cyan-400/60">
                Ver exercícios
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
            <div className="rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-slate-400">python</span>
              </div>
              <div className="space-y-3 font-mono text-sm text-slate-200">
                <p className="text-cyan-300"># variáveis e lógica</p>
                <p>nome = "Ana"</p>
                <p>idade = 25</p>
                <p>print(f"Olá, {nome}!")</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          { icon: Code2, title: 'Aulas bonitas', text: 'Conteúdo bem estruturado em português e visual moderno.' },
          { icon: BookOpen, title: 'Exercícios práticos', text: 'Cada tópico vira desafio e feedback diretos.' },
          { icon: Sparkles, title: 'Progresso real', text: 'XP, streak e preferências salvos localmente.' },
        ].map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="mb-4 inline-flex rounded-xl bg-cyan-500/10 p-3 text-cyan-300">
              <Icon className="h-5 w-5" />
            </div>
            <h2 className="mb-2 text-lg font-semibold text-white">{title}</h2>
            <p className="text-sm text-slate-300">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
