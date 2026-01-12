import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import logos directly
import jainLogo from '../assets/clients/jain.jpg';
import usdcLogo from '../assets/clients/usdc.png';
import cathedralLogo from '../assets/clients/cathedral_composite_college.png';
import npsLogo from '../assets/clients/national_public_school.jpg';
import dtdcLogo from '../assets/clients/dtdc.png';
import narayanaLogo from '../assets/clients/narayana_e_techno.png';
import greenwoodLogo from '../assets/clients/greenwood_high.png';

const testimonials = [
  {
    quote: "RC Video Vision transformed our annual convocation into a world-class digital experience. Their precision in live streaming and stage handling was impeccable.",
    name: "Dr. Chenraj Roychand",
    title: "Chairman, Jain Group of Institutions",
    logo: jainLogo,
    rating: 5
  },
  {
    quote: "Partnering with RC Video Vision for our educational events has been outstanding. Their ability to handle complex AV requirements for our large-scale workshops is unmatched.",
    name: "Mr. Shivakumar Venkateswaran",
    title: "Chief Human Resources Officer, USDC",
    logo: usdcLogo,
    rating: 5
  },
  {
    quote: "Our college events have never looked better. The professionalism and technical expertise they bring to the table ensured our graduation ceremony was flawless.",
    name: "Dr. D. Alwin Rajan",
    title: "Principal, Cathedral Composite PU College",
    logo: cathedralLogo,
    rating: 5
  },
  {
    quote: "The visual clarity and sound quality provided for our annual day were exceptional. They truly understand how to create an immersive environment for students and parents.",
    name: "Mrs. Aracha Sinha",
    title: "Principal, National Public School, JP Nagar",
    logo: npsLogo,
    rating: 5
  },
  {
    quote: "Reliable, professional, and efficient. RC Video Vision handled our logistics and event production seamlessly, ensuring timely delivery across multiple locations.",
    name: "Regional Manager",
    title: "DTDC Express Limited",
    logo: dtdcLogo,
    rating: 5
  },
  {
    quote: "Their team managed to turn our school's vision into reality with stunning stagecraft and lighting. A truly dedicated partner for educational excellence.",
    name: "Mrs. Indira Priyadharshini K",
    title: "Principal, Narayana e-Techno School",
    logo: narayanaLogo,
    rating: 5
  },
  {
    quote: "From the LED walls to the live feed, everything was executed with precision. Our international school events require high standards, and they delivered.",
    name: "Mr. Louis Dias",
    title: "Principal, Greenwood High School",
    logo: greenwoodLogo,
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-navy-dark relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Client Stories</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-light max-w-2xl mx-auto">
            Real experiences from the visionaries we work with.
          </p>
        </motion.div>

        <div className="testimonial-slider-container pb-10">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'} // Allows slides to size themselves
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false, // Cleaner look without dark shadows
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="w-full py-10"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i} className="!w-[85vw] max-w-[350px] md:!w-[600px] transition-all duration-300">
                {({ isActive }) => (
                  <div className={`
                    relative rounded-3xl p-8 md:p-10 h-full flex flex-col justify-between
                    backdrop-blur-xl border transition-all duration-500
                    ${isActive
                      ? 'bg-navy-light/60 border-[2px] border-[#5FF2EA] shadow-[0_0_40px_rgba(95,242,234,0.6)] scale-100 opacity-100'
                      : 'bg-white/5 border border-white/5 scale-90 opacity-40 blur-[1px]'}
                  `}>
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 opacity-20">
                      <Quote size={60} className="text-white" fill="currentColor" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex gap-1 mb-6">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} size={18} className="text-yellow-400 fill-current" />
                        ))}
                      </div>

                      <blockquote className="text-lg md:text-2xl font-light text-white italic leading-relaxed mb-8">
                        "{t.quote}"
                      </blockquote>

                      <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                        <div className="w-16 h-16 rounded-xl bg-white p-2 flex items-center justify-center shadow-lg">
                          <img
                            src={t.logo}
                            alt={t.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <cite className="not-italic font-heading font-bold text-white text-lg block">
                            {t.name}
                          </cite>
                          <span className="text-accent text-sm font-medium uppercase tracking-wider block mt-1">
                            {t.title}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Nav Styling */}
          <style>{`
            .swiper-pagination-bullet { background: #fff; opacity: 0.3; }
            .swiper-pagination-bullet-active { background: #64ffda; opacity: 1; }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
