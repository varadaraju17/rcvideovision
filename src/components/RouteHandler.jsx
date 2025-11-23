import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RouteHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToSection = () => {
      const path = location.pathname;
      // Default to 'home' for the root path '/'
      const sectionId = path === '/' ? 'home' : path.substring(1);

      const section = document.getElementById(sectionId);

      if (section) {
        // The header is fixed, so we need to account for its height.
        // Let's get the header height dynamically.
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 0;
        
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: sectionTop,
          behavior: 'smooth'
        });
      } else if (path === '/') {
        // Fallback for home, scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    // A small delay to ensure the page has rendered before scrolling
    const timer = setTimeout(() => {
      scrollToSection();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null; // This component does not render anything
};

export default RouteHandler;
