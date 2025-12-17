
import React from 'react';
import { Notification } from '../types';

interface NotificationCenterProps {
  notifications: Notification[];
  isOpen: boolean;
  onClose: () => void;
  onMarkAsRead: (id: string) => void;
  onMarkAllAsRead: () => void;
}

const NotificationCenter: React.FC<NotificationCenterProps> = ({
  notifications,
  isOpen,
  onClose,
  onMarkAsRead,
  onMarkAllAsRead
}) => {
  if (!isOpen) return null;

  const getTypeStyles = (type: Notification['type']) => {
    switch (type) {
      case 'academic': return { icon: 'fa-graduation-cap', color: 'text-red-700', bg: 'bg-red-50' };
      case 'financial': return { icon: 'fa-money-bill-wave', color: 'text-emerald-700', bg: 'bg-emerald-50' };
      case 'system': return { icon: 'fa-server', color: 'text-slate-700', bg: 'bg-slate-100' };
      case 'social': return { icon: 'fa-users', color: 'text-amber-700', bg: 'bg-amber-50' };
      default: return { icon: 'fa-bell', color: 'text-slate-700', bg: 'bg-slate-100' };
    }
  };

  return (
    <div className="absolute right-0 mt-3 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50 animate-in slide-in-from-top-2 duration-200">
      <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white">
        <h3 className="font-bold text-slate-900">Notifications</h3>
        <button 
          onClick={onMarkAllAsRead}
          className="text-[10px] font-bold text-red-700 uppercase tracking-tighter hover:underline"
        >
          Mark all as read
        </button>
      </div>

      <div className="max-h-[400px] overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="p-8 text-center">
            <i className="fa-solid fa-bell-slash text-slate-200 text-3xl mb-3"></i>
            <p className="text-sm text-slate-400 font-medium">No notifications yet</p>
          </div>
        ) : (
          notifications.map((n) => {
            const styles = getTypeStyles(n.type);
            return (
              <div 
                key={n.id} 
                onClick={() => onMarkAsRead(n.id)}
                className={`p-4 border-b border-slate-50 flex items-start space-x-3 cursor-pointer transition-colors hover:bg-slate-50 ${!n.isRead ? 'bg-red-50/20' : ''}`}
              >
                <div className={`w-10 h-10 ${styles.bg} ${styles.color} rounded-xl flex-shrink-0 flex items-center justify-center`}>
                  <i className={`fa-solid ${styles.icon}`}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <h4 className="text-sm font-bold text-slate-900 truncate pr-2">{n.title}</h4>
                    {!n.isRead && (
                      <span className="w-2 h-2 bg-red-700 rounded-full flex-shrink-0 animate-pulse"></span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{n.message}</p>
                  <p className="text-[10px] text-slate-400 mt-2 font-medium">{n.timestamp}</p>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="p-3 bg-slate-50 border-t border-slate-100 text-center">
        <button className="text-xs font-bold text-slate-500 hover:text-slate-700 transition-colors">
          View All Updates
        </button>
      </div>
    </div>
  );
};

export default NotificationCenter;
