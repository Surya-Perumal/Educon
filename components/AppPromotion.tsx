import React from 'react';
import { Smartphone, CheckCircle, Star } from 'lucide-react';

const AppPromotion: React.FC = () => {
  return (
    <section className="py-20 overflow-hidden bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 relative z-10 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
               <Smartphone size={16} className="text-secondary" />
               <span className="text-sm font-bold text-secondary tracking-wide uppercase">Now Available on Mobile</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Carry Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Dream University
              </span> <br />
              In Your Pocket
            </h2>

            <p className="text-lg text-gray-600 max-w-lg">
              Stay connected with your counselor, track application status in real-time, and access exclusive study materials anytime, anywhere.
            </p>

            <div className="space-y-4">
                {[
                    "Real-time application status updates",
                    "Instant chat with admission counselors",
                    "Offline access to study resources"
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                            <CheckCircle size={14} className="text-green-600" />
                        </div>
                        <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
                <button className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-all hover:-translate-y-1 shadow-lg group">
                    <svg className="w-8 h-8 text-white group-hover:text-gray-200 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-1.23 3.91-1.23 1.54.06 2.84.9 3.42 1.9-2.86 1.57-2.38 5.97.6 7.15-.44 1.19-1.05 2.46-2.01 4.41zM13 4.5c.7-1.6 2.2-2.5 3.8-2.5.1 1.7-1.6 3.2-3.8 3.2-.1-1.6-.1-1.9 0-.7z" />
                    </svg>
                    <div className="text-left">
                        <div className="text-[10px] uppercase tracking-wider opacity-80">Download on the</div>
                        <div className="text-sm font-bold leading-none">App Store</div>
                    </div>
                </button>
                <button className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-all hover:-translate-y-1 shadow-lg group">
                     <svg className="w-8 h-8 text-white group-hover:text-gray-200 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186c-.184.185-.428.262-.665.212-.409-.086-.709-.447-.709-.866V2.468c0-.419.3-.78.709-.866.236-.05.48.027.665.212zm11.62 11.63L5.95 22.74l11.85-6.787-2.57-2.507zm1.427-1.445L7.974 4.853l10.203 6.332-1.52 1.448-1.52-1.448zm-2.77-2.67L5.95 1.26l9.28 9.265 2.57-2.507z" />
                    </svg>
                    <div className="text-left">
                        <div className="text-[10px] uppercase tracking-wider opacity-80">Get it on</div>
                        <div className="text-sm font-bold leading-none">Google Play</div>
                    </div>
                </button>
            </div>
            
             <div className="flex items-center gap-4 pt-2 text-sm text-gray-500">
                <div className="flex -space-x-2">
                    {[1,2,3,4].map(i => (
                         <img key={i} src={`https://picsum.photos/50/50?random=${30+i}`} className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
                    ))}
                </div>
                <div className="flex items-center gap-1">
                     <div className="flex text-yellow-400">
                        {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                     </div>
                     <span className="font-semibold text-gray-900">4.9/5</span>
                     <span>(2k+ reviews)</span>
                </div>
            </div>

          </div>

          {/* Right Image - Phone Mockup */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            {/* Abstract background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative mx-auto border-gray-900 bg-gray-900 border-[12px] rounded-[2.5rem] h-[600px] w-full max-w-[300px] shadow-2xl ring-1 ring-gray-900/50">
                <div className="w-[120px] h-[18px] bg-gray-900 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
                <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[15px] top-[72px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[15px] top-[124px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[15px] top-[178px] rounded-s-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[15px] top-[142px] rounded-e-lg"></div>
                
                <div className="rounded-[1.8rem] overflow-hidden w-full h-full bg-white flex flex-col relative">
                    {/* App Header */}
                    <div className="pt-10 pb-4 px-6 bg-primary text-white flex justify-between items-center">
                        <span className="font-bold text-lg">EduVantage</span>
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center relative">
                             <div className="w-3 h-3 bg-green-400 rounded-full border-2 border-primary absolute -top-1 -right-1"></div>
                             <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
                        </div>
                    </div>
                    
                    {/* App Content Mockup */}
                    <div className="p-4 space-y-4 bg-gray-50 flex-1 overflow-hidden relative">
                        <div className="bg-white p-4 rounded-xl shadow-sm space-y-3 border border-gray-100">
                             <div className="flex justify-between">
                                <div className="h-2 w-1/3 bg-gray-200 rounded"></div>
                                <div className="h-2 w-1/4 bg-primary/20 rounded"></div>
                             </div>
                             <div className="h-8 w-full bg-indigo-50 rounded-lg flex items-center px-3 text-xs text-primary font-medium border border-indigo-100">
                                Status: <span className="text-green-600 font-bold ml-auto">Application Sent</span>
                             </div>
                        </div>

                         <div className="bg-white p-4 rounded-xl shadow-sm space-y-3 border border-gray-100">
                             <div className="flex items-center justify-between mb-2">
                                <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
                                <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center text-secondary text-[10px] font-bold">2</div>
                             </div>
                             <div className="space-y-2">
                                 <div className="flex gap-3 items-center">
                                     <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                                     <div className="flex-1 space-y-1">
                                         <div className="h-2 w-3/4 bg-gray-100 rounded"></div>
                                         <div className="h-2 w-1/2 bg-gray-100 rounded"></div>
                                     </div>
                                 </div>
                                  <div className="flex gap-3 items-center">
                                     <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                                     <div className="flex-1 space-y-1">
                                         <div className="h-2 w-2/3 bg-gray-100 rounded"></div>
                                     </div>
                                 </div>
                             </div>
                        </div>

                        <div className="bg-gradient-to-r from-secondary to-secondary-dark p-5 rounded-xl shadow-lg text-white relative overflow-hidden">
                             <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/10 rounded-full"></div>
                             <div className="text-sm font-bold mb-1">Premium Webinar</div>
                             <div className="text-xs opacity-90 mb-2">Ivy League Strategy Session</div>
                             <div className="w-20 h-6 bg-white/20 rounded text-[10px] flex items-center justify-center font-medium">Join Now</div>
                        </div>
                        
                         <div className="bg-white p-4 rounded-xl shadow-sm space-y-2 border border-gray-100 opacity-50">
                             <div className="h-2 w-1/3 bg-gray-200 rounded"></div>
                             <div className="h-16 w-full bg-gray-100 rounded-lg"></div>
                        </div>
                    </div>

                    {/* Bottom Nav Mockup */}
                    <div className="bg-white border-t border-gray-100 p-4 flex justify-between items-center px-8 pb-6">
                         <div className="flex flex-col items-center gap-1 text-primary">
                             <div className="w-5 h-5 bg-primary rounded-md"></div>
                         </div>
                         <div className="w-5 h-5 bg-gray-300 rounded-md"></div>
                         <div className="w-5 h-5 bg-gray-300 rounded-md"></div>
                         <div className="w-5 h-5 bg-gray-300 rounded-md"></div>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppPromotion;