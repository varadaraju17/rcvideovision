import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from 'react-modal';
import Masonry from 'react-masonry-css';
import { X, ZoomIn } from 'lucide-react';

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
      setPortfolioCategories(Object.values(categories));
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
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative z-10 overflow-hidden rounded-xl cursor-pointer shadow-lg bg-navy-dark border border-white/5"
              onClick={() => openModal(category)}
            >
              <div className="relative h-96 overflow-hidden">
                <div className="absolute inset-0 bg-navy-dark/40 group-hover:bg-navy-dark/20 transition-colors duration-300 z-10"></div>
                <img src={category.thumbnail} alt={category.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="w-16 h-16 bg-accent/90 rounded-full flex items-center justify-center text-navy-dark shadow-lg transform scale-50 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn size={32} />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-navy-dark to-transparent z-20">
                <h3 className="text-2xl font-heading font-bold text-white group-hover:text-accent transition-colors">{category.name}</h3>
                <p className="text-sm text-slate-light mt-1">{category.media.length} items</p>
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