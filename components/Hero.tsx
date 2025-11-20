import React from 'react';
import { ArrowRight, Globe, BookOpen, Users } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gray-50">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-sm font-medium text-gray-600">Accepting applications for Fall 2025</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Navigate Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Global Education
              </span> <br/>
              Journey
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg">
              Expert guidance for university admissions, career planning, and visa processing. We turn your academic dreams into reality with personalized strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#advisor">
                <Button variant="primary" size="lg" className="gap-2">
                  Ask AI Advisor <ArrowRight size={20} />
                </Button>
              </a>
              <a href="#contact">
                 <Button variant="outline" size="lg">Free Consultation</Button>
              </a>
            </div>

            <div className="pt-8 flex items-center gap-8 text-gray-500">
              <div className="flex items-center gap-2">
                <Globe size={20} className="text-primary" />
                <span className="font-medium">50+ Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} className="text-secondary" />
                <span className="font-medium">10k+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen size={20} className="text-primary" />
                <span className="font-medium">98% Success Rate</span>
              </div>
            </div>
          </div>

          {/* Hero Image Grid */}
          <div className="relative">
             <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4 translate-y-8">
                 <img 
                   src="https://picsum.photos/400/500?random=1" 
                   alt="Student studying" 
                   className="rounded-2xl shadow-2xl object-cover h-64 w-full hover:scale-[1.02] transition-transform duration-500"
                 />
                 <img 
                   src="https://picsum.photos/400/400?random=2" 
                   alt="University campus" 
                   className="rounded-2xl shadow-2xl object-cover h-48 w-full hover:scale-[1.02] transition-transform duration-500"
                 />
               </div>
               <div className="space-y-4">
                 <img 
                   src="https://picsum.photos/400/400?random=3" 
                   alt="Graduation" 
                   className="rounded-2xl shadow-2xl object-cover h-48 w-full hover:scale-[1.02] transition-transform duration-500"
                 />
                 <img 
                   src="https://picsum.photos/400/500?random=4" 
                   alt="Counseling session" 
                   className="rounded-2xl shadow-2xl object-cover h-64 w-full hover:scale-[1.02] transition-transform duration-500"
                 />
               </div>
             </div>
             
             {/* Floating Card */}
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-[bounce_3s_infinite]">
               <div className="bg-green-100 p-2 rounded-full text-green-600">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
               </div>
               <div>
                 <p className="text-sm font-bold text-gray-900">Harvard Accepted</p>
                 <p className="text-xs text-gray-500">Just now</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;