export type ModuleStatus = 'available' | 'coming-soon';

export type ModuleLesson = {
  id: string;
  titulo: string;
  slug: string;
};

export type ModuleSection = {
  titulo: string;
  aulas: ModuleLesson[];
};

export type ModuleConfig = {
  id: string;
  nome: string;
  descricao: string;
  cor: string;
  icone: string;
  status: ModuleStatus;
  trilha: ModuleSection[];
};
