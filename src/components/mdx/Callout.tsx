import { AlertCircle, Lightbulb, Info, Zap, AlertTriangle } from 'lucide-react';

type CalloutType = 'dica' | 'atencao' | 'curiosidade' | 'erro-comum' | 'importante';

interface CalloutProps {
  type: CalloutType;
  children: React.ReactNode;
  title?: string;
}

const typeConfig = {
  dica: {
    icon: Lightbulb,
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    textColor: 'text-amber-300',
    iconColor: 'text-amber-400',
    label: 'Dica',
  },
  atencao: {
    icon: AlertTriangle,
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    textColor: 'text-orange-300',
    iconColor: 'text-orange-400',
    label: 'Atenção',
  },
  curiosidade: {
    icon: Info,
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    textColor: 'text-blue-300',
    iconColor: 'text-blue-400',
    label: 'Curiosidade',
  },
  'erro-comum': {
    icon: Zap,
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    textColor: 'text-red-300',
    iconColor: 'text-red-400',
    label: 'Erro comum',
  },
  importante: {
    icon: AlertCircle,
    bgColor: 'bg-rose-500/10',
    borderColor: 'border-rose-500/30',
    textColor: 'text-rose-300',
    iconColor: 'text-rose-400',
    label: 'Importante',
  },
};

export default function Callout({ type, children, title }: CalloutProps) {
  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={`my-6 rounded-lg border-l-4 p-4 ${
        config.bgColor
      } ${config.borderColor}`}
    >
      <div className="flex gap-3">
        <Icon className={`h-5 w-5 flex-shrink-0 mt-0.5 ${config.iconColor}`} />
        <div className="flex-1">
          <p className={`font-semibold ${config.textColor}`}>
            {title || config.label}
          </p>
          <div className="mt-1 text-slate-300">{children}</div>
        </div>
      </div>
    </div>
  );
}
