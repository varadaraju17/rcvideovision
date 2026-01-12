import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CountUp from 'react-countup';
import { Target, Lightbulb, Zap, Award } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={ref} className="py-20 lg:py-32 bg-navy-dark relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5FF2EA]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">

          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              style={{ opacity }}
              className="absolute -left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#5FF2EA]/30 to-transparent hidden lg:block"
            ></motion.div>

            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#5FF2EA]/20 bg-[#5FF2EA]/5 text-[#5FF2EA] font-medium text-xs tracking-[0.2em] uppercase backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5FF2EA] animate-pulse"></span>
              Who We Are
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6 md:mb-8">
              We Craft <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5FF2EA] via-white to-[#5FF2EA]">Global Experiences</span>
            </h2>

            <p className="text-lg md:text-xl text-slate-light leading-relaxed mb-8 border-l-4 border-[#5FF2EA] pl-6">
              RC Video Vision is not just an event production company; <span className="text-white font-medium">we are architects of atmosphere</span>. Operating from Bengaluru, we orchestrate high-stakes corporate convocations, summits, and launches across India with cinematic precision.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8 md:mb-10">
              <SpotlightCard className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#5FF2EA]/30 hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
                <Target className="w-8 h-8 text-[#5FF2EA] mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-base md:text-lg font-bold text-white mb-2">Our Mission</h4>
                <p className="text-sm text-slate-light">Empowering brands with flawless, high-impact audiovisual storytelling.</p>
              </SpotlightCard>
              <SpotlightCard className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[#5FF2EA]/30 hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
                <Lightbulb className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-base md:text-lg font-bold text-white mb-2">Our Vision</h4>
                <p className="text-sm text-slate-light">To define the future of live engagement through innovation and tech.</p>
              </SpotlightCard>
            </div>

            <div className="flex flex-wrap gap-6 md:gap-8 items-center border-t border-white/10 pt-8">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-navy-dark bg-gray-800 bg-[url('https://randomuser.me/api/portraits/men/${i + 20}.jpg')] bg-cover`}></div>
                ))}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-navy-dark bg-[#5FF2EA] flex items-center justify-center text-navy-dark font-bold text-xs md:text-sm">+45</div>
              </div>
              <div>
                <p className="text-white font-bold text-base md:text-lg">Expert Team</p>
                <p className="text-slate-light text-xs md:text-sm">Engineers, Directors & Creatives</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Spectacle */}
          <div className="relative mt-8 lg:mt-0">
            {/* Abstract Shapes */}
            <motion.div style={{ y }} className="absolute -top-10 -right-10 w-2/3 h-2/3 bg-gradient-to-br from-[#5FF2EA]/20 to-purple-500/20 rounded-full blur-[80px] -z-10"></motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] group z-10"
            >
              {/* Clean Image - No Overlays */}
              <div className="absolute inset-0 ring-1 ring-white/10 z-20 pointer-events-none rounded-[2rem]"></div>

              <img
                src="/assets/images/about_corporate_tech.png"
                alt="RC Video Vision technical command center with high-end AV equipment"
                className="w-full h-auto object-cover transform transition-transform duration-[1.5s] group-hover:scale-105"
              />
            </motion.div>

            {/* Decor Elements behind */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#5FF2EA]/10 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>

        {/* Stats Section - Moved Below for Clean Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-20 border-t border-white/10 pt-10 md:pt-12">
          {[
            { number: 15, label: 'Years Legacy', suffix: '+' },
            { number: 500, label: 'Events Executed', suffix: '+' },
            { number: 45, label: 'Expert Team', suffix: '+' },
            { number: 100, label: 'Client Satisfaction', suffix: '%' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center group"
            >
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2 group-hover:text-[#5FF2EA] transition-colors duration-300 flex justify-center items-center gap-1">
                <CountUp end={stat.number} duration={2.5} enableScrollSpy scrollSpyOnce />{stat.suffix}
              </h3>
              <p className="text-sm text-slate-light uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;