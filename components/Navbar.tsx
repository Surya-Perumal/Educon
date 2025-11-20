import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';
import Button from './Button';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    if (target.startsWith('#') && (currentPage === 'home' || currentPage === 'college')) {
      // If we are already on a main page, scroll to section
      if (currentPage !== 'home') onNavigate('home');
      
      setTimeout(() => {
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      onNavigate(target);
      window.scrollTo(0, 0);
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', target: 'home' },
    { name: 'Services', target: '#services' },
    { name: 'Campus Program', target: 'college' },
    { name: 'Success Stories', target: '#testimonials' },
  ];

  const isAuthPage = currentPage === 'login' || currentPage === 'register' || currentPage === 'onboarding';

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || currentPage !== 'home' ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <a 
              href="#" 
              onClick={(e) => handleNavClick(e, 'home')}
              className="flex items-center gap-2 group"
            >
              <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-lg text-white">
                <GraduationCap size={24} />
              </div>
              <span className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary`}>
                EduVantage
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          {!isAuthPage && (
            <div className="hidden md:flex items-center md:space-x-3 lg:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.target.startsWith('#') ? link.target : '#'}
                  onClick={(e) => handleNavClick(e, link.target)}
                  className={`font-medium transition-colors whitespace-nowrap ${
                    (currentPage === 'college' && link.target === 'college') || (currentPage === 'home' && link.target === 'home')
                      ? 'text-primary font-semibold' 
                      : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex items-center gap-3 md:ml-2 lg:ml-4">
                <Button 
                    variant="white" 
                    size="sm" 
                    className="!text-gray-600 hover:!text-primary hover:bg-gray-50 border border-transparent hover:border-gray-200"
                    onClick={() => onNavigate('login')}
                >
                    Login
                </Button>
                <Button 
                    variant="primary" 
                    size="sm"
                    onClick={() => onNavigate('register')}
                >
                    Register
                </Button>
              </div>
            </div>
          )}

          {/* Mobile Menu Button */}
          {!isAuthPage && (
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-primary focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && !isAuthPage && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4 border-t border-gray-100">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.target.startsWith('#') ? link.target : '#'}
              className={`text-lg block border-b border-gray-100 pb-2 font-medium ${
                 (currentPage === 'college' && link.target === 'college') || (currentPage === 'home' && link.target === 'home')
                 ? 'text-primary' 
                 : 'text-gray-800'
              }`}
              onClick={(e) => handleNavClick(e, link.target)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2">
              <Button variant="outline" className="w-full justify-center" onClick={() => { onNavigate('login'); setIsMobileMenuOpen(false); }}>Login</Button>
              <Button variant="primary" className="w-full justify-center" onClick={() => { onNavigate('register'); setIsMobileMenuOpen(false); }}>Register</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;