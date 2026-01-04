import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const clientLogoModules = import.meta.glob('/src/assets/clients/*.{png,jpg,jpeg,svg,gif}', { eager: true, query: '?url', import: 'default' });

const Clients = () => {
  const [clientLogos, setClientLogos] = useState([]);

  useEffect(() => {
    // Vite handles the URLs automatically with 'as: url'
    const logos = Object.values(clientLogoModules);
    setClientLogos(logos);
  }, []);

  if (clientLogos.length === 0) {
    return null;
  }

  const extendedLogos = [...clientLogos, ...clientLogos];

  return (
    <section id="clients" className="py-20 bg-navy-light border-y border-white/5">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 px-6"
        >
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white">Trusted By The Best</h2>
          <p className="text-lg text-slate mt-4 max-w-2xl mx-auto">
            We are proud to have partnered with a diverse range of leading companies and organizations.
          </p>
        </motion.div>

        <div className="w-full overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-navy-light to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-navy-light to-transparent z-10"></div>
          <motion.div
            className="flex items-center"
            animate={{
              x: ['0%', '-50%'],
              transition: {
                ease: 'linear',
                duration: 40,
                repeat: Infinity,
              }
            }}
          >
            {extendedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 px-8" style={{ width: '200px' }}>
                <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300">
                  <img
                    src={logo}
                    alt={`${logo.split('/').pop().split('.')[0].replace(/[-_]/g, ' ')} logo - Trusted Client of RC Video Vision`}
                    className="h-16 w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
