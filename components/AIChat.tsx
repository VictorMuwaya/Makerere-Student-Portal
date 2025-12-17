
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { Message } from '../types';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Welcome to the Academic Advisor portal. I'm your MUK AI Guide. Whether you're at the Law School, CEDAT, or CoBAMS, I'm here to help you build for the future. How can I assist with your studies today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await geminiService.chatWithAssistant(input, messages);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: "Apologies, the advisor portal is experiencing heavy traffic. Let's try again shortly." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-14rem)] md:h-[calc(100vh-12rem)] flex flex-col bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      <div className="p-4 md:p-5 border-b border-slate-100 flex items-center justify-between bg-slate-900 text-white">
        <div className="flex items-center space-x-3 md:space-x-4">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-red-700 rounded-xl flex items-center justify-center shadow-lg">
            <i className="fa-solid fa-user-graduate text-white"></i>
          </div>
          <div>
            <h3 className="text-sm md:text-base font-extrabold tracking-tight">MUK AI Advisor</h3>
            <div className="flex items-center space-x-1">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-[9px] uppercase font-bold text-slate-400">Ivory Tower Online</span>
            </div>
          </div>
        </div>
        <button className="w-8 h-8 rounded-lg hover:bg-slate-800 flex items-center justify-center text-slate-400">
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-6 bg-slate-50/30">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}>
            <div className={`max-w-[90%] md:max-w-[85%] p-3 md:p-4 rounded-2xl text-xs md:text-sm leading-relaxed shadow-sm ${
              msg.role === 'user' 
                ? 'bg-red-700 text-white rounded-tr-none' 
                : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-200 p-3 md:p-4 rounded-2xl rounded-tl-none shadow-sm">
              <div className="flex space-x-1">
                <div className="w-1.5 h-1.5 bg-red-700 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-red-700 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-1.5 h-1.5 bg-red-700 rounded-full animate-bounce [animation-delay:-.5s]"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-3 md:p-4 border-t border-slate-100 flex space-x-2 md:space-x-3 bg-white">
        <div className="flex-1 relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask anything..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 md:py-3 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-red-700/20 focus:border-red-700"
          />
        </div>
        <button 
          onClick={handleSend}
          disabled={!input.trim() || isTyping}
          className="bg-red-700 text-white w-10 md:w-auto md:px-6 rounded-xl font-bold flex items-center justify-center hover:bg-red-800 transition-all shadow-lg disabled:opacity-50"
        >
          <span className="hidden md:inline mr-2">Send</span>
          <i className="fa-solid fa-paper-plane text-xs"></i>
        </button>
      </div>
    </div>
  );
};

export default AIChat;
