import React from 'react';
import { useTheme } from '../../hooks/useTheme';

export function SettingsContent() {
  const { isDark, toggleDark } = useTheme();

  return (
    <div className="settings-container" style={{ padding: '20px', maxWidth: '800px' }}>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ 
          fontSize: '36px', 
          fontWeight: '800', 
          color: 'var(--text-primary)', 
          margin: 0,
          letterSpacing: '-1px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          Settings
        </h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: '8px', fontSize: '16px' }}>
          Manage your dashboard preferences and account settings.
        </p>
      </div>

      <div className="settings-section" style={{ 
        backgroundColor: 'var(--bg-card)', 
        borderRadius: '16px', 
        border: '1px solid var(--border-color)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-sm)'
      }}>
        <div style={{ padding: '24px', borderBottom: '1px solid var(--border-color)' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>Appearance</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '4px' }}>Customize how P-Learn looks on your device.</p>
        </div>

        <div style={{ padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)', margin: 0 }}>Dark Mode</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', margin: '4px 0 0 0' }}>Toggle between light and dark themes.</p>
            </div>
          </div>

          {/* Custom Toggle Switch */}
          <button 
            onClick={toggleDark}
            style={{
              width: '56px',
              height: '32px',
              borderRadius: '16px',
              backgroundColor: isDark ? 'var(--accent-color)' : 'var(--border-color)',
              border: 'none',
              position: 'relative',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
            aria-label="Toggle Dark Mode"
          >
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: '#fff',
              position: 'absolute',
              top: '4px',
              left: isDark ? '28px' : '4px',
              transition: 'left 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }} />
          </button>
        </div>
      </div>
    </div>
  );
}
