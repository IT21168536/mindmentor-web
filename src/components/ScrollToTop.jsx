import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component scrolls to the top when navigating between pages
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop; 