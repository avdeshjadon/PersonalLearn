import React, { useState, useEffect, useRef } from "react";
import { useTasks, useSettings } from "../../../hooks";
import {
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import {
  CheckCircle,
  Circle,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Target,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";

export function OverviewContent() {
  const [time, setTime] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const { tasks, toggleTaskCompletion, loading } = useTasks();
  const { settings } = useSettings();
  const scrollContainerRef = useRef(null);
  const [hoveredCell, setHoveredCell] = useState(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const today = new Date().getDate();
      const daysInMonth = new Date(
        selectedMonth.getFullYear(),
        selectedMonth.getMonth() + 1,
        0,
      ).getDate();
      const scrollWidth = scrollContainerRef.current.scrollWidth;
      const clientWidth = scrollContainerRef.current.clientWidth;
      const scrollPosition =
        (scrollWidth / daysInMonth) * today - clientWidth / 2;
      scrollContainerRef.current.scrollLeft = Math.max(0, scrollPosition);
    }
  }, [selectedMonth, tasks.length]);

  const handlePrevMonth = () => {
    setSelectedMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setSelectedMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1),
    );
  };

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  const getGreeting = () => {
    const hour = time.getHours();
    const name = settings?.profile?.fullName || "User";
    if (hour < 12) return `Good Morning, ${name}`;
    if (hour < 17) return `Good Afternoon, ${name}`;
    return `Good Evening, ${name}`;
  };

  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const todaysTasks = tasks.filter(
    (t) => new Date(t.createdAt) >= startOfToday || t.status === "pending",
  );

  const completedToday = todaysTasks.filter(
    (t) => t.status === "completed",
  ).length;
  const todayCompletionRate =
    todaysTasks.length > 0
      ? Math.round((completedToday / todaysTasks.length) * 100)
      : 0;

  const goalStartDate = new Date("2026-06-21T00:00:00");
  const goalEndDate = new Date("2027-01-01T23:59:59");

  const totalGoalDays = Math.max(
    1,
    Math.ceil((goalEndDate - goalStartDate) / (1000 * 60 * 60 * 24)),
  );
  const daysElapsed = Math.max(
    0,
    Math.ceil((new Date() - goalStartDate) / (1000 * 60 * 60 * 24)),
  );
  const timeProgressPercentage = Math.min(
    100,
    Math.max(0, Math.round((daysElapsed / totalGoalDays) * 100)),
  );

  const longTermData = [];
  let currentDate = new Date(
    goalStartDate.getFullYear(),
    goalStartDate.getMonth(),
    goalStartDate.getDate(),
  );
  let cumulativeCompleted = 0;
  let cumulativeMissed = 0;

  const todayDate = new Date();
  todayDate.setHours(23, 59, 59, 999);
  const endDate = new Date(
    goalEndDate.getFullYear(),
    goalEndDate.getMonth(),
    goalEndDate.getDate(),
  );

  const tasksSinceStart = tasks.filter(
    (t) => new Date(t.createdAt) >= goalStartDate,
  );
  const totalCompletedSinceStart = tasksSinceStart.filter(
    (t) => t.status === "completed" || t.status === "completed_late",
  ).length;

  while (currentDate <= endDate) {
    const dayStart = new Date(currentDate);
    dayStart.setHours(0, 0, 0, 0);
    const dayEnd = new Date(currentDate);
    dayEnd.setHours(23, 59, 59, 999);

    if (dayStart > todayDate) {
      longTermData.push({
        name: dayStart.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        }),
        Completed: null,
        Missed: null,
      });
    } else {
      const completedOnDay = tasksSinceStart.filter((t) => {
        const tDate = new Date(t.createdAt);
        return (
          (t.status === "completed" || t.status === "completed_late") &&
          tDate >= dayStart &&
          tDate <= dayEnd
        );
      }).length;
      const missedOnDay = tasksSinceStart.filter((t) => {
        const tDate = new Date(t.createdAt);
        return (
          t.status === "uncompleted" && tDate >= dayStart && tDate <= dayEnd
        );
      }).length;
      cumulativeCompleted += completedOnDay;
      cumulativeMissed += missedOnDay;

      longTermData.push({
        name: dayStart.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        }),
        Completed: cumulativeCompleted,
        Missed: cumulativeMissed,
      });
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }

  const weeklyData = [];
  let totalWeeklyTasks = 0;
  let completedWeeklyTasks = 0;
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    d.setHours(0, 0, 0, 0);
    const end = new Date(d);
    end.setHours(23, 59, 59, 999);

    const dayTasks = tasks.filter((t) => {
      const tDate = new Date(t.createdAt);
      return tDate >= d && tDate <= end;
    });

    const comp = dayTasks.filter(
      (t) => t.status === "completed" || t.status === "completed_late",
    ).length;
    const missed = dayTasks.filter((t) => t.status === "uncompleted").length;
    totalWeeklyTasks += dayTasks.length;
    completedWeeklyTasks += comp;

    weeklyData.push({
      name: d.toLocaleDateString("en-US", { weekday: "short" }),
      Completed: comp,
      Missed: missed,
    });
  }
  const weeklyCompletionRate =
    totalWeeklyTasks > 0
      ? Math.round((completedWeeklyTasks / totalWeeklyTasks) * 100)
      : 0;

  const monthlyData = [];
  const year = selectedMonth.getFullYear();
  const month = selectedMonth.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  let maxTasksInADay = 0;

  for (let i = 1; i <= daysInMonth; i++) {
    const dayStart = new Date(year, month, i, 0, 0, 0);
    const dayEnd = new Date(year, month, i, 23, 59, 59, 999);

    const dayTasks = tasks.filter((t) => {
      const tDate = new Date(t.createdAt);
      return tDate >= dayStart && tDate <= dayEnd;
    });

    maxTasksInADay = Math.max(maxTasksInADay, dayTasks.length);

    const dataObj = { day: i, Total: dayTasks.length };

    dayTasks.forEach((task, index) => {
      let p = task.progress || 0;
      if (
        (task.status === "completed" || task.status === "completed_late") &&
        !task.progress
      )
        p = 100;
      dataObj[`task${index}`] = p;
    });

    monthlyData.push(dataObj);
  }

  // Heatmap Data Preparation
  const todayForHeatmap = new Date();
  todayForHeatmap.setHours(23, 59, 59, 999);
  const startHeatmap = new Date(todayForHeatmap);
  startHeatmap.setDate(startHeatmap.getDate() - 364); 
  
  const startDayOfWeek = startHeatmap.getDay();
  startHeatmap.setDate(startHeatmap.getDate() - startDayOfWeek);
  startHeatmap.setHours(0, 0, 0, 0);

  const dailyCounts = {};
  tasks.forEach(t => {
    if (t.status === "completed" || t.status === "completed_late") {
      const d = new Date(t.createdAt);
      const m = d.getMonth() + 1;
      const day = d.getDate();
      const dateStr = `${d.getFullYear()}-${m.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      dailyCounts[dateStr] = (dailyCounts[dateStr] || 0) + 1;
    }
  });

  const heatmapWeeks = [];
  let currentHeatmapWeek = [];
  let currHeatmapDate = new Date(startHeatmap);

  while (currHeatmapDate <= todayForHeatmap || currentHeatmapWeek.length > 0) {
    if (currentHeatmapWeek.length === 7) {
      heatmapWeeks.push(currentHeatmapWeek);
      currentHeatmapWeek = [];
    }
    
    if (currHeatmapDate <= todayForHeatmap) {
      const m = currHeatmapDate.getMonth() + 1;
      const day = currHeatmapDate.getDate();
      const dateStr = `${currHeatmapDate.getFullYear()}-${m.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
      currentHeatmapWeek.push({
        date: new Date(currHeatmapDate),
        count: dailyCounts[dateStr] || 0,
        isFuture: false
      });
    } else if (currentHeatmapWeek.length > 0) {
      currentHeatmapWeek.push({
        date: new Date(currHeatmapDate),
        count: 0,
        isFuture: true
      });
    }
    currHeatmapDate.setDate(currHeatmapDate.getDate() + 1);
  }
  if (currentHeatmapWeek.length > 0) {
    heatmapWeeks.push(currentHeatmapWeek);
  }

  const getHeatmapStyle = (count, isFuture) => {
    if (isFuture) return { backgroundColor: 'transparent' };
    if (count === 0) return { backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)', opacity: 0.5 };
    if (count === 1) return { backgroundColor: 'var(--accent-color)', opacity: 0.4, borderColor: 'transparent' };
    if (count === 2) return { backgroundColor: 'var(--accent-color)', opacity: 0.65, borderColor: 'transparent' };
    if (count === 3) return { backgroundColor: 'var(--accent-color)', opacity: 0.85, borderColor: 'transparent' };
    if (count >= 4) return { backgroundColor: 'var(--accent-color)', opacity: 1, borderColor: 'transparent', boxShadow: '0 0 8px var(--accent-color)' };
    return { backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)', opacity: 0.5 };
  };

  const barColors = [
    "#3B82F6",
    "#10B981",
    "#F59E0B",
    "#8B5CF6",
    "#EC4899",
    "#06B6D4",
    "#F97316",
    "#6366F1",
  ];
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-7xl w-full mx-auto px-6 py-8 min-h-full">
      <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[40px] font-bold text-[var(--text-primary)] tracking-[-1.5px] leading-[1.2]"
          >
            {getGreeting()}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[var(--text-secondary)] font-medium mt-1 text-lg"
          >
            Here's your progress overview.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center px-6 py-3 bg-[var(--bg-card)]/50 backdrop-blur-xl border border-[var(--border-color)] rounded-2xl shadow-sm"
        >
          <span className="text-[32px] font-light tracking-tight text-[var(--text-primary)] tabular-nums">
            {formatTime(time)}
          </span>
        </motion.div>
      </header>

      <motion.div
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        <motion.div
          variants={itemVariants}
          className="lg:col-span-2 relative overflow-hidden bg-[var(--bg-card)]/80 backdrop-blur-xl border border-[var(--border-color)] rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group flex flex-col"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
                  Journey to Jan 2027
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] font-medium">
                Consistent task completion towards your final goal
              </p>
            </div>
            <div className="flex items-center gap-6 bg-[var(--bg-primary)] px-4 py-2.5 rounded-2xl border border-[var(--border-color)]">
              <div className="text-center">
                <div className="text-[10px] uppercase font-bold text-[var(--text-secondary)] tracking-wider">
                  Time Elapsed
                </div>
                <div className="text-lg font-black text-[var(--text-primary)] leading-none mt-1">
                  {timeProgressPercentage}%
                </div>
              </div>
              <div className="w-px h-8 bg-[var(--border-color)]"></div>
              <div className="text-center">
                <div className="text-[10px] uppercase font-bold text-[var(--text-secondary)] tracking-wider">
                  Total Done
                </div>
                <div className="text-lg font-black text-[var(--text-primary)] leading-none mt-1">
                  {totalCompletedSinceStart}
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 h-[240px] relative w-full">
            {loading ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[var(--text-secondary)] font-medium">
                  Loading...
                </span>
              </div>
            ) : (
              <div className="w-full h-full flex flex-col justify-end" onMouseLeave={() => setHoveredCell(null)}>
                <div className="flex gap-[3px] overflow-x-auto pb-4 pt-2 px-1 scrollbar-hide" style={{ direction: 'rtl' }}>
                  {heatmapWeeks.slice().reverse().map((week, wIndex, arr) => {
                    let monthLabel = '';
                    if (wIndex < arr.length - 1) {
                       const currentMonth = week.find(d => !d.isFuture)?.date.getMonth();
                       const prevWeekMonth = arr[wIndex + 1].find(d => !d.isFuture)?.date.getMonth();
                       if (currentMonth !== prevWeekMonth && currentMonth !== undefined) {
                          monthLabel = week.find(d => !d.isFuture)?.date.toLocaleString('default', { month: 'short' });
                       }
                    } else if (wIndex === arr.length - 1) {
                       monthLabel = week.find(d => !d.isFuture)?.date.toLocaleString('default', { month: 'short' });
                    }

                    return (
                      <div key={wIndex} className="flex flex-col gap-[3px] relative pt-5" style={{ direction: 'ltr' }}>
                        {monthLabel && (
                          <span className="absolute top-0 left-0 text-[9px] text-[var(--text-secondary)] font-medium">
                            {monthLabel}
                          </span>
                        )}
                        {week.map((day, dIndex) => (
                          <div
                            key={dIndex}
                            onMouseEnter={() => !day.isFuture && setHoveredCell(day)}
                            className="w-[11px] h-[11px] rounded-[2px] transition-all duration-200 border cursor-default"
                            style={getHeatmapStyle(day.count, day.isFuture)}
                          ></div>
                        ))}
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between items-center mt-auto pb-2 px-1 text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                  <div className="text-[11px] normal-case tracking-normal font-medium text-[var(--text-primary)]">
                    {hoveredCell ? (
                      <span><strong style={{ color: 'var(--accent-color)' }}>{hoveredCell.count} task{hoveredCell.count !== 1 ? 's' : ''}</strong> on {hoveredCell.date.toLocaleDateString('default', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    ) : (
                      <span className="text-[var(--text-secondary)] opacity-0">Hover over a day</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Less</span>
                    <div className="flex gap-[3px]">
                      <div className="w-[11px] h-[11px] rounded-[2px] bg-[var(--bg-primary)] border border-[var(--border-color)]/50"></div>
                      <div className="w-[11px] h-[11px] rounded-[2px] border" style={{ backgroundColor: 'var(--accent-color)', opacity: 0.4, borderColor: 'transparent' }}></div>
                      <div className="w-[11px] h-[11px] rounded-[2px] border" style={{ backgroundColor: 'var(--accent-color)', opacity: 0.65, borderColor: 'transparent' }}></div>
                      <div className="w-[11px] h-[11px] rounded-[2px] border" style={{ backgroundColor: 'var(--accent-color)', opacity: 0.85, borderColor: 'transparent' }}></div>
                      <div className="w-[11px] h-[11px] rounded-[2px] border" style={{ backgroundColor: 'var(--accent-color)', opacity: 1, borderColor: 'transparent' }}></div>
                    </div>
                    <span>More</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-1 bg-[var(--bg-card)]/80 backdrop-blur-xl border border-[var(--border-color)] rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group hover:border-[var(--text-secondary)]/30"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-[var(--text-secondary)] mb-6">
              <TrendingUp size={16} />
              <span className="text-xs font-bold tracking-widest uppercase">
                Today's Pulse
              </span>
            </div>

            <div className="mb-8 relative z-10">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                  {todayCompletionRate}
                </span>
                <span className="text-lg font-medium text-[var(--text-secondary)]/40">
                  %
                </span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[var(--border-color)] relative z-10">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-medium text-[var(--text-secondary)]">
                Tasks Completed
              </span>
              <span className="font-bold text-[var(--text-primary)]">
                {completedToday}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-[var(--text-secondary)]">
                Total Tasks Today
              </span>
              <span className="font-bold text-[var(--text-primary)]">
                {todaysTasks.length}
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="lg:col-span-1 bg-[var(--bg-card)]/80 backdrop-blur-xl border border-[var(--border-color)] rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col"
        >
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
              Weekly Focus
            </h3>
            <div className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-lg text-sm font-bold">
              {weeklyCompletionRate}% Win
            </div>
          </div>
          <div className="flex-1 h-[220px] relative w-full">
            {loading ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[var(--text-secondary)] font-medium">
                  Loading...
                </span>
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={weeklyData}
                  margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="colorCompleted"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                      id="colorMissed"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="var(--border-color)"
                    opacity={0.5}
                  />
                  <XAxis
                    dataKey="name"
                    tick={{
                      fill: "var(--text-secondary)",
                      fontSize: 11,
                      fontWeight: 500,
                    }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{
                      fill: "var(--text-secondary)",
                      fontSize: 11,
                      fontWeight: 500,
                    }}
                    axisLine={false}
                    tickLine={false}
                    allowDecimals={false}
                  />
                  <RechartsTooltip
                    contentStyle={{
                      backgroundColor: "var(--bg-card)",
                      border: "1px solid var(--border-color)",
                      borderRadius: "12px",
                      boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="Completed"
                    stroke="#10B981"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorCompleted)"
                    isAnimationActive={true}
                    animationDuration={1500}
                  />
                  <Area
                    type="monotone"
                    dataKey="Missed"
                    stroke="#EF4444"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorMissed)"
                    isAnimationActive={true}
                    animationDuration={1500}
                  />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="lg:col-span-2 bg-[var(--bg-card)]/80 backdrop-blur-xl border border-[var(--border-color)] rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
              Monthly Grind
            </h3>
            <div className="flex items-center gap-2 bg-[var(--bg-primary)] p-1 rounded-xl border border-[var(--border-color)]">
              <button
                onClick={handlePrevMonth}
                className="p-2 hover:bg-[var(--bg-card)] rounded-lg transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="text-[var(--text-primary)] font-bold text-sm min-w-[100px] text-center">
                {selectedMonth.toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <button
                onClick={handleNextMonth}
                className="p-2 hover:bg-[var(--bg-card)] rounded-lg transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="h-[220px] relative flex">
            {loading ? (
              <div className="absolute inset-0 flex items-center justify-center z-20 w-full">
                <span className="text-[var(--text-secondary)] font-medium">
                  Loading...
                </span>
              </div>
            ) : (
              <>
                <div className="w-[30px] flex-shrink-0 h-full z-10 bg-[var(--bg-card)]/80 backdrop-blur-sm">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[{ day: "" }]}
                      margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
                    >
                      <XAxis
                        dataKey="day"
                        tick={{ fill: "transparent", fontSize: 11 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        tick={{
                          fill: "var(--text-secondary)",
                          fontSize: 10,
                          fontWeight: 600,
                        }}
                        axisLine={false}
                        tickLine={false}
                        domain={[0, 100]}
                        ticks={[0, 25, 50, 75, 100]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div
                  ref={scrollContainerRef}
                  className="flex-1 overflow-x-auto overflow-y-hidden no-scrollbar"
                >
                  <div
                    style={{
                      width: `${Math.max(100, (daysInMonth / 10) * 100)}%`,
                      height: "100%",
                    }}
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={monthlyData}
                        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                      >
                        <CartesianGrid
                          strokeDasharray="3 3"
                          vertical={false}
                          stroke="var(--border-color)"
                          opacity={0.5}
                        />
                        <XAxis
                          dataKey="day"
                          tick={{
                            fill: "var(--text-secondary)",
                            fontSize: 11,
                            fontWeight: 600,
                          }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis
                          hide
                          domain={[0, 100]}
                          ticks={[0, 25, 50, 75, 100]}
                        />
                        <RechartsTooltip
                          contentStyle={{
                            backgroundColor: "var(--bg-card)",
                            border: "1px solid var(--border-color)",
                            borderRadius: "12px",
                            boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                          }}
                          labelFormatter={(label) =>
                            `${selectedMonth.toLocaleDateString("en-US", { month: "short" })} ${label}`
                          }
                          formatter={(value) => [`${value}%`, `Task Progress`]}
                          cursor={{ fill: "var(--bg-primary)", opacity: 0.6 }}
                        />
                        {Array.from({ length: maxTasksInADay }).map(
                          (_, idx) => (
                            <Bar
                              key={`task${idx}`}
                              dataKey={`task${idx}`}
                              fill={barColors[idx % barColors.length]}
                              isAnimationActive={true}
                              animationDuration={1500}
                              radius={[4, 4, 0, 0]}
                              barSize={8}
                            />
                          ),
                        )}
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </>
            )}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="lg:col-span-3 bg-[var(--bg-card)]/80 backdrop-blur-xl border border-[var(--border-color)] rounded-[32px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300"
        >
          <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight mb-6">
            Today's Action Items
          </h3>

          {todaysTasks.length === 0 ? (
            <div className="py-12 flex flex-col items-center justify-center bg-[var(--bg-primary)] rounded-2xl border border-dashed border-[var(--border-color)]">
              <div className="w-16 h-16 bg-[var(--bg-secondary)] rounded-full flex items-center justify-center mb-4">
                <Target className="text-gray-400" size={32} />
              </div>
              <p className="text-[var(--text-secondary)] font-medium text-lg">
                Your slate is clean today.
              </p>
              <p className="text-sm text-[var(--text-secondary)]/70 mt-1">
                Head to the Tasks tab to add new goals.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {todaysTasks.map((task) => (
                <motion.div
                  key={task.id}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    task.status === "completed"
                      ? "bg-emerald-500/5 border-emerald-500/20"
                      : task.status === "uncompleted"
                        ? "bg-red-500/5 border-red-500/20"
                        : "bg-[var(--bg-primary)] border-[var(--border-color)] hover:border-orange-500/30"
                  }`}
                  onClick={() => toggleTaskCompletion(task.id)}
                >
                  <button
                    className={`flex-shrink-0 transition-colors ${task.status === "completed" ? "text-emerald-500" : task.status === "uncompleted" ? "text-red-400" : "text-gray-300 hover:text-orange-500"}`}
                  >
                    {task.status === "completed" ? (
                      <CheckCircle size={22} strokeWidth={2.5} />
                    ) : (
                      <Circle size={22} strokeWidth={2.5} />
                    )}
                  </button>
                  <span
                    className={`font-medium text-sm line-clamp-2 flex-1 ${task.status === "completed" ? "text-emerald-600 dark:text-emerald-400" : task.status === "uncompleted" ? "text-red-400 line-through opacity-70" : "text-[var(--text-primary)]"}`}
                  >
                    {task.title}
                  </span>
                  {task.progress > 0 && task.status === "pending" && (
                    <div className="px-2.5 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-bold rounded-lg border border-orange-200 dark:border-orange-800/50">
                      {task.progress}%
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
