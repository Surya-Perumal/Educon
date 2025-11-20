import React, { useState, useEffect } from 'react';
import { Users, Trophy, BookOpen, Calendar, Target, Globe, CheckCircle, ArrowRight, ChevronLeft, ChevronRight, Star, HelpCircle, Plus, Minus, GraduationCap, Rocket } from 'lucide-react';
import Button from './Button';

const CollegePage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const stats = [
    { label: "Partner Colleges", value: "50+", icon: <BookOpen className="w-6 h-6" /> },
    { label: "Students Placed", value: "10k+", icon: <Users className="w-6 h-6" /> },
    { label: "Scholarships Secured", value: "$5M+", icon: <Trophy className="w-6 h-6" /> },
    { label: "Visa Success Rate", value: "99%", icon: <Globe className="w-6 h-6" /> },
  ];

  const services = [
    {
      title: "On-Campus Workshops",
      description: "Interactive sessions on resume building, SOP writing, and interview preparation directly at your campus.",
      icon: <Users className="text-white" size={24} />,
      color: "bg-blue-500"
    },
    {
      title: "University Fair Management",
      description: "We bring top global universities to your college for direct interaction and spot assessments.",
      icon: <Globe className="text-white" size={24} />,
      color: "bg-purple-500"
    },
    {
      title: "Faculty Development",
      description: "Training programs for professors to guide students on latest global education trends and letters of recommendation.",
      icon: <Target className="text-white" size={24} />,
      color: "bg-indigo-500"
    },
    {
      title: "Placement Support",
      description: "Connecting final year students with international internship opportunities and graduate programs.",
      icon: <Trophy className="text-white" size={24} />,
      color: "bg-pink-500"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Robert Vance",
      role: "Dean, St. Xavier's College",
      quote: "Partnering with EduVantage transformed our placement statistics. Their AI-driven approach combined with on-ground workshops gave our students a massive competitive edge.",
      image: "https://picsum.photos/100/100?random=50"
    },
    {
      name: "Elena Rodriguez",
      role: "Principal, City International School",
      quote: "The level of detail in their career counseling is unmatched. We saw a 40% increase in Ivy League acceptances within just one year of collaboration.",
      image: "https://picsum.photos/100/100?random=51"
    },
    {
      name: "Prof. Alan Grant",
      role: "HOD Engineering, Tech Institute",
      quote: "Their technical workshops for SOP writing were a game changer. They know exactly what admissions committees are looking for.",
      image: "https://picsum.photos/100/100?random=52"
    }
  ];

  const faqs = [
    {
      question: "How does the partnership model work?",
      answer: "We offer flexible partnership models ranging from single-event workshops to year-long retainers where we set up a dedicated counseling cell within your campus."
    },
    {
      question: "Is there a cost for students?",
      answer: "This depends on the partnership structure. Some colleges subsidize the cost, while others opt for a pay-per-student model. We can customize this to fit your institution's budget."
    },
    {
      question: "Do you provide support for STEM and Arts streams?",
      answer: "Yes! We have specialized counselors for Engineering, Medicine, Arts, Humanities, and Business programs, ensuring every student gets relevant guidance."
    },
    {
      question: "Can you help with university MOUs?",
      answer: "Absolutely. We facilitate Memorandum of Understanding (MOU) signings between your institution and international universities for student exchange programs."
    }
  ];

  const steps = [
    { title: "Needs Assessment", desc: "We analyze your student demographics and goals.", icon: <Target size={20} /> },
    { title: "Custom Roadmap", desc: "Designing a calendar of workshops and fairs.", icon: <Calendar size={20} /> },
    { title: "Implementation", desc: "Executing sessions with expert counselors.", icon: <Rocket size={20} /> },
    { title: "Global Success", desc: "Students secure admits and scholarships.", icon: <GraduationCap size={20} /> },
  ];

  // Auto-slide testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
           <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-sm font-medium text-gray-100">Now Partnering for 2025</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Empowering <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Campus Ambitions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We bridge the gap between your college curriculum and global career opportunities. 
              Tailored solutions for universities to enhance their students' employability and higher education prospects.
            </p>
            <div className="flex gap-4">
              <Button variant="primary" size="lg">Partner With Us</Button>
              <Button variant="white" size="lg">Download Brochure</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors group">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Partnership Roadmap</h2>
            <p className="text-gray-600">A streamlined process to elevate your institution's global standing.</p>
          </div>
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
            
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center group">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Campus Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive support systems designed specifically for educational institutions.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex gap-6">
                <div className={`w-14 h-14 rounded-xl ${service.color} flex-shrink-0 flex items-center justify-center shadow-lg transform -translate-y-2 text-white`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Gallery (Masonry Style) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">EduVantage In Action</h2>
            <p className="text-gray-600">Glimpses from our recent campus drives and seminars.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            <div className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl">
               <img src="https://picsum.photos/800/800?random=101" alt="Seminar" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white font-medium">International Education Fair 2024</p>
               </div>
            </div>
            <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl">
               <img src="https://picsum.photos/400/400?random=102" alt="Workshop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="col-span-1 row-span-2 relative group overflow-hidden rounded-2xl">
               <img src="https://picsum.photos/400/800?random=103" alt="Counseling" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white font-medium">1-on-1 Counseling</p>
               </div>
            </div>
            <div className="col-span-1 row-span-1 relative group overflow-hidden rounded-2xl">
               <img src="https://picsum.photos/400/400?random=104" alt="Success" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="col-span-2 row-span-1 relative group overflow-hidden rounded-2xl">
               <img src="https://picsum.photos/800/400?random=105" alt="Team" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white font-medium">Faculty Training Session</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden text-white">
        <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
        {/* Abstract Circles */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Trusted by Academic Leaders</h2>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                {testimonials.map((item, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 text-center">
                      <div className="flex justify-center mb-6">
                        <div className="flex gap-1 text-yellow-300">
                          {[1,2,3,4,5].map(star => <Star key={star} fill="currentColor" size={20} />)}
                        </div>
                      </div>
                      <p className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">"{item.quote}"</p>
                      <div className="flex flex-col items-center">
                        <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full border-2 border-white/50 mb-3" />
                        <h4 className="font-bold text-lg">{item.name}</h4>
                        <p className="text-indigo-200">{item.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevTestimonial} 
              className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
            >
              <ChevronLeft size={32} />
            </button>
            <button 
              onClick={nextTestimonial} 
              className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors"
            >
              <ChevronRight size={32} />
            </button>
            
            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${currentTestimonial === idx ? 'bg-white w-8' : 'bg-white/40'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Questions</h2>
            <p className="text-gray-600">Everything you need to know about our institutional partnerships.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button 
                  onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className={`font-semibold text-lg ${activeAccordion === idx ? 'text-primary' : 'text-gray-800'}`}>
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-full transition-colors ${activeAccordion === idx ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-500'}`}>
                    {activeAccordion === idx ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    activeAccordion === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotion/CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-900 to-primary rounded-3xl overflow-hidden shadow-2xl relative">
            {/* Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-12 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm mb-6">
                  <Calendar size={14} />
                  <span>Limited Time Offer</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Get a Free Campus Assessment
                </h2>
                <p className="text-indigo-100 mb-8 text-lg">
                  Schedule a visit from our expert counselors. We'll analyze your current student profile and suggest a customized roadmap for higher education success.
                </p>
                
                <ul className="space-y-3 mb-8">
                  {["Free 30-min strategy session", "Complimentary student profile audit", "Access to our digital resource library"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-indigo-100">
                      <CheckCircle size={18} className="text-green-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </ul>

                <Button variant="white" size="lg" className="text-primary hover:bg-gray-100">
                  Schedule Visit <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>
              
              <div className="h-full min-h-[300px] bg-gray-800 relative">
                 <img 
                   src="https://picsum.photos/800/800?random=99" 
                   alt="Campus Seminar" 
                   className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                 />
                 <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollegePage;