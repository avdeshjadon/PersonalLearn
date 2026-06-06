import React, { useState } from 'react';
import { SidebarNav } from './SidebarNav';
import { Search, Menu } from 'lucide-react';
import { Outlet, useLocation } from 'react-router-dom';
import './Dashboard.css';

export function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const isLearningHub = location.pathname === '/learning-hub';

  return (
    <div className="dashboard-layout">
      <SidebarNav isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <main className="dashboard-main">
        {/* Top Header - Only shown in Learning Hub */}
        {isLearningHub && (
          <header className="dashboard-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: 1, maxWidth: '100%' }}>
              <button 
                className="mobile-menu-btn" 
                onClick={() => setIsSidebarOpen(true)}
                aria-label="Open Menu"
              >
                <Menu size={24} />
              </button>
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
            </div>
            
            <div className="header-actions">
              {/* Removed bell icon and profile as requested */}
            </div>
          </header>
        )}

        {/* Content Area */}
        <div className="dashboard-content">
          <Outlet context={{ searchQuery }} />
        </div>
      </main>
    </div>
  );
}
