import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { DashboardBottomRow } from './DashboardBottomRow';

export function LearningHubContent() {
  const { searchQuery } = useOutletContext() || { searchQuery: '' };

  return (
    <div className="learning-hub-container">
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ 
          fontSize: '28px', 
          fontWeight: '700', 
          color: 'var(--text-primary)', 
          margin: 0
        }}>
          Learning Hub
        </h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: '8px', fontSize: '15px' }}>
          Select a topic below to jump back into your notes.
        </p>
      </div>

      <DashboardBottomRow searchQuery={searchQuery} />
    </div>
  );
}
