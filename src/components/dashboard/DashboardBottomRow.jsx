import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function DashboardBottomRow() {
  const cards = [
    { title: 'Java Notes', path: '/learning/java', desc: 'Core fundamentals' },
    { title: 'OOPs Concepts', path: '/learning/oops', desc: 'Object oriented' },
    { title: 'Postman APIs', path: '/learning/postman', desc: 'Testing endpoints' },
    { title: 'Interview Prep', path: '/learning/interview', desc: 'Top questions' },
  ];

  return (
    <div className="bottom-row-container">
      {cards.map((card, index) => (
        <Link to={card.path} key={index} className="topic-nav-card">
          <div className="topic-info" style={{ marginTop: '10px' }}>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
          <div className="topic-arrow">
            <ArrowRight size={18} style={{ color: 'var(--text-secondary)' }} />
          </div>
        </Link>
      ))}
    </div>
  );
}
