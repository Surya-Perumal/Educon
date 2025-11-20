import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "Stanford University, Class of 2027",
      content: "EduVantage changed my life. The counselors didn't just edit my essays; they helped me find my voice. I never thought I'd get into my dream school!",
      avatar: "https://picsum.photos/100/100?random=10"
    },
    {
      name: "Michael Chen",
      role: "Masters in CS, MIT",
      content: "The AI Advisor tool was surprisingly helpful for narrowing down my niche, and the human mentors finalized a perfect strategy. Highly recommended.",
      avatar: "https://picsum.photos/100/100?random=11"
    },
    {
      name: "Emily Davis",
      role: "Design Student, Parsons",
      content: "They understood my creative portfolio needs immediately. The visa process was smooth, and I felt supported every step of the way.",
      avatar: "https://picsum.photos/100/100?random=12"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-gray-600">Join thousands of students who have achieved their dreams with us.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 relative">
              <Quote size={40} className="text-primary/10 absolute top-4 right-4" />
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-sm text-secondary font-medium">{item.role}</p>
                </div>
              </div>
              
              <p className="text-gray-600 italic leading-relaxed">
                "{item.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;