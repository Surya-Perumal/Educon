import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight, GraduationCap } from 'lucide-react';
import Button from './Button';

interface AuthPageProps {
  initialMode: 'login' | 'register';
  onNavigate: (page: string) => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ initialMode, onNavigate }) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication logic
    if (mode === 'register') {
      onNavigate('onboarding');
    } else {
      onNavigate('home');
    }
  };

  return (
    <div className="min-h-screen flex pt-20">
      {/* Left Side - Image & Branding (Hidden on mobile) */}
      <div className="hidden lg:flex w-1/2 bg-gray-900 relative items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-60">
             <img 
               src="https://picsum.photos/1200/1200?random=90" 
               alt="Student Success" 
               className="w-full h-full object-cover mix-blend-overlay"
             />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 mix-blend-multiply"></div>
        
        <div className="relative z-10 p-12 text-white max-w-lg">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-white/20">
             <GraduationCap size={32} />
          </div>
          <h1 className="text-4xl font-bold mb-6 leading-tight">Start Your Academic Journey With Confidence</h1>
          <p className="text-lg text-indigo-100 leading-relaxed mb-8">
            Join over 10,000+ students who have found their dream universities through EduVantage's AI-powered guidance.
          </p>
          
          <div className="flex gap-4">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <p className="text-2xl font-bold">98%</p>
              <p className="text-sm text-indigo-200">Acceptance Rate</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
              <p className="text-2xl font-bold">$5M+</p>
              <p className="text-sm text-indigo-200">Scholarships</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              {mode === 'login' ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="mt-2 text-gray-600">
              {mode === 'login' 
                ? 'Enter your details to access your dashboard.' 
                : 'Get started with your free consultation.'}
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              {mode === 'register' && (
                <div className="relative">
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
              )}

              <div className="relative">
                <label className="text-sm font-medium text-gray-700 mb-1 block">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="relative">
                 <div className="flex justify-between items-center mb-1">
                    <label className="text-sm font-medium text-gray-700">Password</label>
                    {mode === 'login' && (
                        <a href="#" className="text-xs font-medium text-primary hover:text-primary-dark">Forgot password?</a>
                    )}
                 </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full flex items-center justify-center gap-2 py-4 text-lg"
            >
              {mode === 'login' ? 'Sign In' : 'Create Account'} <ArrowRight size={20} />
            </Button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
                <button 
                  type="button"
                  onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
                  className="font-medium text-primary hover:text-primary-dark transition-colors"
                >
                  {mode === 'login' ? 'Sign up for free' : 'Log in'}
                </button>
              </p>
            </div>
            
            <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <button type="button" className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                    </svg>
                    Google
                </button>
                <button type="button" className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                     <svg className="h-5 w-5 mr-2 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;