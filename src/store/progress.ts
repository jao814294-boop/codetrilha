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
  addXp: (amount: number) => void;
  toggleStreak: () => void;
  completeLesson: (lessonId: string) => void;
  setLastLesson: (lessonId: string) => void;
  completeQuiz: (quizId: string) => void;
  setThemePreference: (theme: 'dark' | 'light') => void;
  addNotifyComingSoon: (moduleId: string) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  getModuleProgress: (moduleId: string, totalLessons: number) => number;
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      xp: 0,
      streak: 0,
      completedLessons: [],
      lastLesson: null,
      completedQuizzes: {},
      themePreference: 'dark',
      notifyComingSoon: [],
      addXp: (amount) => set((state) => ({ xp: state.xp + amount })),
      toggleStreak: () => set((state) => ({ streak: state.streak + 1 })),
      completeLesson: (lessonId) =>
        set((state) => ({
          completedLessons: state.completedLessons.includes(lessonId)
            ? state.completedLessons
            : [...state.completedLessons, lessonId],
        })),
      setLastLesson: (lessonId) => set({ lastLesson: lessonId }),
      completeQuiz: (quizId) =>
        set((state) => ({
          completedQuizzes: {
            ...state.completedQuizzes,
            [quizId]: true,
          },
        })),
      setThemePreference: (theme) => set({ themePreference: theme }),
      addNotifyComingSoon: (moduleId) =>
        set((state) => ({
          notifyComingSoon: state.notifyComingSoon.includes(moduleId)
            ? state.notifyComingSoon
            : [...state.notifyComingSoon, moduleId],
        })),
      isLessonCompleted: (lessonId) => {
        return get().completedLessons.includes(lessonId);
      },
      getModuleProgress: (moduleId, totalLessons) => {
        const state = get();
        const completed = state.completedLessons.filter((id) => id.startsWith(moduleId)).length;
        return totalLessons > 0 ? Math.round((completed / totalLessons) * 100) : 0;
      },
    }),
    {
      name: 'codetrilha-progress',
    },
  ),
);

export default useProgressStore;
