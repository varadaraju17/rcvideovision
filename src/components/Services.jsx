import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight, X } from 'lucide-react';
import Modal from 'react-modal';
import SpotlightCard from './ui/SpotlightCard';

Modal.setAppElement('#root');

const servicesData = [
  {
    title: 'Video Production & Streaming',
    image: '/assets/images/services/video.png',
    description: 'Broadcast-quality 4K production and reliable global streaming to reach your audience anywhere.',
    features: ['4K/8K Cinematic Cameras', 'Live Multi-Cam Switching', 'Global CDN Streaming', 'Branded Video Portals', 'Post-Event Editing'],
    details: 'We provide end-to-end video production services, ensuring your event is captured with cinematic quality. Our streaming solutions are robust, secure, and scalable to any audience size. Perfect for hybrid events, town halls, and international summits where reliability is paramount.'
  },
  {
    title: 'Immersive Sound Systems – Powered by JBL SRX900',
    image: '/assets/images/services/sound.png',
    description: 'We design and deploy JBL SRX900 Series professional sound systems that deliver exceptional clarity, high output, and uniform coverage across every venue.',
    features: ['JBL SRX900 Line Array Systems', 'Shure Digital Wireless Microphones', 'Dante-Based Audio Networking', 'DSP-Driven Acoustic Optimization', 'Breakout & Multi-Zone Audio Solutions'],
    details: 'We design and deploy JBL SRX900 Series professional sound systems that deliver exceptional clarity, high output, and uniform coverage across every venue. Leveraging advanced line array technology, onboard DSP, and networked control, we ensure crystal-clear speech and powerful music reproduction—so every listener enjoys the same premium audio experience from front to back.'
  },
  {
    title: 'Dynamic Lighting Design',
    image: '/assets/images/services/lighting.png',
    description: 'Intelligent lighting that transforms venues, creates atmosphere, and brings your brand to life.',
    features: ['Automated Moving Lights', 'LED Video Wall Integration', 'Custom Gobos & Branding', 'Architectural Uplighting', 'MA GrandMA3 Consoles'],
    details: 'From subtle ambient lighting to high-energy light shows, our designers use light to tell your brand story and create immersive environments. We synchronize lighting with video and audio for a cohesive, theatrical experience.'
  },
  {
    title: 'Projection & LED Walls',
    image: '/assets/images/services/projection.png',
    description: 'Stunning visuals with ultra-bright projection and seamless LED walls for massive impact.',
    features: ['4K Laser Projection', '3D Projection Mapping', 'Seamless LED Video Walls', 'Watchout & Resolume Servers', 'Interactive Content Design'],
    details: 'We offer the latest in visual display technology, including curved LED walls and projection mapping that turns ordinary surfaces into dynamic canvases. Our high-resolution displays ensure your presentations and visuals look crisp and vibrant.'
  },
  {
    title: 'Staging & Truss Systems',
    image: '/assets/images/services/truss.png',
    description: 'Safe, certified staging solutions that provide a creative and structural backbone for your event.',
    features: ['Custom Stage Design', 'Eurotruss Rigging Systems', 'Load-bearing Analysis', 'Branded Stage Backdrops', 'Safety & Certification'],
    details: 'Safety is our priority. Our certified riggers and stage builders create custom structures that are both visually stunning and structurally sound. We design stages that not only look great but also facilitate smooth event flow.'
  },
  {
    title: 'Full-Service AV Management',
    image: '/assets/images/services/av.png',
    description: 'Flawless technical execution with dedicated project management for a stress-free experience.',
    features: ['Dedicated Project Manager', '3D Event Visualization', 'Technical Direction', 'On-site Support Crew', 'Global Logistics'],
    details: 'Leave the technical details to us. Our project managers oversee every aspect of the AV production, ensuring a stress-free experience for you. From initial CAD drawings to the final cue, we manage the entire technical workflow.'
  },
];

const cardVariants = {
  offscreen: {
    opacity: 0,
    y: 30
  },
  onscreen: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
      delay: index * 0.1
    }
  })
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => setSelectedService(service);
  const closeModal = () => setSelectedService(null);

  return (
    <section id="services" className="py-12 lg:py-32 bg-navy-dark relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6">Our Services</h2>
          <div className="w-20 md:w-24 h-1 bg-accent mx-auto rounded-full mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg text-slate-light max-w-3xl mx-auto leading-relaxed">
            We deliver a comprehensive suite of high-end event technology, from cinematic video and crystal-clear audio to immersive lighting and dynamic LED displays. Our integrated approach ensures flawless execution and unforgettable experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((service, index) => (
            <SpotlightCard
              key={service.title}
              className="group bg-navy-light/30 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col h-full"
            >
              <motion.div
                custom={index}
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.1 }}
                className="flex flex-col h-full"
              >
                <div className="h-48 md:h-56 overflow-hidden relative flex-shrink-0 z-10">
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-accent/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow relative z-20">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-white mb-3 md:mb-4 group-hover:text-accent transition-colors drop-shadow-md">{service.title}</h3>
                  <p className="text-slate-light mb-6 text-sm leading-relaxed font-light">{service.description}</p>

                  <div className="space-y-3 mb-8 flex-grow">
                    {service.features.slice(0, 3).map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-sm text-slate-light/80 group-hover:text-white transition-colors">
                        <CheckCircle className="text-accent/70 group-hover:text-accent flex-shrink-0 mt-0.5 transition-colors" size={16} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between mt-auto">
                    <button
                      onClick={() => openModal(service)}
                      className="text-sm font-medium text-white hover:text-accent transition-colors flex items-center gap-2 group/btn"
                    >
                      <span className="border-b border-transparent group-hover/btn:border-accent transition-all">Learn more</span>
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <Modal
            isOpen={!!selectedService}
            onRequestClose={closeModal}
            className="outline-none max-w-3xl w-full mx-4"
            overlayClassName="fixed inset-0 bg-navy-dark/95 backdrop-blur-sm z-[60] flex items-center justify-center"
            contentLabel="Service Details"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-navy-light border border-white/10 rounded-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-accent hover:text-navy-dark text-white rounded-full transition-all z-50 backdrop-blur-md"
              >
                <X size={24} />
              </button>

              <div className="h-64 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-navy-light to-transparent z-10"></div>
                <img src={selectedService.image} alt={selectedService.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 p-8 z-20">
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">{selectedService.title}</h3>
                </div>
              </div>

              <div className="p-8">
                <p className="text-lg text-slate mb-8 leading-relaxed">{selectedService.details || selectedService.description}</p>

                <h4 className="text-xl font-bold text-white mb-4">Key Features</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedService.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-slate-light bg-white/5 p-3 rounded-lg">
                      <CheckCircle className="text-accent flex-shrink-0" size={20} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;