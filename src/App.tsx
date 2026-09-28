import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AppShell from './app/layouts/AppShell';
import ThemeProvider from './app/providers/ThemeProvider';

const HomePage = lazy(() => import('./app/routes/HomePage'));
const ModulePage = lazy(() => import('./app/routes/ModulePage'));
const LessonPage = lazy(() => import('./app/routes/LessonPage'));
const ExercisesPage = lazy(() => import('./app/routes/ExercisesPage'));
const ExercisePage = lazy(() => import('./app/routes/ExercisePage'));
const NotFoundPage = lazy(() => import('./app/routes/NotFoundPage'));

export default function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<div className="min-h-screen bg-slate-950 text-slate-50" /> }>
        <Routes>
          <Route element={<AppShell />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/:modulo" element={<ModulePage />} />
            <Route path="/:modulo/:aula" element={<LessonPage />} />
            <Route path="/:modulo/exercicios" element={<ExercisesPage />} />
            <Route path="/:modulo/exercicios/:id" element={<ExercisePage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}
