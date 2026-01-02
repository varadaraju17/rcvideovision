import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from 'react-modal';
import Masonry from 'react-masonry-css';
import { X, ZoomIn, ArrowRight } from 'lucide-react';

// Helper to format folder names into titles
const formatCategoryName = (slug) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Dynamically import all media from the portfolio directory
const mediaModules = import.meta.glob('/public/assets/portfolio/*/*.{png,jpg,jpeg,gif,mp4,webm}');

Modal.setAppElement('#root');

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

const Portfolio = ({ setIsPortfolioModalOpen }) => {
  const [portfolioCategories, setPortfolioCategories] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchMedia = async () => {
      const categories = {};
      for (const path in mediaModules) {
        const pathParts = path.split('/');
        const categorySlug = pathParts[pathParts.length - 2];
        if (!categories[categorySlug]) {
          categories[categorySlug] = {
            slug: categorySlug,
            name: formatCategoryName(categorySlug),
            thumbnail: null,
            media: [],
          };
        }
        const mediaUrl = path.replace('/public', '');
        const isVideo = mediaUrl.endsWith('.mp4') || mediaUrl.endsWith('.webm');
        if (!isVideo && !categories[categorySlug].thumbnail) {
          categories[categorySlug].thumbnail = mediaUrl;
        }
        categories[categorySlug].media.push({
          type: isVideo ? 'video' : 'image',
          src: mediaUrl,
        });
      }
      for (const slug in categories) {
        if (!categories[slug].thumbnail) {
          categories[slug].thumbnail = '/assets/images/hero-poster.png';
        }
      }
      setPortfolioCategories(Object.values(categories).filter(c => c.slug !== 'product-launches' && c.slug !== 'marketing-events'));
    };
    fetchMedia();
  }, []);

  const openModal = (category) => {
    setSelectedCategory(category);
    setModalIsOpen(true);
    if (setIsPortfolioModalOpen) setIsPortfolioModalOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedCategory(null);
    if (setIsPortfolioModalOpen) setIsPortfolioModalOpen(false);
  };

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-navy-light relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white mb-6">Our Work</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate max-w-3xl mx-auto">
            Explore our work across different event categories to see how we bring visions to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioCategories.map((category, index) => (
            <motion.div
              key={category.slug}
              custom={index}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
              className="group relative bg-navy-light/30 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(100,255,218,0.1)] flex flex-col"
              onClick={() => openModal(category)}
            >
              {/* Gradient Border Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Image Section */}
              <div className="h-56 overflow-hidden relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent z-10"></div>
                <div className="absolute inset-0 bg-accent/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img src={category.thumbnail} alt={category.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow relative z-20">
                <h3 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-accent transition-colors drop-shadow-md">{category.name}</h3>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between mt-auto">
                  <button
                    className="text-sm font-medium text-white hover:text-accent transition-colors flex items-center gap-2 group/btn"
                  >
                    <span className="border-b border-transparent group-hover/btn:border-accent transition-all">View Gallery</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {modalIsOpen && selectedCategory && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="fixed inset-0 bg-navy-dark z-50 overflow-y-auto outline-none"
            overlayClassName="fixed inset-0 bg-navy-dark/95 z-40 backdrop-blur-sm"
            contentLabel="Project Gallery"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="container mx-auto px-6 py-12"
            >
              <div className="flex justify-between items-center mb-12 sticky top-0 bg-navy-dark/90 backdrop-blur-md py-4 z-50 border-b border-white/10">
                <div>
                  <h2 className="text-3xl font-heading font-bold text-white">{selectedCategory.name}</h2>
                  <p className="text-slate text-sm mt-1">Gallery View</p>
                </div>
                <button
                  onClick={closeModal}
                  className="bg-white/5 text-white hover:bg-accent hover:text-navy-dark rounded-full p-3 transition-all duration-300"
                >
                  <X size={24} />
                </button>
              </div>

              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {selectedCategory.media.map((item, index) => (
                  <motion.div
                    key={index}
                    className="mb-8 group rounded-lg overflow-hidden border border-white/5 bg-navy-light"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.type === 'image' ? (
                      <img src={item.src} alt={`Project image ${index + 1}`} className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <video controls src={item.src} className="w-full h-auto" />
                    )}
                  </motion.div>
                ))}
              </Masonry>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;