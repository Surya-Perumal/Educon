import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CollegePage from './components/CollegePage';
import AuthPage from './components/AuthPage';
import Onboarding from './components/Onboarding';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'college':
        return <CollegePage />;
      case 'login':
        return <AuthPage initialMode="login" onNavigate={setCurrentPage} />;
      case 'register':
        return <AuthPage initialMode="register" onNavigate={setCurrentPage} />;
      case 'onboarding':
        return <Onboarding onComplete={() => setCurrentPage('home')} />;
      default:
        return <Home />;
    }
  };

  // Determine if we should show the footer (hide on auth/onboarding for cleaner look)
  const showFooter = !['login', 'register', 'onboarding'].includes(currentPage);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-primary selection:text-white">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderContent()}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

export default App;