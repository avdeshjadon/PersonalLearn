import React, { useState } from 'react';
import { SidebarNav } from '../features/dashboard/components/shared/SidebarNav';
import { Search, Menu } from 'lucide-react';
import { Outlet, useLocation } from 'react-router-dom';
import { CreateTaskModal } from '../features/dashboard/components/shared/CreateTaskModal';
import '../styles/Dashboard.css';

export function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const isLearningHub = location.pathname === '/learning-hub';

  return (
    <div className="dashboard-layout">
      <SidebarNav 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        onOpenTaskModal={() => setIsTaskModalOpen(true)}
      />
      
      <main className="dashboard-main flex flex-col min-h-screen">
        {/* Top Header - Always shown on mobile, conditional on desktop */}
        <header className={`dashboard-header ${!isLearningHub ? 'mobile-only-header' : ''}`}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, maxWidth: '100%' }}>
            <button 
              className="mobile-menu-btn" 
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
            {isLearningHub && (
              <div className="search-bar-wrapper" style={{ width: '100%' }}>
                <div className="search-bar" style={{ maxWidth: '100%' }}>
                  <Search size={18} style={{ color: 'var(--text-secondary)' }} />
                  <input 
                    type="text" 
                    placeholder="Search notes, topics..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            )}
            {!isLearningHub && (
              <div className="mobile-page-title">
                {location.pathname === '/' ? 'Overview' : 
                 location.pathname.slice(1).charAt(0).toUpperCase() + location.pathname.slice(2)}
              </div>
            )}
          </div>
          
          <div className="header-actions">
            {/* Empty space for future actions */}
          </div>
        </header>

        {/* Content Area */}
        <div className="dashboard-content flex-1">
          <Outlet context={{ searchQuery }} />
        </div>

        {/* Footer */}
        <footer className="w-full text-center py-6 mt-auto text-[14px] font-medium text-[var(--text-secondary)]">
          Made by Avdesh for Avdesh
        </footer>
      </main>
      <CreateTaskModal isOpen={isTaskModalOpen} onClose={() => setIsTaskModalOpen(false)} />
    </div>
  );
}
