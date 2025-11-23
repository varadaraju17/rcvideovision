import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';

export default function Home({ setIsPortfolioModalOpen }) {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio setIsPortfolioModalOpen={setIsPortfolioModalOpen} />
      <About />
      <Testimonials />
      <Clients />
      <Contact />
    </>
  );
}
