import React from 'react';
import { GraduationCap, Briefcase, MapPin, FileText, UserCheck, Lightbulb } from 'lucide-react';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "University Admissions",
      description: "Comprehensive guidance from university selection to application submission for Ivy League and top global universities.",
      icon: <GraduationCap size={32} />,
    },
    {
      title: "Career Counseling",
      description: "In-depth psychometric analysis and counseling to help you choose the right career path tailored to your strengths.",
      icon: <Briefcase size={32} />,
    },
    {
      title: "Visa Assistance",
      description: "End-to-end support for student visas, including documentation, interview preparation, and financial planning.",
      icon: <MapPin size={32} />,
    },
    {
      title: "Test Preparation",
      description: "Elite coaching for SAT, GRE, GMAT, IELTS, and TOEFL with personalized study plans and mock tests.",
      icon: <FileText size={32} />,
    },
    {
      title: "Profile Building",
      description: "Strategic mentorship to enhance your extracurriculars, research papers, and internships to stand out.",
      icon: <UserCheck size={32} />,
    },
    {
      title: "Scholarship Guidance",
      description: "Expert help in identifying and applying for scholarships to reduce your financial burden.",
      icon: <Lightbulb size={32} />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-2">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Education Services</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end support to ensure you reach your academic goals with ease and confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl border border-gray-100 bg-white hover:bg-gray-50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;