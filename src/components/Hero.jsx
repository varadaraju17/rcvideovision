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
        <div className="relative w-full h-[100dvh] lg:absolute lg:inset-0 lg:h-full z-0 bg-navy-dark">
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
          <div className="container mx-auto px-4 md:px-6 py-12 lg:py-0 lg:min-h-screen lg:flex lg:items-center">
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 w-full">

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full text-center lg:text-left max-w-4xl mx-auto lg:mx-0"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="inline-flex items-center gap-2 mb-4 md:mb-6 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-md text-accent font-medium text-xs md:text-sm tracking-[0.2em] uppercase"
                >
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_#64ffda]"></span>
                  Premium Event Production
                </motion.div>

                <h1 className="text-5xl md:text-6xl lg:text-8xl font-heading font-bold text-white leading-[1.1] mb-6 md:mb-8 drop-shadow-2xl tracking-tight">
                  <span className="block mb-2">Your Vision.</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#87CEEB] via-white to-[#87CEEB] filter drop-shadow-[0_0_30px_rgba(135,206,235,0.4)] animate-pulse">
                    Amplified.
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-slate-light mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                  We engineer the world's most immersive corporate experiences. From visionary product launches to large-scale global summits, we blend <span className="text-white font-medium">cinematic storytelling</span>, <span className="text-white font-medium">precision audio</span>, and <span className="text-white font-medium">dynamic lighting</span> to define the future of event production.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                  {/* Get a Quote - Static Thick Border */}
                  <a
                    href="#contact"
                    className="relative group px-8 py-4 bg-navy-light/40 backdrop-blur-xl border-[2px] border-[#5FF2EA] text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(95,242,234,0.5)] hover:shadow-[0_0_40px_rgba(95,242,234,0.8)] hover:-translate-y-1 active:scale-95 active:bg-[#5FF2EA]/20"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Get a Quote <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    {/* Holographic Shine Wipe Effect */}
                    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-transform duration-1000 ease-in-out group-hover:translate-x-[200%] z-20 pointer-events-none"></div>
                    {/* Glass Reflection */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent z-10 opacity-70"></div>
                  </a>

                  {/* Watch Showreel - Static Thick Border */}
                  <button
                    onClick={openModal}
                    className="group flex items-center gap-4 text-white font-medium hover:text-[#5FF2EA] transition-colors"
                  >
                    <div className="relative w-14 h-14 rounded-full border-[2px] border-[#5FF2EA]/30 flex items-center justify-center group-hover:border-[#5FF2EA] transition-all duration-300 shadow-[0_0_15px_rgba(95,242,234,0.4)] group-hover:shadow-[0_0_30px_rgba(95,242,234,0.7)]">
                      <div className="absolute inset-0 bg-[#5FF2EA]/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                      <Play size={20} className="fill-current relative z-10 ml-1" />
                    </div>
                    <span className="text-lg tracking-wide uppercase text-sm font-bold">Watch Showreel</span>
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
