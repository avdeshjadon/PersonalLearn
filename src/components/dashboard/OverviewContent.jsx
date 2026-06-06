import React, { useState, useEffect } from "react";
import { useTasks } from "../../hooks";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import { CheckCircle, Circle, ChevronLeft, ChevronRight } from "lucide-react";

export function OverviewContent() {
  const [time, setTime] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(new Date());
  const { tasks, toggleTaskCompletion, loading } = useTasks();

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
    if (hour < 12) return "Good Morning, Avdesh!";
    if (hour < 17) return "Good Afternoon, Avdesh!";
    return "Good Evening, Avdesh!";
  };

  // Prepare Today's Chart Data
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const todaysTasks = tasks.filter(
    (t) => new Date(t.createdAt) >= startOfToday || t.status === "pending",
  );
  const completedToday = todaysTasks.filter(
    (t) => t.status === "completed",
  ).length;
  const pendingToday = todaysTasks.filter((t) => t.status === "pending").length;
  const uncompletedToday = todaysTasks.filter(
    (t) => t.status === "uncompleted",
  ).length;

  const pieData = [
    { name: "Completed", value: completedToday, color: "#10B981" },
    { name: "Pending", value: pendingToday, color: "#F59E0B" },
    { name: "Missed", value: uncompletedToday, color: "#EF4444" },
  ].filter((d) => d.value > 0);

  // Prepare Weekly Chart Data
  const weeklyData = [];
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

    weeklyData.push({
      name: d.toLocaleDateString("en-US", { weekday: "short" }),
      Completed: dayTasks.filter((t) => t.status === "completed").length,
      Missed: dayTasks.filter((t) => t.status === "uncompleted").length,
    });
  }

  // Prepare Monthly Chart Data
  const monthlyData = [];
  const year = selectedMonth.getFullYear();
  const month = selectedMonth.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 1; i <= daysInMonth; i++) {
    const dayStart = new Date(year, month, i, 0, 0, 0);
    const dayEnd = new Date(year, month, i, 23, 59, 59, 999);

    const dayTasks = tasks.filter((t) => {
      const tDate = new Date(t.createdAt);
      return tDate >= dayStart && tDate <= dayEnd;
    });

    const total = dayTasks.length;
    const completed = dayTasks.filter((t) => t.status === "completed").length;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    monthlyData.push({
      day: i,
      Percentage: percentage,
      Completed: completed,
      Total: total,
    });
  }

  return (
    <div className="overview-container">
      <div
        className="greeting-container"
        style={{
          marginBottom: "40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "600",
              color: "var(--text-primary)",
              margin: 0,
              letterSpacing: "-1.5px",
              lineHeight: "1.2",
            }}
          >
            {getGreeting()}
          </h1>
          <p
            style={{
              color: "var(--text-secondary)",
              marginTop: "8px",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            Welcome back! Your dashboard is ready for you.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "var(--text-primary)",
            opacity: 0.85,
          }}
        >
          <span
            className="live-clock"
            style={{
              fontSize: "36px",
              fontWeight: "300",
              fontFamily: "system-ui, -apple-system, sans-serif",
              letterSpacing: "-1px",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {formatTime(time)}
          </span>
        </div>
      </div>

      <div
        className="overview-charts-grid"
        style={{ display: "grid", gap: "24px", marginBottom: "32px" }}
      >
        {/* Today's Progress Chart */}
        <div
          style={{
            backgroundColor: "var(--bg-card)",
            padding: "24px",
            borderRadius: "16px",
            border: "1px solid var(--border-color)",
            minHeight: "300px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3
            style={{
              color: "var(--text-primary)",
              fontSize: "18px",
              marginBottom: "16px",
              fontWeight: "700",
            }}
          >
            Today's Progress
          </h3>
          <div style={{ flex: 1, position: "relative" }}>
            {loading ? (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Loading chart...
                </span>
              </div>
            ) : pieData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={5}
                    cornerRadius={8}
                    dataKey="value"
                    isAnimationActive={true}
                    animationBegin={0}
                    animationDuration={1500}
                    animationEasing="ease-out"
                    stroke="none"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip
                    contentStyle={{
                      backgroundColor: "var(--bg-primary)",
                      border: "1px solid var(--border-color)",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-secondary)",
                }}
              >
                No tasks for today yet.
              </div>
            )}
          </div>
        </div>

        {/* Weekly Progress Chart */}
        <div
          style={{
            backgroundColor: "var(--bg-card)",
            padding: "24px",
            borderRadius: "16px",
            border: "1px solid var(--border-color)",
            minHeight: "300px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3
            style={{
              color: "var(--text-primary)",
              fontSize: "18px",
              marginBottom: "16px",
              fontWeight: "700",
            }}
          >
            Weekly Activity
          </h3>
          <div style={{ flex: 1, position: "relative" }}>
            {loading ? (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Loading chart...
                </span>
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={weeklyData}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="colorCompleted"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
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
                  />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: "var(--text-secondary)", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: "var(--text-secondary)", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    allowDecimals={false}
                  />
                  <RechartsTooltip
                    contentStyle={{
                      backgroundColor: "var(--bg-primary)",
                      border: "1px solid var(--border-color)",
                      borderRadius: "8px",
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
                    animationBegin={0}
                    animationDuration={1500}
                    animationEasing="ease-out"
                  />
                  <Area
                    type="monotone"
                    dataKey="Missed"
                    stroke="#EF4444"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorMissed)"
                    isAnimationActive={true}
                    animationBegin={0}
                    animationDuration={1500}
                    animationEasing="ease-out"
                  />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </div>

      {/* Monthly Progress Chart */}
      <div
        style={{
          backgroundColor: "var(--bg-card)",
          padding: "24px",
          borderRadius: "16px",
          border: "1px solid var(--border-color)",
          marginBottom: "32px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <h3
            style={{
              color: "var(--text-primary)",
              fontSize: "18px",
              fontWeight: "700",
              margin: 0,
            }}
          >
            Monthly Progress
          </h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              backgroundColor: "var(--bg-primary)",
              padding: "6px 12px",
              borderRadius: "8px",
              border: "1px solid var(--border-color)",
            }}
          >
            <button
              onClick={handlePrevMonth}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--text-secondary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <span
              style={{
                color: "var(--text-primary)",
                fontWeight: "600",
                minWidth: "120px",
                textAlign: "center",
                fontSize: "14px",
              }}
            >
              {selectedMonth.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <button
              onClick={handleNextMonth}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--text-secondary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div style={{ height: "300px", position: "relative" }}>
          {loading ? (
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Loading chart...
              </span>
            </div>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={monthlyData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="colorPercentage"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.2} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="var(--border-color)"
                />
                <XAxis
                  dataKey="day"
                  tick={{ fill: "var(--text-secondary)", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "var(--text-secondary)", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  domain={[0, 100]}
                />
                <RechartsTooltip
                  contentStyle={{
                    backgroundColor: "var(--bg-primary)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "8px",
                  }}
                  labelFormatter={(label) =>
                    `${selectedMonth.toLocaleDateString("en-US", { month: "short" })} ${label}`
                  }
                  formatter={(value, name) => [
                    name === "Percentage" ? `${value}%` : value,
                    name,
                  ]}
                  cursor={{ fill: "var(--bg-primary)", opacity: 0.4 }}
                />
                <Bar
                  dataKey="Percentage"
                  fill="url(#colorPercentage)"
                  radius={[4, 4, 0, 0]}
                  isAnimationActive={true}
                  animationBegin={0}
                  animationDuration={1500}
                  animationEasing="ease-out"
                />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      {/* Today's Tasks List */}
      <div
        style={{
          backgroundColor: "var(--bg-card)",
          padding: "24px",
          borderRadius: "16px",
          border: "1px solid var(--border-color)",
        }}
      >
        <h3
          style={{
            color: "var(--text-primary)",
            fontSize: "18px",
            marginBottom: "16px",
            fontWeight: "700",
          }}
        >
          Tasks For Today
        </h3>
        {todaysTasks.length === 0 ? (
          <p style={{ color: "var(--text-secondary)", fontStyle: "italic" }}>
            No tasks found. Click "Create Task" in the sidebar to get started!
          </p>
        ) : (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {todaysTasks.map((task) => (
              <div
                key={task.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "12px 16px",
                  backgroundColor: "var(--bg-primary)",
                  borderRadius: "8px",
                  border: "1px solid var(--border-color)",
                }}
              >
                <button
                  onClick={() => toggleTaskCompletion(task.id)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    color:
                      task.status === "completed"
                        ? "#10B981"
                        : task.status === "uncompleted"
                          ? "#EF4444"
                          : "var(--text-secondary)",
                  }}
                >
                  {task.status === "completed" ? (
                    <CheckCircle size={20} />
                  ) : (
                    <Circle size={20} />
                  )}
                </button>
                <span
                  style={{
                    color: task.status === "completed" ? "#10B981" : "var(--text-primary)",
                    textDecoration: task.status === "uncompleted" ? "line-through" : "none",
                    opacity: task.status === "uncompleted" ? 0.6 : 1,
                  }}
                >
                  {task.title}
                </span>
                {task.status === "uncompleted" && (
                  <span
                    style={{
                      marginLeft: "auto",
                      fontSize: "12px",
                      color: "#EF4444",
                      backgroundColor: "rgba(239, 68, 68, 0.1)",
                      padding: "4px 8px",
                      borderRadius: "12px",
                    }}
                  >
                    Missed
                  </span>
                )}
                {task.status === "completed" && (
                  <span
                    style={{
                      marginLeft: "auto",
                      fontSize: "12px",
                      color: "#10B981",
                      backgroundColor: "rgba(16, 185, 129, 0.1)",
                      padding: "4px 8px",
                      borderRadius: "12px",
                    }}
                  >
                    Done
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
