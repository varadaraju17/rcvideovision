import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from 'react-modal';
import { X, Play, ChevronRight } from 'lucide-react';

Modal.setAppElement('#root');

const Hero = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-navy-dark">
        {/* Background Video/Gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy-light/90 to-navy-dark z-10"></div>
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/assets/images/hero-poster.png"
            className="w-full h-full object-cover opacity-40"
          >
            <source src="/assets/videos/hero-loop.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-20 pt-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-4 px-4 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent font-medium text-sm tracking-wider uppercase"
              >
                Corporate Event Specialists
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight mb-6">
                Your Vision, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Amplified.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                From concept to reality, we engineer unforgettable corporate events with cutting-edge audiovisual solutions that captivate and inspire.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <a
                  href="#contact"
                  className="group relative px-8 py-4 bg-accent text-navy-dark font-bold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(100,255,218,0.4)]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get a Quote <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </a>

                <button
                  onClick={openModal}
                  className="group flex items-center gap-3 text-white font-medium hover:text-accent transition-colors"
                >
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-accent group-hover:scale-110 transition-all duration-300">
                    <Play size={20} className="fill-current" />
                  </div>
                  <span>Watch Showreel</span>
                </button>
              </div>
            </motion.div>

            {/* Visual/Showreel Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 w-full max-w-xl lg:max-w-none"
            >
              <div
                className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer"
                onClick={openModal}
              >
                <div className="absolute inset-0 bg-accent/20 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500"></div>
                <img src="/assets/images/hero-poster.png" alt="Showreel Preview" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
                    <Play size={32} className="text-white fill-white ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
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
