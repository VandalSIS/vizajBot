import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-700">
              Folosim cookie-uri pentru a personaliza conținutul și reclamele, pentru a oferi funcții de social media și pentru a analiza traficul nostru.{' '}
              <a href="#" className="text-primary-600 hover:text-primary-700 underline">
                Politica de confidențialitate și cookie-uri
              </a>
            </p>
          </div>
          <button
            onClick={handleAccept}
            className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors whitespace-nowrap"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
