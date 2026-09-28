import { Code2, GraduationCap, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../ui/ThemeToggle';

const navItems = [
  { label: 'Python', href: '/python' },
  { label: 'Flask', href: '/flask' },
  { label: 'Django', href: '/django' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 text-white">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-module-python to-violet-500 shadow-glow">
            <Code2 className="h-5 w-5" />
          </div>
          <div>
            <p className="font-display text-lg font-bold leading-none">CodeTrilha</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">aprenda fazendo</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} to={item.href} className="text-sm text-slate-300 transition hover:text-cyan-300">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Abrir menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
