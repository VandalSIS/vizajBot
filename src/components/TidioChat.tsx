import React, { useEffect } from 'react';

const TidioChat: React.FC = () => {
  useEffect(() => {
    // Load Tidio chat script
    const script = document.createElement('script');
    script.src = '//code.tidio.co/oxwnjjzc4qelsfnr39inuadao64rgxmv.js';
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
