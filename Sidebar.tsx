
import React from 'react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, isOpen, onClose }) => {
  const menuItems = [
    { id: 'dashboard', icon: 'fa-house', label: 'Student Home' },
    { id: 'courses', icon: 'fa-book-open', label: 'Academic Courses' },
    { id: 'grades', icon: 'fa-chart-simple', label: 'My CGPA' },
    { id: 'schedule', icon: 'fa-calendar-days', label: 'Timetable' },
    { id: 'settings', icon: 'fa-gear', label: 'Account Settings' },
  ];

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    if (window.innerWidth < 768) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container */}
      <div className={`
        fixed left-0 top-0 h-screen bg-slate-900 border-r border-slate-800 flex flex-col z-50 
        transition-transform duration-300 ease-in-out w-64
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0
      `}>
        <div className="p-6 flex flex-col space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-700 rounded-lg flex items-center justify-center text-white shadow-lg">
                <i className="fa-solid fa-graduation-cap text-xl"></i>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Makerere</span>
            </div>
            <button onClick={onClose} className="md:hidden text-slate-400 hover:text-white">
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
          </div>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest pl-13">We Build for the Future</p>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                activeTab === item.id
                  ? 'bg-red-700/10 text-red-500 border border-red-700/20 font-semibold'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <i className={`fa-solid ${item.icon} w-5`}></i>
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Moses"
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-red-700 shadow-sm"
            />
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-semibold text-white truncate">Moses Kato</p>
              <p className="text-[10px] text-slate-500 truncate">Year 3 • LLB Student</p>
            </div>
            <button className="text-slate-500 hover:text-red-500">
              <i className="fa-solid fa-right-from-bracket"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
