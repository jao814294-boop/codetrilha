import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ProgressState = {
  xp: number;
  streak: number;
  completedLessons: string[];
  themePreference: 'dark' | 'light';
  addXp: (amount: number) => void;
  toggleStreak: () => void;
  completeLesson: (lessonId: string) => void;
  setThemePreference: (theme: 'dark' | 'light') => void;
};

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      xp: 0,
      streak: 0,
      completedLessons: [],
      themePreference: 'dark',
      addXp: (amount) => set((state) => ({ xp: state.xp + amount })),
      toggleStreak: () => set((state) => ({ streak: state.streak + 1 })),
      completeLesson: (lessonId) =>
        set((state) => ({
          completedLessons: state.completedLessons.includes(lessonId)
            ? state.completedLessons
            : [...state.completedLessons, lessonId],
        })),
      setThemePreference: (theme) => set({ themePreference: theme }),
    }),
    {
      name: 'codetrilha-progress',
    },
  ),
);

export default useProgressStore;
