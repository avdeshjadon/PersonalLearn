import React from 'react';
import { Book, Target, Clock, Award, MoreHorizontal } from 'lucide-react';

export function DashboardStats() {
  const stats = [
    {
      title: 'Total Topics',
      value: '3,256',
      icon: <Book size={20} color="#7c3aed" />, // purple
      iconBg: '#f3e8ff'
    },
    {
      title: 'Quizzes Done',
      value: '394',
      icon: <Target size={20} color="#0ea5e9" />, // blue
      iconBg: '#e0f2fe'
    },
    {
      title: 'Study Hours',
      value: '2,536',
      icon: <Clock size={20} color="#f97316" />, // orange
      iconBg: '#ffedd5'
    },
    {
      title: 'Certificates',
      value: '38',
      icon: <Award size={20} color="#ef4444" />, // red
      iconBg: '#fee2e2'
    }
  ];

  return (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card-clean">
          <div className="stat-card-clean-left">
            <div className="stat-icon-circle" style={{ backgroundColor: stat.iconBg }}>
              {stat.icon}
            </div>
            <div className="stat-info">
              <h3>{stat.value}</h3>
              <p>{stat.title}</p>
            </div>
          </div>
          <button className="more-btn">
            <MoreHorizontal size={16} className="text-[var(--text-secondary)]" />
          </button>
        </div>
      ))}
    </div>
  );
}
