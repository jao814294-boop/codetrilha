import type { Exercise } from '@/modules/exercises';
import pythonExercises from './python/exercises';

export function getExercises(moduleId: string): Exercise[] { return moduleId === 'python' ? pythonExercises : []; }
export function getExercise(moduleId: string, id: string) { return getExercises(moduleId).find((exercise) => exercise.id === id); }
