import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, Bot, Loader2 } from 'lucide-react';
import { getCareerAdvice } from '../services/geminiService';
import { ChatMessage, LoadingState } from '../types';
import Button from './Button';

const AIAdvisor: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm EduBot. Ask me anything about universities, courses, or career paths!" }
  ]);
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoadingState(LoadingState.LOADING);

    try {
      // Convert chat history to Gemini format
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const responseText = await getCareerAdvice(input, history);
      
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
      setLoadingState(LoadingState.SUCCESS);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting right now. Please check your internet or API key.", isError: true }]);
      setLoadingState(LoadingState.ERROR);
    }
  };

  return (
    <section id="advisor" className="py-20 bg-gradient-to-b from-indigo-900 to-purple-900 text-white relative overflow-hidden">
       {/* Background abstract shapes */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
         <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
         <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
       </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side Info */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <Sparkles size={16} className="text-yellow-400" />
              <span className="text-sm font-medium text-gray-100">Powered by Gemini 2.5 Flash</span>
            </div>
            <h2 className="text-4xl font-bold">Unsure about your path? <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Ask our AI Advisor.</span></h2>
            <p className="text-indigo-100 text-lg leading-relaxed">
              Get instant, personalized advice on university selection, major trends, and career prospects. Our AI is trained to guide you towards your academic potential.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <Bot size={24} className="text-blue-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">24/7 Availability</h4>
                  <p className="text-sm text-indigo-200">Get answers whenever inspiration strikes, day or night.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="bg-secondary/20 p-2 rounded-lg">
                  <Sparkles size={24} className="text-purple-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Data-Driven Insights</h4>
                  <p className="text-sm text-indigo-200">Advice backed by global education trends and data.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Chat Interface */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl overflow-hidden flex flex-col h-[500px]">
            
            {/* Chat Header */}
            <div className="p-4 border-b border-white/10 bg-black/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
                  <Bot size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">EduBot</h3>
                  <p className="text-xs text-indigo-200 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span> Online
                  </p>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-indigo-500' : 'bg-secondary'}`}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`p-3 rounded-2xl max-w-[80%] text-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white rounded-tr-none' 
                      : 'bg-white/90 text-gray-800 rounded-tl-none'
                  } ${msg.isError ? 'border-2 border-red-500' : ''}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {loadingState === LoadingState.LOADING && (
                <div className="flex items-center gap-2 text-indigo-200 text-sm ml-12">
                  <Loader2 size={16} className="animate-spin" /> Thinking...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-black/20 border-t border-white/10">
              <form onSubmit={handleSend} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Harvard, Engineering, etc..."
                  className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:bg-white/20 transition-all"
                />
                <Button 
                  type="submit" 
                  disabled={loadingState === LoadingState.LOADING || !input.trim()} 
                  className="!p-2 !rounded-xl !w-12 !h-12 flex items-center justify-center bg-secondary hover:bg-secondary-dark"
                >
                  <Send size={20} />
                </Button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAdvisor;