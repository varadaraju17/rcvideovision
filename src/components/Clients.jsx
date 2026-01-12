import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Dynamically import client logos
const clientLogoModules = import.meta.glob('/src/assets/clients/*.{png,jpg,jpeg,svg,gif}', { eager: true, query: '?url', import: 'default' });

const Clients = () => {
  const [clientLogos, setClientLogos] = useState([]);

  useEffect(() => {
    const logos = Object.values(clientLogoModules);
    setClientLogos(logos);
  }, []);

  if (clientLogos.length === 0) {
    return null;
  }

  // Duplicate logos to ensure seamless looping
  const row1 = [...clientLogos, ...clientLogos, ...clientLogos];
  const row2 = [...clientLogos.reverse(), ...clientLogos, ...clientLogos];

  return (
    <section id="clients" className="py-20 lg:py-32 bg-navy-light relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Trusted By The Best</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-light">
            We are proud to partner with industry leaders to deliver exceptional video experiences that set new standards.
          </p>
        </motion.div>
      </div>

      <div className="relative flex flex-col gap-12 mt-8">
        {/* Row 1 - Moving Left */}
        <div className="flex overflow-hidden relative w-full fade-mask-x">
          <motion.div
            className="flex gap-6 md:gap-8 items-center whitespace-nowrap"
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40,
            }}
          >
            {row1.map((logo, index) => (
              <div
                key={`row1-${index}`}
                className="relative group w-40 h-28 md:w-64 md:h-40 bg-navy-light/50 backdrop-blur-md border border-white/5 rounded-xl flex items-center justify-center p-2 transition-all duration-500 hover:bg-white/5 hover:border-[#5FF2EA]/50 hover:shadow-[0_0_30px_rgba(95,242,234,0.7)] hover:-translate-y-1"
              >
                {/* Premium Skyblue Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#5FF2EA]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>

                <img
                  src={logo}
                  alt="Client"
                  className="w-full h-full object-contain p-2 opacity-90 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Moving Right */}
        <div className="flex overflow-hidden relative w-full fade-mask-x">
          <motion.div
            className="flex gap-6 md:gap-8 items-center whitespace-nowrap"
            initial={{ x: "-33.33%" }}
            animate={{ x: ["-33.33%", "0%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 45,
            }}
          >
            {row2.map((logo, index) => (
              <div
                key={`row2-${index}`}
                className="relative group w-40 h-28 md:w-64 md:h-40 bg-navy-light/50 backdrop-blur-md border border-white/5 rounded-xl flex items-center justify-center p-2 transition-all duration-500 hover:bg-white/5 hover:border-[#87CEEB]/50 hover:shadow-[0_0_25px_rgba(135,206,235,0.2)] hover:-translate-y-1"
              >
                {/* Premium Skyblue Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#87CEEB]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>

                <img
                  src={logo}
                  alt="Client"
                  className="w-full h-full object-contain p-2 opacity-90 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CSS for Fade Mask */}
      <style>{`
        .fade-mask-x {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
};

export default Clients;
