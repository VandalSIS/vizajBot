import React, { useEffect } from 'react';
import { getGTMId, isGTMConfigured } from '../config/googleTagManager';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

interface GoogleTagManagerProps {
  containerId: string;
}

const GoogleTagManager: React.FC<GoogleTagManagerProps> = ({ containerId }) => {
  useEffect(() => {
    // Skip loading if no container ID is provided
    if (!containerId || !isGTMConfigured()) {
      console.log('Google Tag Manager: No Container ID configured, skipping initialization');
      return;
    }

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];

    // Load Google Tag Manager script
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${containerId}');
    `;
    document.head.appendChild(script);

    // Add noscript fallback
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${containerId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.head.appendChild(noscript);

    console.log('Google Tag Manager: Initialized successfully');

    // Cleanup function
    return () => {
      const existingScripts = document.querySelectorAll('script[src*="googletagmanager.com"]');
      const existingNoscripts = document.querySelectorAll('noscript iframe[src*="googletagmanager.com"]');
      existingScripts.forEach(script => script.remove());
      existingNoscripts.forEach(noscript => noscript.remove());
    };
  }, [containerId]);

  return null;
};

// GTM DataLayer helper functions
export const pushToDataLayer = (data: any) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(data);
    console.log('GTM DataLayer: Pushed data', data);
  } else {
    console.log('GTM DataLayer: Not available, data not pushed', data);
  }
};

// Enhanced E-commerce tracking functions for GTM
export const trackPurchase = (transactionId: string, value: number, currency: string = 'MDL', items?: any[]) => {
  const purchaseData = {
    event: 'purchase',
    ecommerce: {
      transaction_id: transactionId,
      value: value,
      currency: currency,
      items: items || []
    }
  };
  
  pushToDataLayer(purchaseData);
};

export const trackAddToCart = (itemId: string, itemName: string, category: string, value: number, currency: string = 'MDL') => {
  const addToCartData = {
    event: 'add_to_cart',
    ecommerce: {
      currency: currency,
      value: value,
      items: [{
        item_id: itemId,
        item_name: itemName,
        item_category: category,
        price: value,
        quantity: 1
      }]
    }
  };
  
  pushToDataLayer(addToCartData);
};

export const trackBeginCheckout = (value: number, currency: string = 'MDL', items?: any[]) => {
  const checkoutData = {
    event: 'begin_checkout',
    ecommerce: {
      currency: currency,
      value: value,
      items: items || []
    }
  };
  
  pushToDataLayer(checkoutData);
};

export const trackViewItem = (itemId: string, itemName: string, category: string, price: number, currency: string = 'MDL') => {
  const viewItemData = {
    event: 'view_item',
    ecommerce: {
      currency: currency,
      value: price,
      items: [{
        item_id: itemId,
        item_name: itemName,
        item_category: category,
        price: price
      }]
    }
  };
  
  pushToDataLayer(viewItemData);
};

export const trackSearch = (searchTerm: string) => {
  const searchData = {
    event: 'search',
    search_term: searchTerm
  };
  
  pushToDataLayer(searchData);
};

export const trackPageView = (pageTitle: string, pageLocation: string) => {
  const pageViewData = {
    event: 'page_view',
    page_title: pageTitle,
    page_location: pageLocation
  };
  
  pushToDataLayer(pageViewData);
};

export const trackCustomEvent = (eventName: string, parameters?: any) => {
  const customEventData = {
    event: eventName,
    ...parameters
  };
  
  pushToDataLayer(customEventData);
};

// UTM parameter tracking for GTM
export const trackUTMParameters = () => {
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    
    const utmData = {
      event: 'campaign_traffic',
      utm_source: urlParams.get('utm_source'),
      utm_medium: urlParams.get('utm_medium'),
      utm_campaign: urlParams.get('utm_campaign'),
      utm_content: urlParams.get('utm_content'),
      utm_term: urlParams.get('utm_term')
    };

    // Only track if UTM parameters are present
    if (utmData.utm_source || utmData.utm_medium || utmData.utm_campaign) {
      pushToDataLayer(utmData);
      
      // Also set as custom parameters for all future events
      pushToDataLayer({
        event: 'gtm_custom_parameters',
        utm_source: utmData.utm_source,
        utm_medium: utmData.utm_medium,
        utm_campaign: utmData.utm_campaign,
        utm_content: utmData.utm_content,
        utm_term: utmData.utm_term
      });
      
      console.log('GTM: UTM parameters tracked', utmData);
    }
  }
};

// Track events with UTM parameters
export const trackEventWithUTM = (eventName: string, parameters: any = {}) => {
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    
    const eventData = {
      event: eventName,
      ...parameters,
      utm_source: urlParams.get('utm_source'),
      utm_medium: urlParams.get('utm_medium'),
      utm_campaign: urlParams.get('utm_campaign'),
      utm_content: urlParams.get('utm_content'),
      utm_term: urlParams.get('utm_term')
    };
    
    pushToDataLayer(eventData);
    console.log(`GTM: ${eventName} event with UTM data`, eventData);
  }
};

export default GoogleTagManager;
