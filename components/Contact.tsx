import React from 'react';
import Button from './Button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="grid lg:grid-cols-2">
            
            {/* Contact Info */}
            <div className="bg-primary p-12 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-4">Let's talk about your future.</h3>
                <p className="text-blue-100 mb-8 text-lg">Book a free consultation with our senior education strategists today.</p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <span className="text-lg">hello@eduvantage.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Phone size={20} />
                    </div>
                    <span className="text-lg">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <MapPin size={20} />
                    </div>
                    <span className="text-lg">123 Education Lane, New York, NY</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <div className="flex gap-4">
                  {/* Social placeholders */}
                  <div className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors cursor-pointer"></div>
                  <div className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors cursor-pointer"></div>
                  <div className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors cursor-pointer"></div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-12 bg-white">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Interest</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-600 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                    <option>University Admissions</option>
                    <option>Career Counseling</option>
                    <option>Test Prep</option>
                    <option>Visa Support</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Message</label>
                  <textarea className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all h-32 resize-none" placeholder="Tell us about your goals..."></textarea>
                </div>

                <Button className="w-full" size="lg">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;