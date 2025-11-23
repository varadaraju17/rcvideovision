import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const NavLink = ({ to, children }) => (
  <Link to={to} className="relative group text-lg md:text-sm font-medium py-2 transition-colors duration-300">
    <span className="text-slate-light group-hover:text-accent">{children}</span>
    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform ease-out duration-300 origin-left"></span>
  </Link>
);

export default function Header({ isPortfolioModalOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </>
  );

  if (isPortfolioModalOpen) return null;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3 glass' : 'py-6 bg-transparent'
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/assets/images/logo.png" alt="RC Video Vision Logo" className="h-10 w-auto group-hover:scale-105 transition-transform duration-300" />
            <span className="font-heading font-bold text-xl text-white tracking-wide">RC Video Vision</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks}
            <Link
              to="/contact"
              className="ml-4 px-6 py-2 rounded border border-accent text-accent font-medium hover:bg-accent/10 transition-all duration-300"
            >
              Get a Quote
            </Link>
          </nav>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-navy-dark z-40 md:hidden flex flex-col items-center justify-center gap-8"
            onClick={toggleMenu}
          >
            {navLinks}
            <Link to="/contact" className="mt-4 px-8 py-3 rounded border border-accent text-accent font-bold hover:bg-accent/10 transition-all duration-300">
              Get a Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}