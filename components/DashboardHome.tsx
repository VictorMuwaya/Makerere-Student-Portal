
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MOCK_COURSES, MOCK_ASSIGNMENTS, GPA_DATA } from '../constants';

const DashboardHome: React.FC = () => {
  return (
    <div className="space-y-6 md:space-y-8 animate-in fade-in duration-700">
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Welcome, Moses Kato 👋</h1>
          <p className="text-sm text-slate-500 mt-1">Ready to build for the future? Here's your status.</p>
        </div>
        <div className="hidden sm:flex items-center space-x-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100 self-start sm:self-auto">
          <i className="fa-solid fa-building-columns text-red-700"></i>
          <span className="text-xs font-bold text-slate-700 whitespace-nowrap">Main Campus - Semester I</span>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {[
          { label: 'Current CGPA', value: '4.52', icon: 'fa-award', color: 'text-red-700', bg: 'bg-red-50' },
          { label: 'Total CU', value: '112', sub: 'Units', icon: 'fa-book', color: 'text-slate-800', bg: 'bg-slate-100' },
          { label: 'Pending Work', value: '3', sub: 'Papers', icon: 'fa-file-signature', color: 'text-amber-600', bg: 'bg-amber-50' },
          { label: 'Library Status', value: 'Clear', icon: 'fa-university', color: 'text-emerald-600', bg: 'bg-emerald-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col sm:flex-row items-center sm:items-start md:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
            <div className={`w-10 h-10 md:w-12 md:h-12 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
              <i className={`fa-solid ${stat.icon} text-lg md:text-xl`}></i>
            </div>
            <div>
              <p className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider">{stat.label}</p>
              <div className="flex items-baseline justify-center sm:justify-start space-x-1">
                <span className="text-lg md:text-2xl font-bold text-slate-900">{stat.value}</span>
                {stat.sub && <span className="text-[10px] text-slate-400 font-medium">{stat.sub}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:gap-8">
        {/* Performance Chart - Now taking full width */}
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-2">
            <h3 className="text-base md:text-lg font-bold text-slate-800">CGPA Trend (Ugandan 5.0 Scale)</h3>
            <div className="inline-flex items-center text-[10px] font-bold text-red-700 uppercase bg-red-50 px-3 py-1 rounded-lg">
              First Class Pace
            </div>
          </div>
          <div className="h-48 md:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={GPA_DATA}>
                <defs>
                  <linearGradient id="colorGpa" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#990000" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#990000" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="semester" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#64748b'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#64748b'}} domain={[0, 5.0]} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  cursor={{ stroke: '#990000', strokeWidth: 2 }}
                />
                <Area type="monotone" dataKey="gpa" stroke="#990000" strokeWidth={3} fillOpacity={1} fill="url(#colorGpa)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Course Registration */}
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base md:text-lg font-bold text-slate-800">Registered Courses</h3>
            <button className="text-xs text-red-700 font-bold hover:underline">Full List</button>
          </div>
          <div className="space-y-4">
            {MOCK_COURSES.slice(0, 4).map((course) => (
              <div key={course.id} className="flex items-center justify-between p-3 md:p-4 rounded-xl border border-slate-50 bg-slate-50/30 hover:bg-white hover:shadow-md hover:border-red-100 transition-all group">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className={`w-8 h-8 md:w-10 md:h-10 ${course.color} rounded-lg flex items-center justify-center text-white shadow-sm flex-shrink-0`}>
                    <i className="fa-solid fa-scroll text-sm"></i>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs md:text-sm font-bold text-slate-800 truncate">{course.name}</h4>
                    <p className="text-[10px] text-slate-500 truncate">{course.code} • {course.credits} CU</p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className={`px-2 py-0.5 rounded-md text-[9px] font-bold ${course.progress > 80 ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                    {course.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Deadlines */}
        <div className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base md:text-lg font-bold text-slate-800">Deadlines</h3>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sem I 23/24</span>
          </div>
          <div className="space-y-4">
            {MOCK_ASSIGNMENTS.filter(a => a.status === 'pending').map((task) => (
              <div key={task.id} className="group flex items-center justify-between p-3 md:p-4 rounded-xl border border-transparent hover:border-red-100 hover:bg-red-50/30 transition-all cursor-pointer">
                <div className="flex items-center space-x-3 md:space-x-4 min-w-0">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-red-100 group-hover:text-red-700 transition-colors flex-shrink-0">
                    <i className="fa-solid fa-clock-rotate-left text-sm"></i>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs md:text-sm font-semibold text-slate-800 truncate">{task.title}</h4>
                    <p className="text-[10px] text-slate-400 font-medium truncate">Due {new Date(task.dueDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end flex-shrink-0">
                  <span className="text-[8px] font-bold text-red-700 uppercase tracking-tighter">Urgent</span>
                </div>
              </div>
            ))}
            <div className="mt-4 p-3 rounded-xl bg-slate-900 text-white flex items-center justify-between group cursor-pointer hover:bg-slate-800 transition-colors">
              <div className="flex items-center space-x-3">
                <i className="fa-solid fa-circle-info text-amber-500 text-xs"></i>
                <span className="text-[10px] font-bold uppercase tracking-tight">Exam Timetable Draft Out</span>
              </div>
              <i className="fa-solid fa-chevron-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
