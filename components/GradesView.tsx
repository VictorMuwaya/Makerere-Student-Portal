
import React from 'react';
import { GPA_DATA } from '../constants';

const GradesView: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">My CGPA & Grades</h1>
          <p className="text-sm text-slate-500">Academic performance history at Makerere University.</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Current Cumulative GPA</p>
          <h2 className="text-3xl font-black text-red-700">4.52</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {GPA_DATA.map((sem, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
            <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-bold text-slate-800">{sem.semester}</h3>
              <div className="flex items-center space-x-3">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Semester GPA:</span>
                <span className="bg-red-700 text-white text-xs font-black px-3 py-1 rounded-full">{sem.gpa.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              {sem.courses.length > 0 ? (
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-50">
                      <th className="px-6 py-4">Course Name</th>
                      <th className="px-6 py-4">Code</th>
                      <th className="px-6 py-4 text-center">CU</th>
                      <th className="px-6 py-4 text-center">Grade</th>
                      <th className="px-6 py-4 text-center">GP</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {sem.courses.map((course, cIdx) => (
                      <tr key={cIdx} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4 text-sm font-semibold text-slate-800">{course.name}</td>
                        <td className="px-6 py-4 text-xs font-mono text-slate-500">{course.code}</td>
                        <td className="px-6 py-4 text-xs text-center font-bold text-slate-600">{course.cu}</td>
                        <td className="px-6 py-4 text-center">
                          <span className={`text-xs font-black ${course.grade.startsWith('A') ? 'text-emerald-600' : 'text-slate-800'}`}>{course.grade}</span>
                        </td>
                        <td className="px-6 py-4 text-xs text-center font-bold text-slate-600">{course.gp.toFixed(1)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="p-12 text-center">
                  <p className="text-sm text-slate-400 italic">Results pending moderation or not yet available for this semester.</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradesView;
