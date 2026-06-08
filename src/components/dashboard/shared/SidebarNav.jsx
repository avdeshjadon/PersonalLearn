import React from 'react';
import { LayoutDashboard, BookOpen, Bookmark, Zap, BarChart2, Settings, Plus, GraduationCap, CheckSquare } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';

export function SidebarNav({ isOpen, onClose, onOpenTaskModal }) {
  const navigate = useNavigate();

  const navItems = [
    { icon: <LayoutDashboard size={18} />, label: 'Overview', path: '/' },
    { icon: <CheckSquare size={18} />, label: 'Tasks', path: '/tasks' },
    { icon: <BookOpen size={18} />, label: 'Learning Hub', path: '/learning-hub' },
    { icon: <Bookmark size={18} />, label: 'Bookmarks', path: '/bookmarks' },
    { icon: <Zap size={18} />, label: 'Flashcards', path: '/flashcards' },
    { icon: <BarChart2 size={18} />, label: 'Analytics', path: '/analytics' },
    { icon: <Settings size={18} />, label: 'Settings', path: '/settings' },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      <div 
        className={`sidebar-backdrop ${isOpen ? 'show' : ''}`} 
        onClick={onClose}
      />
      
      <aside className={`sidebar-nav ${isOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-brand">
          <div className="brand-logo-purple" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              width: '28px',
              height: '28px',
              backgroundColor: 'var(--accent-color)',
              WebkitMaskImage: 'url(/logo.svg)',
              maskImage: 'url(/logo.svg)',
              WebkitMaskSize: 'contain',
              maskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskPosition: 'center'
            }} />
          </div>
          <h2 style={{ color: 'var(--accent-color)', marginLeft: '8px', fontSize: '20px', fontWeight: '800', letterSpacing: '-0.5px' }}>P-Learn</h2>
        </div>

        <button className="register-btn" onClick={() => { onOpenTaskModal(); onClose(); }}>
          Create Task <Plus size={16} />
        </button>

        <div className="nav-section">
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink 
                  to={item.path} 
                  className={({ isActive }) => `nav-link-purple ${isActive ? 'active' : ''}`}
                  end={item.path === '/'}
                  onClick={onClose} // close sidebar on click in mobile
                >
                  <div className="nav-icon-wrap">{item.icon}</div>
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
