import type { ModuleConfig } from '../types';

export const pythonModule: ModuleConfig = {
  id: 'python',
  nome: 'Python',
  descricao: 'Fundamentos da lógica de programação, variáveis, estruturas de controle, funções e projetos práticos.',
  cor: '#3776AB',
  icone: 'python',
  status: 'available',
  trilha: [
    {
      titulo: 'Primeiros passos',
      aulas: [
        { id: 'intro', titulo: 'Introdução ao Python', slug: 'introducao-ao-python' },
        { id: 'variaveis', titulo: 'Variáveis e tipos', slug: 'variaveis-e-tipos' },
        { id: 'operadores', titulo: 'Operadores e expressões', slug: 'operadores-e-expressoes' },
      ],
    },
    {
      titulo: 'Controle e funções',
      aulas: [
        { id: 'condicionais', titulo: 'Condicionais', slug: 'condicionais' },
        { id: 'loops', titulo: 'Laços de repetição', slug: 'lacos-de-repeticao' },
        { id: 'funcoes', titulo: 'Funções e módulos', slug: 'funcoes-e-modulos' },
      ],
    },
  ],
};

export default pythonModule;
