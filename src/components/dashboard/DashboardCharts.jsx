import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, 
  PieChart, Pie, Cell, AreaChart, Area, Tooltip
} from 'recharts';
import { ChevronDown, Users } from 'lucide-react';

const trendData = [
  { name: 'Oct 2023', java: 1200, oops: 2500 },
  { name: 'Nov 2023', java: 1800, oops: 3000 },
  { name: 'Dec 2023', java: 700, oops: 4200 },
  { name: 'Jan 2024', java: 1100, oops: 2600 },
  { name: 'Feb 2024', java: 1300, oops: 2800 },
  { name: 'Mar 2024', java: 1000, oops: 3500 },
];

const genderData = [
  { name: 'Mastered', value: 72 },
  { name: 'Learning', value: 28 },
];
const COLORS = ['#f97316', '#7c3aed'];

const timeData = [
  { time: '07 am', val: 50 },
  { time: '08 am', val: 120 },
  { time: '09 am', val: 70 },
  { time: '10 am', val: 140 },
  { time: '11 am', val: 90 },
  { time: '12 pm', val: 100 },
];

export function DashboardCharts() {
  return (
    <div className="charts-container">
      {/* Main Trend Chart */}
      <div className="trend-chart-card">
        <div className="chart-header">
          <h3>Java vs. OOPs Study Trend</h3>
          <button className="dropdown-btn">
            Show by months <ChevronDown size={14} />
          </button>
        </div>
        
        <div className="trend-content">
          <div className="bar-chart-wrapper">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={trendData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11 }} dx={-10} />
                <Bar dataKey="java" fill="#10b981" radius={[4, 4, 0, 0]} barSize={8} />
                <Bar dataKey="oops" fill="#7c3aed" radius={[4, 4, 0, 0]} barSize={8} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="radial-wrapper">
            <div className="radial-chart">
              <ResponsiveContainer width="100%" height={150}>
                <PieChart>
                  <Pie
                    data={[{value: 100}]}
                    innerRadius={50}
                    outerRadius={60}
                    fill="#10b981"
                    dataKey="value"
                    stroke="none"
                  />
                  <Pie
                    data={[{value: 72}]}
                    innerRadius={50}
                    outerRadius={60}
                    fill="#7c3aed"
                    dataKey="value"
                    stroke="none"
                    startAngle={90}
                    endAngle={-170}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="radial-inner">
                <Users size={20} className="text-gray-400" />
              </div>
              <div className="radial-badge">28%</div>
            </div>
            
            <div className="chart-legend">
              <span className="legend-item"><span className="dot purple"></span> OOPs</span>
              <span className="legend-item"><span className="dot green"></span> Java</span>
            </div>
          </div>
        </div>
      </div>

      {/* Topics Mastered Donut */}
      <div className="donut-chart-card">
        <h3>Topics Mastered</h3>
        <div className="donut-wrapper">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={genderData}
                innerRadius={60}
                outerRadius={70}
                paddingAngle={5}
                dataKey="value"
                stroke="none"
              >
                {genderData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="donut-inner">
            <span className="icon-gender">⚧</span>
          </div>
        </div>
        <div className="chart-legend donut-legend">
          <span className="legend-item"><span className="dot orange"></span> Mastered</span>
          <span className="legend-item"><span className="dot purple"></span> Learning</span>
        </div>
      </div>

      {/* Study Activity Area Chart */}
      <div className="area-chart-card">
        <div className="chart-header">
          <h3>Study Activity</h3>
          <button className="dropdown-btn">
            Today <ChevronDown size={14} />
          </button>
        </div>
        <div className="area-wrapper">
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={timeData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11 }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11 }} dx={-10} />
              <Tooltip cursor={false} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', background: '#111827', color: 'white'}} />
              <Area type="monotone" dataKey="val" stroke="#f97316" strokeWidth={2} fillOpacity={1} fill="url(#colorVal)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
