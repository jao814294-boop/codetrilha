import type { ModuleConfig } from '../types';

export const flaskModule: ModuleConfig = {
  id: 'flask',
  nome: 'Flask',
  descricao: 'Futuro módulo para APIs e desenvolvimento web com Flask e Python.',
  cor: '#14B8A6',
  icone: 'flask',
  status: 'coming-soon',
  trilha: [
    {
      titulo: 'Em breve',
      aulas: [{ id: 'coming-soon', titulo: 'Em breve', slug: 'em-breve' }],
    },
  ],
};

export default flaskModule;
