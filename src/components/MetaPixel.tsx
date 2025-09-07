import React, { useEffect } from 'react';

interface MetaPixelProps {
  pixelId: string | null;
}

declare global {
  interface Window {
    fbq: any;
  }
}

const MetaPixel: React.FC<MetaPixelProps> = ({ pixelId }) => {
  useEffect(() => {
    // Skip loading if no pixel ID is provided
    if (!pixelId) {
      console.log('Meta Pixel: No Pixel ID configured, skipping initialization');
      return;
    }

    // Load Meta Pixel script
    const script = document.createElement('script');
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${pixelId}');
      fbq('track', 'PageView');
      
      // Track additional events for comprehensive analytics
      fbq('track', 'ViewContent', {
        content_type: 'website',
        content_name: 'Vizaje Nica Homepage'
      });
    `;
    document.head.appendChild(script);

    // Add noscript fallback
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1" />`;
    document.head.appendChild(noscript);

    // Cleanup function
    return () => {
      const existingScript = document.querySelector('script[src*="fbevents.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [pixelId]);

  return null;
};

// Helper functions for tracking events
export const trackPurchase = (value: number, currency: string = 'MDL', orderId?: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    console.log('Meta Pixel: Tracking Purchase', { value, currency, orderId });
    window.fbq('track', 'Purchase', {
      value: value,
      currency: currency,
      content_ids: [orderId],
      content_type: 'product'
    });
  } else {
    console.log('Meta Pixel: Not configured or not loaded yet');
    // Log the event for debugging purposes
    console.log('Purchase Event (Meta Pixel not active):', { value, currency, orderId });
  }
};

export const trackAddToCart = (value: number, currency: string = 'MDL', productId?: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'AddToCart', {
      value: value,
      currency: currency,
      content_ids: [productId],
      content_type: 'product'
    });
  } else {
    console.log('AddToCart Event (Meta Pixel not active):', { value, currency, productId });
  }
};

export const trackInitiateCheckout = (value: number, currency: string = 'MDL') => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'InitiateCheckout', {
      value: value,
      currency: currency
    });
  } else {
    console.log('InitiateCheckout Event (Meta Pixel not active):', { value, currency });
  }
};

// Additional tracking functions for comprehensive analytics
export const trackViewContent = (contentType: string, contentName: string, contentId?: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'ViewContent', {
      content_type: contentType,
      content_name: contentName,
      content_ids: contentId ? [contentId] : undefined
    });
  } else {
    console.log('ViewContent Event (Meta Pixel not active):', { contentType, contentName, contentId });
  }
};

export const trackSearch = (searchString: string) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Search', {
      search_string: searchString
    });
  } else {
    console.log('Search Event (Meta Pixel not active):', { searchString });
  }
};

export const trackContact = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact');
  } else {
    console.log('Contact Event (Meta Pixel not active)');
  }
};

export const trackLead = (value?: number, currency: string = 'MDL') => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      value: value,
      currency: currency
    });
  } else {
    console.log('Lead Event (Meta Pixel not active):', { value, currency });
  }
};

export const trackCompleteRegistration = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'CompleteRegistration');
  } else {
    console.log('CompleteRegistration Event (Meta Pixel not active)');
  }
};

export const trackCustomEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, parameters);
  } else {
    console.log(`Custom Event ${eventName} (Meta Pixel not active):`, parameters);
  }
};

export default MetaPixel;
