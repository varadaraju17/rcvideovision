import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-navy-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-gradient-radial from-accent to-transparent blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block mb-4 px-4 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent font-medium text-sm tracking-wider uppercase">
              Who We Are
            </div>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white leading-tight mb-6">
              Transforming Events <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Into Experiences</span>
            </h2>
            <p className="text-lg text-slate leading-relaxed mb-6">
              RC Video Vision is a leading provider of professional corporate event services, specializing in cutting-edge audiovisual solutions that elevate your brand and engage your audience.
            </p>
            <p className="text-lg text-slate leading-relaxed">
              With over 25 years of industry experience, our team of experts delivers seamless execution for conferences, product launches, galas, and corporate gatherings of all sizes.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-12">
              {[
                { number: 15, label: 'Years Experience', suffix: '+' },
                { number: 500, label: 'Events Delivered', suffix: '+' },
                { number: 50, label: 'Team Members', suffix: '+' },
                { number: 100, label: 'Client Satisfaction', suffix: '%' },
              ].map((stat, index) => (
                <div key={index} className="border-l-2 border-accent pl-6">
                  <h3 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-1">
                    <CountUp end={stat.number} duration={3} enableScrollSpy scrollSpyOnce />{stat.suffix}
                  </h3>
                  <p className="text-slate-light text-sm uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Image & Quote */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-accent/10 group">
              <div className="absolute inset-0 bg-navy-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img src="/assets/images/hero.jpg" alt="RC Video Vision team working" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />

              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 glass p-6 rounded-xl border border-white/10">
                <p className="text-xl font-heading font-medium text-white italic">"Excellence in every detail"</p>
                <p className="text-accent mt-2 text-sm font-bold uppercase tracking-wider">— Our Promise</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;