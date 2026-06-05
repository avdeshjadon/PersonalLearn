import React, { useState, useEffect } from 'react';

export function OverviewContent() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: true 
    });
  };

  const getGreeting = () => {
    const hour = time.getHours();
    if (hour < 12) return 'Good Morning, Avdesh!';
    if (hour < 17) return 'Good Afternoon, Avdesh!';
    return 'Good Evening, Avdesh!';
  };

  return (
    <div className="overview-container">
      <div className="greeting-container" style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <h1 style={{ 
            fontSize: '42px', 
            fontWeight: '800', 
            color: 'var(--text-primary)', 
            margin: 0,
            letterSpacing: '-1.5px',
            lineHeight: '1.2'
          }}>
            {getGreeting()}
          </h1>
          <p style={{ color: 'var(--text-secondary)', marginTop: '8px', fontSize: '16px', fontWeight: '500' }}>
            Welcome back! Your dashboard is ready for you.
          </p>
        </div>

        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          color: 'var(--text-primary)',
          opacity: 0.85
        }}>
          <span style={{ 
            fontSize: '36px', 
            fontWeight: '300', 
            fontFamily: 'system-ui, -apple-system, sans-serif',
            letterSpacing: '-1px',
            fontVariantNumeric: 'tabular-nums'
          }}>
            {formatTime(time)}
          </span>
        </div>
      </div>

      <div style={{ padding: '40px', textAlign: 'center', backgroundColor: 'var(--bg-card)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
        <h3 style={{ color: 'var(--text-primary)', fontSize: '18px', marginBottom: '8px' }}>Recent Activity</h3>
        <p style={{ color: 'var(--text-secondary)' }}>No recent activity to show yet. Navigate to the Learning Hub to start studying!</p>
      </div>
    </div>
  );
}
