import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Navigate } from 'react-router-dom';
import { Dashboard, OverviewContent, LearningHubContent, SettingsContent } from './components/dashboard';
import NotesApp from './NotesApp';
import { useTheme } from './hooks';

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
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<OverviewContent />} />
          <Route path="learning-hub" element={<LearningHubContent />} />
          <Route path="bookmarks" element={<div style={{padding: '40px'}}><h2>Bookmarks (Coming Soon)</h2></div>} />
          <Route path="flashcards" element={<div style={{padding: '40px'}}><h2>Flashcards (Coming Soon)</h2></div>} />
          <Route path="analytics" element={<div style={{padding: '40px'}}><h2>Analytics (Coming Soon)</h2></div>} />
          <Route path="settings" element={<SettingsContent />} />
        </Route>
        <Route path="/learning/:topic" element={<LearningRoute />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
