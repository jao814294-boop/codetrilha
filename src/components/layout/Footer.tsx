import { GraduationCap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-module-python to-violet-500">
            <GraduationCap className="h-4 w-4 text-white" />
          </div>
          <span>CodeTrilha © 2026</span>
        </div>
        <p>Aprender programação com trilhas guiadas, exercícios e feedback contínuo.</p>
      </div>
    </footer>
  );
}
