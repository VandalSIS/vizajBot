import React, { useEffect } from 'react';

const TidioChat: React.FC = () => {
  useEffect(() => {
    // Load Tidio chat script
    const script = document.createElement('script');
    script.src = '//code.tidio.co/YOUR_TIDIO_ID.js'; // Replace with your actual Tidio ID
    script.async = true;
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const existingScript = document.querySelector('script[src*="tidio.co"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
};

export default TidioChat;
