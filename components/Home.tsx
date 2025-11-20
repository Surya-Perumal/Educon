import React from 'react';
import Hero from './Hero';
import Services from './Services';
import AIAdvisor from './AIAdvisor';
import Testimonials from './Testimonials';
import Contact from './Contact';
import AppPromotion from './AppPromotion';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <div id="about"></div>
      <Services />
      <AppPromotion />
      <AIAdvisor />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;