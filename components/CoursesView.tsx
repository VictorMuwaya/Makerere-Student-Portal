
import React, { useState } from 'react';
import { MOCK_COURSES } from '../constants';
import { Course } from '../types';

const CoursesView: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [registeringCourse, setRegisteringCourse] = useState<Course | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const filteredCourses = MOCK_COURSES.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRegister = (course: Course, e: React.MouseEvent) => {
    e.stopPropagation();
    setRegisteringCourse(course);
    setIsSuccess(false);
  };

  const confirmRegistration = () => {
    setIsSuccess(true);
    setTimeout(() => {
      setRegisteringCourse(null);
      setIsSuccess(false);
    }, 2000);
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 relative">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Academic Courses</h1>
          <p className="text-sm text-slate-500">Manage your current registrations and syllabus.</p>
        </div>
        <div className="relative w-full md:w-64">
          <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
          <input 
            type="text" 
            placeholder="Search units..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-lg py-2 pl-9 pr-4 text-xs focus:ring-2 focus:ring-red-700/10 focus:border-red-700 outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {filteredCourses.map(course => (
            <div 
              key={course.id}
              onClick={() => setSelectedCourse(course)}
              className={`p-5 bg-white border rounded-2xl cursor-pointer transition-all hover:shadow-md group ${selectedCourse?.id === course.id ? 'border-red-700 ring-4 ring-red-700/5' : 'border-slate-100'}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${course.color} rounded-xl flex items-center justify-center text-white shadow-sm flex-shrink-0`}>
                    <i className="fa-solid fa-book-open"></i>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-slate-900 truncate">{course.name}</h3>
                    <p className="text-xs text-slate-500 font-medium">{course.code} • {course.credits} Credits</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 self-end sm:self-auto">
                  <button 
                    onClick={(e) => handleRegister(course, e)}
                    className="px-4 py-2 bg-red-700 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg hover:bg-red-800 transition-colors shadow-sm active:scale-95"
                  >
                    Register
                  </button>
                  <div className="text-right hidden sm:block">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{course.instructor.split(' ').pop()}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  <span>Course Progress</span>
                  <span className="text-slate-900">{course.progress}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full ${course.color} rounded-full transition-all duration-1000`} style={{ width: `${course.progress}%` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 h-fit sticky top-24">
          {selectedCourse ? (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className={`w-16 h-16 ${selectedCourse.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-4`}>
                <i className="fa-solid fa-scroll"></i>
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">{selectedCourse.name}</h2>
                <p className="text-sm text-red-700 font-bold mt-1">{selectedCourse.code}</p>
              </div>
              
              <div className="space-y-4 pt-4 border-t border-slate-50">
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Instructor</h4>
                  <div className="flex items-center space-x-3">
                    <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${selectedCourse.instructor}`} className="w-8 h-8 rounded-full" alt="inst" />
                    <p className="text-sm font-semibold text-slate-800">{selectedCourse.instructor}</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Description</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{selectedCourse.description}</p>
                </div>
                <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors">
                  Download Syllabus
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center text-slate-400">
              <i className="fa-solid fa-mouse-pointer text-4xl mb-4 opacity-20"></i>
              <p className="text-sm font-medium">Select a course to view details</p>
            </div>
          )}
        </div>
      </div>

      {/* Registration Modal */}
      {registeringCourse && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => !isSuccess && setRegisteringCourse(null)}
          />
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md relative z-10 overflow-hidden animate-in zoom-in-95 duration-200">
            {isSuccess ? (
              <div className="p-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl">
                  <i className="fa-solid fa-check"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Registration Successful!</h3>
                <p className="text-sm text-slate-500">Your unit <strong>{registeringCourse.code}</strong> has been successfully added to your semester load.</p>
              </div>
            ) : (
              <>
                <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
                  <h3 className="font-bold text-lg">Confirm Registration</h3>
                  <button onClick={() => setRegisteringCourse(null)} className="text-slate-400 hover:text-white transition-colors">
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
                <div className="p-8 space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className={`w-12 h-12 ${registeringCourse.color} rounded-xl flex items-center justify-center text-white text-xl shadow-sm flex-shrink-0`}>
                      <i className="fa-solid fa-book"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{registeringCourse.name}</h4>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{registeringCourse.code} • {registeringCourse.credits} CU</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">Academic Year</span>
                      <span className="font-bold text-slate-900">2023/2024</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500">Semester</span>
                      <span className="font-bold text-slate-900">Semester I</span>
                    </div>
                    <div className="flex justify-between text-xs pt-3 border-t border-slate-100">
                      <span className="text-slate-500">Registration Fee</span>
                      <span className="font-bold text-emerald-600">Free (Govt Aided)</span>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button 
                      onClick={() => setRegisteringCourse(null)}
                      className="flex-1 px-4 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={confirmRegistration}
                      className="flex-1 px-4 py-3 bg-red-700 text-white rounded-xl font-bold text-sm hover:bg-red-800 transition-all shadow-lg shadow-red-900/10 active:scale-95"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesView;
