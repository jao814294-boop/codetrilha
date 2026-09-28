import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
      <h1 className="font-display text-4xl font-bold text-white">404</h1>
      <p className="mt-3 text-slate-300">Essa página ainda não existe no CodeTrilha.</p>
      <Link to="/" className="mt-6 inline-flex rounded-full bg-cyan-500 px-5 py-3 font-medium text-slate-950">
        Voltar ao início
      </Link>
    </section>
  );
}
