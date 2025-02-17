import React, { useState, useEffect } from 'react';
import TextReveal from '@/components/ui/text-reveal';
import { FaArrowUp } from 'react-icons/fa';

const Goodbye: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative z-10 flex min-h-64 items-center justify-center rounded-lg bg-black">
      <TextReveal text="See ya later! :) " />
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 rounded-full bg-blue-600 text-white p-3 shadow-md hover:bg-blue-700 transition"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Goodbye;
