import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ProgressState = {
  xp: number;
  streak: number;
  completedLessons: string[];
  lastLesson: string | null;
  completedQuizzes: Record<string, boolean>;
  themePreference: 'dark' | 'light';
  notifyComingSoon: string[];
  exerciseAttempts: Record<string, number>;
  solvedExercises: string[];
  exerciseHintUsage: Record<string, number>;
  exerciseXp: Record<string, number>;
  lastExerciseDate: string | null;
  addXp: (amount: number) => void;
  toggleStreak: () => void;
  completeLesson: (lessonId: string) => void;
  setLastLesson: (lessonId: string) => void;
  completeQuiz: (quizId: string) => void;
  setThemePreference: (theme: 'dark' | 'light') => void;
  addNotifyComingSoon: (moduleId: string) => void;
  recordExerciseAttempt: (exerciseId: string) => void;
  solveExercise: (exerciseId: string, earnedXp: number) => void;
  useExerciseHint: (exerciseId: string) => void;
  resetProgress: () => void;
  isLessonCompleted: (lessonId: string) => boolean;
  getModuleProgress: (moduleId: string, totalLessons: number) => number;
};

const initialState = {
  xp: 0,
  streak: 0,
  completedLessons: [],
  lastLesson: null,
  completedQuizzes: {},
  themePreference: 'dark' as const,
  notifyComingSoon: [],
  exerciseAttempts: {},
  solvedExercises: [],
  exerciseHintUsage: {},
  exerciseXp: {},
  lastExerciseDate: null,
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      ...initialState,
      addXp: (amount) => set((state) => ({ xp: Math.max(0, state.xp + amount) })),
      toggleStreak: () => set((state) => ({ streak: state.streak + 1 })),
      completeLesson: (lessonId) => set((state) => ({ completedLessons: state.completedLessons.includes(lessonId) ? state.completedLessons : [...state.completedLessons, lessonId] })),
      setLastLesson: (lessonId) => set({ lastLesson: lessonId }),
      completeQuiz: (quizId) => set((state) => ({ completedQuizzes: { ...state.completedQuizzes, [quizId]: true } })),
      setThemePreference: (theme) => set({ themePreference: theme }),
      addNotifyComingSoon: (moduleId) => set((state) => ({ notifyComingSoon: state.notifyComingSoon.includes(moduleId) ? state.notifyComingSoon : [...state.notifyComingSoon, moduleId] })),
      recordExerciseAttempt: (exerciseId) => set((state) => ({ exerciseAttempts: { ...state.exerciseAttempts, [exerciseId]: (state.exerciseAttempts[exerciseId] ?? 0) + 1 } })),
      solveExercise: (exerciseId, earnedXp) => set((state) => {
        if (state.solvedExercises.includes(exerciseId)) return state;
        const today = new Date().toISOString().slice(0, 10);
        const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
        const nextStreak = state.lastExerciseDate === yesterday ? state.streak + 1 : state.lastExerciseDate === today ? state.streak : 1;
        return { solvedExercises: [...state.solvedExercises, exerciseId], xp: state.xp + earnedXp, exerciseXp: { ...state.exerciseXp, [exerciseId]: earnedXp }, streak: nextStreak, lastExerciseDate: today };
      }),
      useExerciseHint: (exerciseId) => set((state) => ({ exerciseHintUsage: { ...state.exerciseHintUsage, [exerciseId]: (state.exerciseHintUsage[exerciseId] ?? 0) + 1 }, xp: Math.max(0, state.xp - 2) })),
      resetProgress: () => set(initialState),
      isLessonCompleted: (lessonId) => get().completedLessons.includes(lessonId),
      getModuleProgress: (moduleId, totalLessons) => {
        const completed = get().completedLessons.filter((id) => id.startsWith(moduleId)).length;
        return totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;
      },
    }),
    { name: 'codetrilha-progress' },
  ),
);

export default useProgressStore;
