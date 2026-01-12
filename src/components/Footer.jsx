import React from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-slate-light pt-12 md:pt-20 pb-8 md:pb-10 relative overflow-hidden">
      {/* Premium Top Border Glow */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#5FF2EA] to-transparent shadow-[0_0_20px_#5FF2EA]"></div>

      {/* Ambient Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] bg-[#5FF2EA]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
          {/* Column 1: Brand (Full width on mobile for presence) */}
          <div className="space-y-6 col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-3">
              <img src="/assets/images/logo.png" alt="RC Video Vision Logo" className="h-12 w-auto" />
              <span className="font-heading font-bold text-2xl text-white">RC Video Vision</span>
            </a>
            <p className="text-slate leading-relaxed text-sm md:text-base">
              Engineering unforgettable corporate events with cutting-edge audiovisual solutions and professional expertise.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/rc_video_vision?igsh=MTI5cTdyZWVjYXNrdg==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy-light border border-white/10 flex items-center justify-center text-accent hover:bg-accent hover:text-navy-dark transition-all duration-300 shadow-lg">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-lg mb-4 md:mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-accent/50">Quick Links</h4>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
              {['About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-accent transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors"></span>
                    {item === 'About' ? 'About Us' : item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-heading font-bold text-white text-lg mb-4 md:mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-accent/50">Our Services</h4>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
              {['Corporate Events', 'Product Launches', 'Conferences', 'Exhibitions'].map((item) => (
                <li key={item}>
                  <a href="#services" className="hover:text-accent transition-colors block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-heading font-bold text-white text-lg mb-4 md:mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-accent/50">Contact Us</h4>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
              <li className="flex items-start gap-3 group">
                <div className="mt-1 p-1.5 rounded-full bg-white/5 group-hover:bg-accent/10 transition-colors">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <a href="https://maps.app.goo.gl/e3ZrBEBrvEhcuGHE8" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors leading-relaxed">
                  Bangalore, India
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-1.5 rounded-full bg-white/5 group-hover:bg-accent/10 transition-colors">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <a href="tel:+919902264513" className="hover:text-accent transition-colors">+91 99022 64513</a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-1.5 rounded-full bg-white/5 group-hover:bg-accent/10 transition-colors">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <a href="mailto:contact@rcvideovision.in" className="hover:text-accent transition-colors">contact@rcvideovision.in</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-slate text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} RC Video Vision.
            <span className="hidden md:inline"> </span>
            <br className="md:hidden" />
            All Rights Reserved By <a href="https://www.astrasai.in" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium">Astras AI</a>.
          </p>
          <div className="flex gap-6 md:gap-8 opacity-80">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
