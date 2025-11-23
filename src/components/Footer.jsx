import React from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-slate-light pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-3">
              <img src="/assets/images/logo.png" alt="RC Video Vision Logo" className="h-12 w-auto" />
              <span className="font-heading font-bold text-2xl text-white">RC Video Vision</span>
            </a>
            <p className="text-slate leading-relaxed">
              Engineering unforgettable corporate events with cutting-edge audiovisual solutions and professional expertise.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/rc_video_vision?igsh=MTI5cTdyZWVjYXNrdg==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center text-accent hover:bg-accent hover:text-navy-dark transition-all duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#about" className="hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-heading font-bold text-white text-lg mb-6">Our Services</h4>
            <ul className="space-y-4">
              {['Corporate Events', 'Product Launches', 'Conferences', 'Exhibitions'].map((item) => (
                <li key={item}>
                  <a href="#services" className="hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-heading font-bold text-white text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <a href="https://maps.app.goo.gl/e3ZrBEBrvEhcuGHE8" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  Bangalore, India
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+919902264513" className="hover:text-accent transition-colors">+91 99022 64513</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:contact@rcvideovision.in" className="hover:text-accent transition-colors">contact@rcvideovision.in</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate">
          <p>&copy; {new Date().getFullYear()} RC Video Vision. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
