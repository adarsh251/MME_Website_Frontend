import React, { useEffect } from 'react';

function ScrollToTopLayout({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component updates
  });

  return <>{children}</>; // Render the child components
}

export default ScrollToTopLayout;
