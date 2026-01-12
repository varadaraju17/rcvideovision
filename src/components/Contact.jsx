import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 lg:py-32 bg-navy-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-navy-light/30 skew-x-12 transform origin-top-right pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 md:mb-6">Get In Touch</h2>
          <div className="w-20 md:w-24 h-1 bg-accent mx-auto rounded-full mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg text-slate max-w-2xl mx-auto">
            Ready to elevate your next corporate event? Contact us today for a consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-3 bg-navy-light/50 backdrop-blur-sm p-5 md:p-8 rounded-2xl border border-white/5 shadow-xl"
          >
            <form action="/send-email.php" method="post" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs text-slate-light font-medium ml-1">Full Name</label>
                  <input
                    type="text" name="name" required
                    className="w-full bg-navy-dark border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-base md:text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs text-slate-light font-medium ml-1">Email Address</label>
                  <input
                    type="email" name="email" required
                    className="w-full bg-navy-dark border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-base md:text-sm"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs text-slate-light font-medium ml-1">Phone Number</label>
                  <input
                    type="tel" name="phone"
                    className="w-full bg-navy-dark border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-base md:text-sm"
                    placeholder="+1 (234) 567-890"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs text-slate-light font-medium ml-1">Event Type</label>
                  <select
                    name="event_type"
                    className="w-full bg-navy-dark border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none text-base md:text-sm"
                  >
                    <option>Select Event Type</option>
                    <option>Conference</option>
                    <option>Product Launch</option>
                    <option>Gala Event</option>
                    <option>Exhibition</option>
                    <option>Corporate Meeting</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-slate-light font-medium ml-1">Message</label>
                <textarea
                  name="message" rows="3" required
                  className="w-full bg-navy-dark border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none text-base md:text-sm"
                  placeholder="Tell us about your event requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-navy-dark font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_rgba(100,255,218,0.4)] flex items-center justify-center gap-2 group text-sm"
              >
                <span>Send Message</span>
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Right Column: Contact Info */}
          <motion.div
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-white/5 hover:border-accent/20">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Mail size={20} />
              </div>
              <div className="min-w-0">
                <h3 className="font-heading font-bold text-white text-sm mb-0.5">Email Us</h3>
                <a href="mailto:contact@rcvideovision.in" className="text-slate-light hover:text-accent transition-colors text-xs truncate block">contact@rcvideovision.in</a>
              </div>
            </div>

            <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-white/5 hover:border-accent/20">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Phone size={20} />
              </div>
              <div className="min-w-0">
                <h3 className="font-heading font-bold text-white text-sm mb-0.5">Call Us</h3>
                <a href="tel:+919902264513" className="text-slate-light hover:text-accent transition-colors text-xs block">+91 99022 64513</a>
              </div>
            </div>

            <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-white/5 hover:border-accent/20">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <MapPin size={20} />
              </div>
              <div className="min-w-0">
                <h3 className="font-heading font-bold text-white text-sm mb-0.5">Visit Us</h3>
                <a href="https://maps.app.goo.gl/e3ZrBEBrvEhcuGHE8" target="_blank" rel="noopener noreferrer" className="text-slate-light hover:text-accent transition-colors text-xs truncate block">Bangalore, India</a>
              </div>
            </div>

            <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-white/5 hover:border-accent/20">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <MessageCircle size={20} />
              </div>
              <div className="min-w-0">
                <h3 className="font-heading font-bold text-white text-sm mb-0.5">WhatsApp</h3>
                <a href="https://wa.me/919902264513" target="_blank" rel="noopener noreferrer" className="text-slate-light hover:text-accent transition-colors text-xs font-medium block">Start Chat</a>
              </div>
            </div>

            <div className="group flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-white/5 hover:border-accent/20">
              <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Instagram size={20} />
              </div>
              <div className="min-w-0">
                <h3 className="font-heading font-bold text-white text-sm mb-0.5">Instagram</h3>
                <a href="https://www.instagram.com/rc_video_vision?igsh=MTI5cTdyZWVjYXNrdg==" target="_blank" rel="noopener noreferrer" className="text-slate-light hover:text-accent transition-colors text-xs font-medium block">@rc_video_vision</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
