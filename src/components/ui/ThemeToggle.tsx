import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/app/providers/ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
      onClick={toggleTheme}
      className="inline-flex items-center justify-center rounded-full border border-border bg-surface/80 p-2 text-fg transition hover:border-cyan-400/60 hover:text-cyan-300"
    >
      {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
