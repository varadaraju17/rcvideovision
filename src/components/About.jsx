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
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block mb-4 px-4 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent font-medium text-sm tracking-wider uppercase">
              Who We Are
            </div>
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white leading-tight mb-6">
              Transforming Events <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Into Experiences</span>
            </h2>
            <p className="text-lg text-slate-light leading-relaxed mb-6">
              RC Video Vision is India's premier partner for corporate event production. Headquartered in Bengaluru and operating nationwide, we blend creativity with technical precision to deliver audiovisual experiences that resonate globally. From intimate board meetings to large-scale international summits, we bring a level of professionalism and polish that sets your brand apart.
            </p>
            <p className="text-lg text-slate-light leading-relaxed mb-8">
              With over 15 years of expertise, we ensure seamless execution for conferences, galas, and product launches across all major Indian cities. Our team of seasoned engineers and creative directors work tirelessly to turn your vision into a flawless reality, leveraging the latest technology in video, sound, and lighting.
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h4 className="text-xl font-bold text-white mb-2">Our Mission</h4>
                <p className="text-slate-light text-sm leading-relaxed">
                  To empower brands by delivering flawless, high-impact event experiences through innovative technology and unwavering dedication to quality.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h4 className="text-xl font-bold text-white mb-2">Our Vision</h4>
                <p className="text-slate-light text-sm leading-relaxed">
                  To be the undisputed leader in event production across India, recognized for our commitment to quality, innovation, and client success.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
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
            viewport={{ once: true, amount: 0.2 }} // Trigger earlier on mobile
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