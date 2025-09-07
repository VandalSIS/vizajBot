import React, { useEffect } from 'react';
import { getGAId, isGAConfigured } from '../config/googleAnalytics';
import { storeUTMParameters, getStoredUTMParameters } from '../config/gaUTMConfig';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

interface GoogleAnalyticsProps {
  measurementId: string;
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ measurementId }) => {
  useEffect(() => {
    // Skip loading if no measurement ID is provided
    if (!measurementId || !isGAConfigured()) {
      console.log('Google Analytics: No Measurement ID configured, skipping initialization');
      return;
    }

    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    // Initialize gtag with UTM parameter capture
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      
      // Get UTM parameters from URL
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get('utm_source');
      const utmMedium = urlParams.get('utm_medium');
      const utmCampaign = urlParams.get('utm_campaign');
      const utmContent = urlParams.get('utm_content');
      const utmTerm = urlParams.get('utm_term');
      
      // Configure GA4 with UTM parameters
      gtag('config', '${measurementId}', {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true,
        custom_map: {
          'custom_parameter_1': utmSource,
          'custom_parameter_2': utmMedium,
          'custom_parameter_3': utmCampaign,
          'custom_parameter_4': utmContent,
          'custom_parameter_5': utmTerm
        }
      });
      
      // Track UTM parameters as custom event if present
      if (utmSource || utmMedium || utmCampaign) {
        gtag('event', 'campaign_traffic', {
          utm_source: utmSource,
          utm_medium: utmMedium,
          utm_campaign: utmCampaign,
          utm_content: utmContent,
          utm_term: utmTerm
        });
      }
    `;
    document.head.appendChild(script2);

    // Cleanup function
    return () => {
      const existingScripts = document.querySelectorAll('script[src*="googletagmanager.com"]');
      existingScripts.forEach(script => script.remove());
    };
  }, [measurementId]);

  return null;
};

// Enhanced E-commerce tracking functions
export const trackPurchase = (transactionId: string, value: number, currency: string = 'MDL', items?: any[]) => {
  if (typeof window !== 'undefined' && window.gtag) {
    // Get UTM parameters
    const urlParams = new URLSearchParams(window.location.search);
    const storedUTM = getStoredUTMParameters();
    
    console.log('Google Analytics: Tracking Purchase', { transactionId, value, currency, items });
    
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: currency,
      items: items || [],
      utm_source: urlParams.get('utm_source') || storedUTM.utm_source,
      utm_medium: urlParams.get('utm_medium') || storedUTM.utm_medium,
      utm_campaign: urlParams.get('utm_campaign') || storedUTM.utm_campaign,
      utm_content: urlParams.get('utm_content') || storedUTM.utm_content,
      utm_term: urlParams.get('utm_term') || storedUTM.utm_term
    });
  } else {
    console.log('Purchase Event (Google Analytics not active):', { transactionId, value, currency, items });
  }
};

export const trackAddToCart = (itemId: string, itemName: string, category: string, value: number, currency: string = 'MDL') => {
  if (typeof window !== 'undefined' && window.gtag) {
    // Get UTM parameters
    const urlParams = new URLSearchParams(window.location.search);
    const storedUTM = getStoredUTMParameters();
    
    window.gtag('event', 'add_to_cart', {
      currency: currency,
      value: value,
      items: [{
        item_id: itemId,
        item_name: itemName,
        item_category: category,
        price: value,
        quantity: 1
      }],
      utm_source: urlParams.get('utm_source') || storedUTM.utm_source,
      utm_medium: urlParams.get('utm_medium') || storedUTM.utm_medium,
      utm_campaign: urlParams.get('utm_campaign') || storedUTM.utm_campaign,
      utm_content: urlParams.get('utm_content') || storedUTM.utm_content,
      utm_term: urlParams.get('utm_term') || storedUTM.utm_term
    });
  } else {
    console.log('AddToCart Event (Google Analytics not active):', { itemId, itemName, category, value, currency });
  }
};

export const trackBeginCheckout = (value: number, currency: string = 'MDL', items?: any[]) => {
  if (typeof window !== 'undefined' && window.gtag) {
    // Get UTM parameters
    const urlParams = new URLSearchParams(window.location.search);
    const storedUTM = getStoredUTMParameters();
    
    window.gtag('event', 'begin_checkout', {
      currency: currency,
      value: value,
      items: items || [],
      utm_source: urlParams.get('utm_source') || storedUTM.utm_source,
      utm_medium: urlParams.get('utm_medium') || storedUTM.utm_medium,
      utm_campaign: urlParams.get('utm_campaign') || storedUTM.utm_campaign,
      utm_content: urlParams.get('utm_content') || storedUTM.utm_content,
      utm_term: urlParams.get('utm_term') || storedUTM.utm_term
    });
  } else {
    console.log('BeginCheckout Event (Google Analytics not active):', { value, currency, items });
  }
};

export const trackViewItem = (itemId: string, itemName: string, category: string, price: number, currency: string = 'MDL') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_item', {
      currency: currency,
      value: price,
      items: [{
        item_id: itemId,
        item_name: itemName,
        item_category: category,
        price: price
      }]
    });
  } else {
    console.log('ViewItem Event (Google Analytics not active):', { itemId, itemName, category, price, currency });
  }
};

export const trackSearch = (searchTerm: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'search', {
      search_term: searchTerm
    });
  } else {
    console.log('Search Event (Google Analytics not active):', { searchTerm });
  }
};

export const trackPageView = (pageTitle: string, pageLocation: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: pageTitle,
      page_location: pageLocation
    });
  } else {
    console.log('PageView Event (Google Analytics not active):', { pageTitle, pageLocation });
  }
};

export const trackCustomEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  } else {
    console.log(`Custom Event ${eventName} (Google Analytics not active):`, parameters);
  }
};

// Enhanced UTM parameter tracking
export const trackUTMParameters = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    const urlParams = new URLSearchParams(window.location.search);
    
    const utmData = {
      utm_source: urlParams.get('utm_source'),
      utm_medium: urlParams.get('utm_medium'),
      utm_campaign: urlParams.get('utm_campaign'),
      utm_content: urlParams.get('utm_content'),
      utm_term: urlParams.get('utm_term')
    };

    // Store UTM parameters in session storage
    storeUTMParameters();

    // Only track if UTM parameters are present
    if (utmData.utm_source || utmData.utm_medium || utmData.utm_campaign) {
      // Track as custom event
      window.gtag('event', 'campaign_traffic', utmData);
      
      // Also track as page_view with UTM parameters
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        utm_source: utmData.utm_source,
        utm_medium: utmData.utm_medium,
        utm_campaign: utmData.utm_campaign,
        utm_content: utmData.utm_content,
        utm_term: utmData.utm_term
      });
      
      // Set as custom parameters for all future events
      window.gtag('config', getGAId(), {
        custom_map: {
          'custom_parameter_1': utmData.utm_source,
          'custom_parameter_2': utmData.utm_medium,
          'custom_parameter_3': utmData.utm_campaign,
          'custom_parameter_4': utmData.utm_content,
          'custom_parameter_5': utmData.utm_term
        }
      });
      
      console.log('Google Analytics: UTM parameters tracked and stored', utmData);
    }
  }
};

// Track events with UTM parameters
export const trackEventWithUTM = (eventName: string, parameters: any = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    // Get UTM parameters from URL
    const urlParams = new URLSearchParams(window.location.search);
    const storedUTM = getStoredUTMParameters();
    
    // Add UTM parameters to event
    const eventData = {
      ...parameters,
      utm_source: urlParams.get('utm_source') || storedUTM.utm_source,
      utm_medium: urlParams.get('utm_medium') || storedUTM.utm_medium,
      utm_campaign: urlParams.get('utm_campaign') || storedUTM.utm_campaign,
      utm_content: urlParams.get('utm_content') || storedUTM.utm_content,
      utm_term: urlParams.get('utm_term') || storedUTM.utm_term
    };
    
    window.gtag('event', eventName, eventData);
    console.log(`Google Analytics: ${eventName} event with UTM data`, eventData);
  }
};

export default GoogleAnalytics;
