
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardHome from './components/DashboardHome';
import CoursesView from './components/CoursesView';
import GradesView from './components/GradesView';
import ScheduleView from './components/ScheduleView';
import SettingsView from './components/SettingsView';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardHome />;
      case 'courses':
        return <CoursesView />;
      case 'grades':
        return <GradesView />;
      case 'schedule':
        return <ScheduleView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-50 overflow-x-hidden">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      
      {/* Main Content Area */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-10 lg:px-12 pb-12 flex-1 flex flex-col">
          {/* Header is now sticky within this flex container, but we handle its 'island' look inside Header.tsx */}
          <Header onMenuToggle={() => setIsSidebarOpen(true)} />
          
          {/* Main View Area - spacing refined for the floating header */}
          <div className="pb-24 md:pb-0 mt-2 md:mt-4">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
