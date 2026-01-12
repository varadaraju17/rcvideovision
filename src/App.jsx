import React, { useState } from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import RouteHandler from './components/RouteHandler';
import AnimatedBackground from './components/AnimatedBackground';
import BackToTop from './components/BackToTop';

import SEO from './components/SEO';

export default function App() {
  const [isPortfolioModalOpen, setIsPortfolioModalOpen] = useState(false);

  return (
    <div className="bg-primary text-slate-light min-h-screen">
      <SEO />
      <AnimatedBackground />
      <div className="relative z-10">
        <RouteHandler />
        <Header isPortfolioModalOpen={isPortfolioModalOpen} />
        <main>
          <Home setIsPortfolioModalOpen={setIsPortfolioModalOpen} />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}
