import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { DashboardBottomRow } from '../widgets/DashboardBottomRow';

export function LearningHubContent() {
  const { searchQuery } = useOutletContext() || { searchQuery: '' };

  return (
    <div className="learning-hub-container">
      <header className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between text-left">
        <div className="w-full">
          <h1 className="text-[40px] font-semibold text-[var(--text-primary)] tracking-[-1.5px] leading-[1.2] mb-1">
            Learning Hub
          </h1>
        </div>
      </header>

      <DashboardBottomRow searchQuery={searchQuery} />
    </div>
  );
}
