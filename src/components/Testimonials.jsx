import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "RC Video Vision delivered a flawless hybrid summit. The livestream quality and on-site sound mix were outstanding, and their team was incredibly professional.",
    name: "Priya Sharma",
    title: "Event Director, Innovate Corp",
    rating: 5
  },
  {
    quote: "The lighting and projection mapping transformed our product launch. Every visual cue landed perfectly, creating a high-energy atmosphere that captivated the audience.",
    name: "Arjun Mehta",
    title: "Head of Product, TechWave",
    rating: 5
  },
  {
    quote: "For our annual awards gala, their team's attention to detail was second to none. The stage design and AV execution were simply spectacular. Highly recommended.",
    name: "Anika Reddy",
    title: "Marketing VP, Global Finance Inc.",
    rating: 5
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-navy-dark relative">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-6">Client Stories</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate mt-4 max-w-2xl mx-auto">
            We are proud to partner with industry leaders to create exceptional events.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode='wait'>
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="bg-navy-light border border-white/5 p-8 md:p-12 rounded-2xl shadow-2xl relative"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-accent text-navy-dark p-4 rounded-full shadow-lg">
                <Quote size={32} fill="currentColor" />
              </div>

              <div className="mt-8 mb-8">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[index].rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-xl md:text-2xl font-medium text-white italic leading-relaxed">
                  "{testimonials[index].quote}"
                </p>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h4 className="font-heading font-bold text-white text-lg">{testimonials[index].name}</h4>
                <p className="text-accent text-sm uppercase tracking-wide mt-1">{testimonials[index].title}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? 'bg-accent w-8' : 'bg-white/20 hover:bg-white/40'
                  }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
