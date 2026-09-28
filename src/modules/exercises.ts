export type ExerciseType = 'codigo' | 'completar' | 'bug' | 'multipla-escolha' | 'ordenar' | 'prever-saida';
export type Difficulty = 'facil' | 'medio' | 'dificil';
export type TestCase = { entrada: string; esperado: string; oculto?: boolean };
export type ExerciseOption = { texto: string; correta: boolean; explicacao?: string };
export type Exercise = {
  id: string; tipo: ExerciseType; titulo: string; enunciado: string; topico: string;
  dificuldade: Difficulty; xp: number; dicas: string[]; solucao: string; tags: string[];
  aulaRelacionada?: string; starterCode?: string; testes?: TestCase[]; nomeFuncao?: string;
  alternativas?: ExerciseOption[]; linhas?: string[]; ordemCorreta?: string[]; saidaEsperada?: string;
};
