import React from 'react';
import { useAnalytics } from '../../../hooks';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip,
  PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import { CheckSquare, Bookmark, Layers, RefreshCw } from 'lucide-react';

export function AnalyticsContent() {
  const { stats, isLoading } = useAnalytics();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20 min-h-screen">
        <RefreshCw className="animate-spin text-gray-300" size={32} />
      </div>
    );
  }

  // Data for Charts
  const taskData = [
    { name: 'Completed', value: stats.tasks.completed },
    { name: 'Pending', value: stats.tasks.pending }
  ];
  
  // Custom theme colors matching user preference
  const COLORS = ['#D97757', '#e2e8f0']; // Accent and Gray

  return (
    <div className="max-w-6xl w-full mx-auto px-6 py-6 min-h-full">
      <header className="mb-8">
        <h1 className="text-[40px] font-semibold text-[var(--text-primary)] tracking-[-1.5px] leading-[1.2] mb-1">
          Analytics Overview
        </h1>
      </header>

      {/* Top Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-[var(--bg-card)] backdrop-blur-md p-5 rounded-2xl border border-[var(--border-color)] shadow-sm">
          <p className="text-[var(--text-secondary)] text-sm font-medium">Task Completion</p>
          <h3 className="text-3xl font-bold text-[var(--text-primary)] mt-1">{stats.tasks.completionRate}%</h3>
        </div>

        <div className="bg-[var(--bg-card)] backdrop-blur-md p-5 rounded-2xl border border-[var(--border-color)] shadow-sm">
          <p className="text-[var(--text-secondary)] text-sm font-medium">Total Tasks</p>
          <h3 className="text-3xl font-bold text-[var(--text-primary)] mt-1">{stats.tasks.total}</h3>
        </div>

        <div className="bg-[var(--bg-card)] backdrop-blur-md p-5 rounded-2xl border border-[var(--border-color)] shadow-sm">
          <p className="text-[var(--text-secondary)] text-sm font-medium">Flashcards</p>
          <h3 className="text-3xl font-bold text-[var(--text-primary)] mt-1">{stats.flashcards.total}</h3>
        </div>

        <div className="bg-[var(--bg-card)] backdrop-blur-md p-5 rounded-2xl border border-[var(--border-color)] shadow-sm">
          <p className="text-[var(--text-secondary)] text-sm font-medium">Bookmarks</p>
          <h3 className="text-3xl font-bold text-[var(--text-primary)] mt-1">{stats.bookmarks.total}</h3>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Task Progress Donut Chart */}
        <div className="bg-[var(--bg-card)] backdrop-blur-md p-6 rounded-2xl border border-[var(--border-color)] shadow-sm">
          <h3 className="text-lg font-bold text-[var(--text-primary)] mb-6">Task Progress</h3>
          {stats.tasks.total === 0 ? (
            <div className="h-64 flex items-center justify-center text-[var(--text-secondary)] text-sm">No tasks added yet.</div>
          ) : (
            <div className="h-64 relative flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={taskData}
                    innerRadius={70}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {taskData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute flex flex-col items-center justify-center pointer-events-none">
                <span className="text-3xl font-bold text-[var(--text-primary)]">{stats.tasks.completed}</span>
                <span className="text-xs text-[var(--text-secondary)] font-medium">Completed</span>
              </div>
            </div>
          )}
        </div>

        {/* Flashcards by Category Bar Chart */}
        <div className="bg-[var(--bg-card)] backdrop-blur-md p-6 rounded-2xl border border-[var(--border-color)] shadow-sm">
          <h3 className="text-lg font-bold text-[var(--text-primary)] mb-6">Flashcards by Category</h3>
          {stats.flashcards.total === 0 ? (
            <div className="h-64 flex items-center justify-center text-[var(--text-secondary)] text-sm">No flashcards added yet.</div>
          ) : (
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={stats.flashcards.categories} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dx={-10} allowDecimals={false} />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                  <Bar dataKey="value" fill="#D97757" radius={[6, 6, 0, 0]} barSize={30} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        {/* Bookmarks by Topic Pie Chart */}
        <div className="bg-[var(--bg-card)] backdrop-blur-md p-6 rounded-2xl border border-[var(--border-color)] shadow-sm">
          <h3 className="text-lg font-bold text-[var(--text-primary)] mb-6">Bookmarks by Topic</h3>
          {stats.bookmarks.total === 0 ? (
            <div className="h-64 flex items-center justify-center text-[var(--text-secondary)] text-sm">No bookmarks saved yet.</div>
          ) : (
            <div className="h-64 relative flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={stats.bookmarks.categories}
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {stats.bookmarks.categories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={['#D97757', '#FBBF24', '#34D399', '#60A5FA'][index % 4]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        {/* Learning Activity Area Chart */}
        <div className="bg-[var(--bg-card)] backdrop-blur-md p-6 rounded-2xl border border-[var(--border-color)] shadow-sm">
          <h3 className="text-lg font-bold text-[var(--text-primary)] mb-6">Activity (Last 7 Days)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={stats.activity} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorActivity" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D97757" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#D97757" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dx={-10} allowDecimals={false} />
                <Tooltip 
                  cursor={false}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                <Area type="monotone" dataKey="value" stroke="#D97757" strokeWidth={3} fillOpacity={1} fill="url(#colorActivity)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
