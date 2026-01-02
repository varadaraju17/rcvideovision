import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import { X, Play, ChevronRight, ChevronDown } from 'lucide-react';

Modal.setAppElement('#root');

const Hero = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const scrollToContent = () => {
    const content = document.getElementById('hero-content-start');
    if (content) {
      content.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="home" className="relative w-full lg:min-h-screen overflow-hidden bg-navy-dark">
        {/* Background Video/Gradient - Mobile: Top Scroll Section, Desktop: Absolute Background */}
        <div className="relative w-full h-[100dvh] lg:absolute lg:inset-0 lg:h-full z-0">
          {/* Desktop Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy-dark/70 to-navy-dark/90 z-10 hidden lg:block"></div>
          {/* Mobile Overlay - Gradient from top (subtle) to bottom (solid) for seamless transition */}
          <div className="absolute inset-0 z-10 lg:hidden bg-gradient-to-b from-black/20 via-transparent to-navy-dark"></div>

          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center opacity-100 lg:opacity-60"
          >
            <source src="/assets/videos/hero-loop.mp4" type="video/mp4" />
          </video>

          {/* Mobile Scroll Indicator */}
          <motion.button
            onClick={scrollToContent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-32 left-[35%] transform -translate-x-1/2 z-20 cursor-pointer lg:hidden group focus:outline-none"
          >
            <div className="flex flex-col items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_0_15px_rgba(100,255,218,0.3)] hover:bg-white/20 transition-all duration-300 animate-pulse">
              <span className="text-white font-bold text-xs tracking-[0.2em] uppercase">Explore</span>
              <ChevronDown className="text-accent drop-shadow-md" size={20} />
            </div>
          </motion.button>
        </div>

        {/* Content */}
        <div id="hero-content-start" className="relative z-20 bg-navy-dark lg:bg-transparent w-full">
          <div className="container mx-auto px-6 py-20 lg:py-0 lg:min-h-screen lg:flex lg:items-center">
            <div className="flex flex-col lg:flex-row items-center gap-12 w-full">

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full text-center lg:text-left max-w-4xl mx-auto lg:mx-0"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block mb-4 px-4 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent font-medium text-sm tracking-wider uppercase"
                >
                  Premium Event Production
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight mb-6 drop-shadow-lg">
                  Your Vision, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white filter drop-shadow-none">Amplified.</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-light mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed drop-shadow-md">
                  From Bengaluru to the entire nation, we engineer unforgettable corporate events with cinematic video production, immersive audio landscapes, and dynamic lighting design. Your partner for flawless execution.
                </p>

                <div className="flex flex-row items-center justify-center lg:justify-start gap-4">
                  <a
                    href="#contact"
                    className="group relative px-6 py-3 bg-accent text-navy-dark font-bold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(100,255,218,0.4)] whitespace-nowrap"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Get a Quote <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </a>

                  <button
                    onClick={openModal}
                    className="group flex items-center gap-2 text-white font-medium hover:text-accent transition-colors whitespace-nowrap"
                  >
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent group-hover:scale-110 transition-all duration-300">
                      <Play size={16} className="fill-current" />
                    </div>
                    <span>Watch Showreel</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Showreel Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl p-4 outline-none"
        overlayClassName="fixed inset-0 bg-navy-dark/95 backdrop-blur-sm z-[60] flex items-center justify-center"
        contentLabel="Showreel"
      >
        <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 text-white/70 hover:text-white bg-black/50 hover:bg-accent/20 rounded-full p-2 transition-all"
          >
            <X size={24} />
          </button>
          <video controls autoPlay className="w-full h-full">
            <source src="/assets/videos/hero-loop.mp4" type="video/mp4" />
          </video>
        </div>
      </Modal>
    </>
  );
};

export default Hero;
