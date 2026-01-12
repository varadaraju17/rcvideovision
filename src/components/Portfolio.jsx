import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from 'react-modal';
import Masonry from 'react-masonry-css';
import { X, ZoomIn, ArrowRight, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';

// Helper to format folder names into titles
const formatCategoryName = (slug) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// Dynamically import all media from the portfolio directory
const mediaModules = import.meta.glob('/public/assets/portfolio/*/*.{png,jpg,jpeg,gif,mp4,webm,PNG,JPG,JPEG,GIF,MP4,WEBM}', {
  query: '?url',
  import: 'default'
});

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

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchMedia = async () => {
      const categories = {};
      for (const path in mediaModules) {
        // Robust normalization of the path
        const normalizedPath = path.replace(/^.*\/public\//, '/').replace(/^\/?public\//, '/');

        const pathParts = normalizedPath.split('/').filter(Boolean); // Filter empty strings
        // pathParts should look like ['assets', 'portfolio', 'category-slug', 'filename.ext']

        if (pathParts.length < 4) continue; // Skip invalid paths

        const categorySlug = pathParts[pathParts.length - 2];
        if (!categories[categorySlug]) {
          categories[categorySlug] = {
            slug: categorySlug,
            name: formatCategoryName(categorySlug),
            thumbnail: null,
            media: [],
          };
        }

        // Generate the URL: Remove 'public' prefix logic handled by normalization
        // normalizedPath starts with '/', e.g., '/assets/portfolio/...'
        const mediaUrl = normalizedPath;

        // Encode only the filename part to handle spaces/symbols, keeping the directory structure intact
        const filename = pathParts[pathParts.length - 1];
        const directory = mediaUrl.substring(0, mediaUrl.lastIndexOf('/') + 1);
        const encodedMediaUrl = directory + encodeURIComponent(filename);

        const isVideo = mediaUrl.toLowerCase().endsWith('.mp4') || mediaUrl.toLowerCase().endsWith('.webm');
        if (!isVideo && !categories[categorySlug].thumbnail) {
          categories[categorySlug].thumbnail = encodedMediaUrl; // Use encoded for thumbnail to be safe
        }
        categories[categorySlug].media.push({
          type: isVideo ? 'video' : 'image',
          src: encodedMediaUrl,
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

  // Lightbox Handlers
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % selectedCategory.media.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + selectedCategory.media.length) % selectedCategory.media.length);
  };

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <section id="portfolio" className="py-12 lg:py-32 bg-navy-light relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 md:mb-6">Our Work</h2>
          <div className="w-20 md:w-24 h-1 bg-accent mx-auto rounded-full mb-4 md:mb-6"></div>
          <p className="text-base md:text-lg text-slate max-w-3xl mx-auto">
            Explore our work across different event categories to see how we bring visions to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioCategories.map((category, index) => (
            <SpotlightCard
              key={category.slug}
              className="group bg-navy-light/30 backdrop-blur-md border border-white/10 rounded-2xl cursor-pointer flex flex-col h-full hover:shadow-[0_0_30px_rgba(100,255,218,0.1)] transition-all duration-500"
              onClick={() => openModal(category)}
            >
              <motion.div
                custom={index}
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.1 }}
                className="flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="h-56 overflow-hidden relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent z-10"></div>
                  <div className="absolute inset-0 bg-accent/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img src={category.thumbnail} alt={category.name} loading="lazy" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
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
            </SpotlightCard>
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

              {/* Masonry Grid */}
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {selectedCategory.media.map((item, index) => (
                  <motion.div
                    key={index}
                    className="mb-8 group rounded-lg overflow-hidden border border-white/5 bg-navy-light cursor-pointer relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => openLightbox(index)}
                  >
                    {item.type === 'image' ? (
                      <>
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                          <ZoomIn className="text-white w-8 h-8" />
                        </div>
                        <img src={item.src} alt={`Project image ${index + 1}`} loading="lazy" className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500" />
                      </>
                    ) : (
                      <div
                        className="relative"
                        onMouseEnter={(e) => {
                          const video = e.currentTarget.querySelector('video');
                          if (video) {
                            const playPromise = video.play();
                            if (playPromise !== undefined) {
                              playPromise.catch(() => {
                                // Auto-play was prevented or interrupted, which is fine
                              });
                            }
                          }
                        }}
                        onMouseLeave={(e) => {
                          const video = e.currentTarget.querySelector('video');
                          if (video) {
                            video.pause();
                            video.currentTime = 0;
                          }
                        }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none">
                          <Play className="text-white fill-white w-8 h-8 opacity-80 group-hover:opacity-0 transition-opacity" />
                        </div>
                        <video muted loop playsInline src={item.src} className="w-full h-auto object-cover" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </Masonry>
            </motion.div>

            {/* Lightbox Overlay */}
            <AnimatePresence>
              {lightboxOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
                  onClick={closeLightbox}
                >
                  <button
                    onClick={closeLightbox}
                    className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all z-20"
                  >
                    <X size={32} />
                  </button>

                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-20"
                  >
                    <ChevronLeft size={40} />
                  </button>

                  <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                    {selectedCategory.media[currentImageIndex].type === 'image' ? (
                      <motion.img
                        key={selectedCategory.media[currentImageIndex].src}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        src={selectedCategory.media[currentImageIndex].src}
                        alt="Lightbox media"
                        className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
                      />
                    ) : (
                      <video
                        key={selectedCategory.media[currentImageIndex].src}
                        controls
                        autoPlay
                        playsInline
                        src={selectedCategory.media[currentImageIndex].src}
                        className="max-w-full max-h-[85vh] rounded-md shadow-2xl bg-black"
                      />
                    )}

                  </div>

                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-20"
                  >
                    <ChevronRight size={40} />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium">
                    {currentImageIndex + 1} / {selectedCategory.media.length}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;