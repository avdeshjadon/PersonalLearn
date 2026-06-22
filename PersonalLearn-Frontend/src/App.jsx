import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Navigate } from 'react-router-dom';
import { useTheme } from './hooks';

const Dashboard = lazy(() => import('./pages/DashboardPage').then(m => ({ default: m.Dashboard })));
const NotesApp = lazy(() => import('./pages/NotesApp'));

const OverviewContent = lazy(() => import('./features/dashboard/tabs/OverviewTab').then(m => ({ default: m.OverviewContent })));
const LearningHubContent = lazy(() => import('./features/dashboard/tabs/LearningHubTab').then(m => ({ default: m.LearningHubContent })));
const SettingsContent = lazy(() => import('./features/dashboard/tabs/SettingsTab').then(m => ({ default: m.SettingsContent })));
const TasksContent = lazy(() => import('./features/dashboard/tabs/TasksTab').then(m => ({ default: m.TasksContent })));
const BookmarksContent = lazy(() => import('./features/dashboard/tabs/BookmarksTab').then(m => ({ default: m.BookmarksContent })));
const FlashcardsContent = lazy(() => import('./features/dashboard/tabs/FlashcardsTab').then(m => ({ default: m.FlashcardsContent })));
const AnalyticsContent = lazy(() => import('./features/dashboard/tabs/AnalyticsTab').then(m => ({ default: m.AnalyticsContent })));

function Loader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', background: 'var(--bg-app)', color: 'var(--text-primary)' }}>
      <i className="fa-solid fa-circle-notch fa-spin fa-2x"></i>
    </div>
  );
}

function LearningRoute() {
  const { topic } = useParams();
  
  useEffect(() => {
    if (topic) {
      localStorage.setItem("currentFolder", topic);
    }
  }, [topic]);

  return <NotesApp topic={topic} />;
}

function App() {
  useTheme(); // ensure body fades in

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<OverviewContent />} />
            <Route path="learning-hub" element={<LearningHubContent />} />
            <Route path="bookmarks" element={<BookmarksContent />} />
            <Route path="flashcards" element={<FlashcardsContent />} />
            <Route path="analytics" element={<AnalyticsContent />} />
            <Route path="settings" element={<SettingsContent />} />
            <Route path="tasks" element={<TasksContent />} />
          </Route>
          <Route path="/learning/:topic" element={<LearningRoute />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
