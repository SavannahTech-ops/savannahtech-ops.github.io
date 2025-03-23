
import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const pageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const page = pageRef.current;
    
    if (page) {
      // Reset classes
      page.classList.remove('animate-fade-in-up');
      // Force reflow to ensure animation starts from the beginning
      void page.offsetWidth;
      // Add animation class
      page.classList.add('animate-fade-in-up');
    }
  }, [location.pathname]);
  
  return (
    <div ref={pageRef} className="animate-fade-in-up">
      {children}
    </div>
  );
};

export default PageTransition;
