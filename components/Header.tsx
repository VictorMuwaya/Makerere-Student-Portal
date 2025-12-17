
import React, { useState, useEffect } from 'react';
import NotificationCenter from './NotificationCenter';
import { MOCK_NOTIFICATIONS } from '../constants';
import { Notification } from '../types';

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const [notifications, setNotifications] = useState<Notification[]>(MOCK_NOTIFICATIONS);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const markAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  return (
    <div className={`sticky top-0 z-40 transition-all duration-500 ease-in-out py-4 ${isScrolled ? 'px-2 md:px-4' : 'px-0'}`}>
      <header 
        className={`flex items-center justify-between h-16 md:h-20 px-4 md:px-6 transition-all duration-500 ${
          isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.05),0_5px_15px_-3px_rgba(0,0,0,0.02)] rounded-2xl md:rounded-3xl' 
          : 'bg-transparent border-transparent'
        }`}
      >
        <div className="flex items-center space-x-4 flex-1">
          {/* Flyout Menu Button - Floating Style */}
          <button 
            onClick={onMenuToggle}
            className={`md:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-all active:scale-90 shadow-sm ${
              isScrolled ? 'bg-slate-900 text-white shadow-slate-900/20' : 'bg-white border border-slate-200 text-slate-600'
            }`}
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          {/* Search Area */}
          <div className="hidden md:flex flex-1 max-w-md">
            <div className={`relative w-full transition-all duration-300 ${isScrolled ? 'scale-95 origin-left' : ''}`}>
              <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"></i>
              <input 
                type="text" 
                placeholder="Search resources..."
                className={`w-full rounded-xl py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-red-700/10 focus:border-red-700/50 transition-all ${
                  isScrolled ? 'bg-slate-100/50 border-transparent' : 'bg-white border border-slate-200'
                }`}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3 md:space-x-5">
          {/* Mobile Search Button - Floating Style */}
          <button className={`md:hidden w-10 h-10 flex items-center justify-center rounded-xl shadow-sm transition-all active:scale-90 ${
            isScrolled ? 'bg-white border border-slate-100 text-slate-500' : 'bg-white border border-slate-200 text-slate-500'
          }`}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>

          {/* Notification Button - Floating Style */}
          <div className="relative">
            <button 
              onClick={() => setIsNotifOpen(!isNotifOpen)}
              className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all relative group shadow-sm active:scale-95 ${
                isNotifOpen 
                ? 'bg-red-700 text-white shadow-red-700/20' 
                : isScrolled 
                  ? 'bg-white border border-slate-100 text-slate-600 hover:text-red-700 hover:border-red-100' 
                  : 'bg-white border border-slate-200 text-slate-500 hover:border-red-200 hover:text-red-700'
              }`}
            >
              <i className="fa-solid fa-bell group-hover:shake-animation"></i>
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-700 text-white text-[10px] font-bold rounded-full border-2 border-white flex items-center justify-center shadow-sm">
                  {unreadCount}
                </span>
              )}
            </button>
            
            <NotificationCenter 
              notifications={notifications}
              isOpen={isNotifOpen}
              onClose={() => setIsNotifOpen(false)}
              onMarkAsRead={markAsRead}
              onMarkAllAsRead={markAllAsRead}
            />
          </div>

          {/* Profile Section - Enhanced Presence */}
          <div className="flex items-center space-x-2 md:space-x-3 md:pl-5 md:border-l md:border-slate-200/50">
            <div className="hidden sm:block text-right">
              <p className={`text-xs font-bold leading-none transition-colors ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>Moses Kato</p>
              <p className="text-[9px] text-red-700 mt-1 uppercase font-black tracking-widest opacity-80">Year 3 • LLB</p>
            </div>
            <div className={`relative transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Moses"
                alt="Profile"
                className={`w-10 h-10 md:w-11 md:h-11 rounded-full border-2 shadow-sm transition-all ${isScrolled ? 'border-red-700/20' : 'border-white'}`}
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
