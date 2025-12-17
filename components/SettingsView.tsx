
import React, { useState } from 'react';

const SettingsView: React.FC = () => {
  const [notifs, setNotifs] = useState(true);
  const [privacy, setPrivacy] = useState(false);

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Account Settings</h1>
        <p className="text-sm text-slate-500">Manage your profile, preferences, and portal security.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
            <div className="relative">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Moses" className="w-24 h-24 rounded-full border-4 border-white shadow-lg" alt="Pfp" />
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-red-700 text-white rounded-full flex items-center justify-center shadow-md border-2 border-white hover:scale-110 transition-transform">
                <i className="fa-solid fa-camera text-xs"></i>
              </button>
            </div>
            <h3 className="mt-4 font-bold text-slate-900">Moses Kato</h3>
            <p className="text-xs text-slate-500">20/U/12345/PS</p>
            <span className="mt-2 px-3 py-1 bg-red-50 text-red-700 text-[10px] font-bold rounded-full uppercase">Bachelor of Laws (LLB)</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 space-y-4">
             <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Portal Links</h4>
             <button className="w-full text-left p-3 rounded-xl hover:bg-slate-50 transition-colors text-xs font-bold text-slate-600 flex items-center justify-between group">
               <span>Change Password</span>
               <i className="fa-solid fa-chevron-right opacity-0 group-hover:opacity-100"></i>
             </button>
             <button className="w-full text-left p-3 rounded-xl hover:bg-slate-50 transition-colors text-xs font-bold text-slate-600 flex items-center justify-between group text-red-600">
               <span>Deactivate Account</span>
               <i className="fa-solid fa-chevron-right opacity-0 group-hover:opacity-100"></i>
             </button>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-2xl border border-slate-100 space-y-6">
            <h3 className="text-lg font-bold text-slate-900">Personal Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase">First Name</label>
                <input type="text" defaultValue="Moses" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:border-red-700 outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Surname</label>
                <input type="text" defaultValue="Kato" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:border-red-700 outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Email Address</label>
                <input type="email" defaultValue="moses.kato@students.mak.ac.ug" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:border-red-700 outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Phone Number</label>
                <input type="text" defaultValue="+256 770 000 000" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:border-red-700 outline-none" />
              </div>
            </div>
            <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-slate-800 transition-all">
              Save Profile Changes
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-100 space-y-6">
            <h3 className="text-lg font-bold text-slate-900">Preferences</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Email Notifications</h4>
                  <p className="text-[10px] text-slate-500">Receive alerts for new grades and deadlines.</p>
                </div>
                <button 
                  onClick={() => setNotifs(!notifs)}
                  className={`w-12 h-6 rounded-full transition-colors relative ${notifs ? 'bg-red-700' : 'bg-slate-300'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${notifs ? 'left-7' : 'left-1'}`}></div>
                </button>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Private Profile</h4>
                  <p className="text-[10px] text-slate-500">Hide your research interests from other students.</p>
                </div>
                <button 
                  onClick={() => setPrivacy(!privacy)}
                  className={`w-12 h-6 rounded-full transition-colors relative ${privacy ? 'bg-red-700' : 'bg-slate-300'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${privacy ? 'left-7' : 'left-1'}`}></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;
