// ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { Course} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [Course]);

  return null;
};

export default ScrollToTop;
