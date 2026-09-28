import type { ModuleConfig } from '../types';

export const djangoModule: ModuleConfig = {
  id: 'django',
  nome: 'Django',
  descricao: 'Futuro módulo com apps, templates, ORM e autenticação no Django.',
  cor: '#0C4B33',
  icone: 'django',
  status: 'coming-soon',
  trilha: [
    {
      titulo: 'Em breve',
      aulas: [{ id: 'coming-soon', titulo: 'Em breve', slug: 'em-breve' }],
    },
  ],
};

export default djangoModule;
