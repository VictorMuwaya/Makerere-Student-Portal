
import React from 'react';
import { MOCK_SCHEDULE } from '../constants';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const ScheduleView: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Lecture Timetable</h1>
        <p className="text-sm text-slate-500">Your weekly schedule at the Hill.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DAYS.map(day => {
          const events = MOCK_SCHEDULE.filter(e => e.day === day);
          return (
            <div key={day} className="bg-white rounded-2xl border border-slate-100 overflow-hidden flex flex-col shadow-sm">
              <div className="p-4 bg-red-700 text-white font-bold flex items-center justify-between">
                <span>{day}</span>
                <span className="text-[10px] opacity-70 uppercase tracking-widest">{events.length} Lectures</span>
              </div>
              <div className="flex-1 p-4 space-y-4">
                {events.length > 0 ? (
                  events.map(event => (
                    <div key={event.id} className="p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-red-100 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded uppercase">{event.courseCode}</span>
                        <span className="text-[10px] font-bold text-slate-400">{event.startTime} - {event.endTime}</span>
                      </div>
                      <h4 className="text-xs font-bold text-slate-800 mb-1">{event.courseName}</h4>
                      <div className="flex items-center text-[10px] text-slate-500">
                        <i className="fa-solid fa-location-dot mr-1.5 text-slate-300"></i>
                        {event.location}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="h-24 flex items-center justify-center text-slate-300 italic text-xs">
                    No lectures scheduled
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScheduleView;
