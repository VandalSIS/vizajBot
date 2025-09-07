// Google Analytics Configuration
// Your Google Analytics 4 Measurement ID

export const GA_MEASUREMENT_ID = 'G-GJNTQK2270'; // Your actual GA4 Measurement ID

// Google Analytics Events Configuration
export const GA_EVENTS = {
  // E-commerce events
  PURCHASE: 'purchase',
  ADD_TO_CART: 'add_to_cart',
  BEGIN_CHECKOUT: 'begin_checkout',
  VIEW_ITEM: 'view_item',
  VIEW_ITEM_LIST: 'view_item_list',
  SEARCH: 'search',
  
  // Custom events
  PAGE_VIEW: 'page_view',
  CONTACT: 'contact',
  LEAD: 'generate_lead',
  SIGN_UP: 'sign_up',
  LOGIN: 'login',
  
  // Custom events for your beauty store
  PRODUCT_VIEW: 'product_view',
  CATEGORY_VIEW: 'category_view',
  BRAND_VIEW: 'brand_view',
  NEWSLETTER_SIGNUP: 'newsletter_signup',
  CHAT_START: 'chat_start',
  CHAT_MESSAGE: 'chat_message'
};

// Helper function to get GA Measurement ID
export const getGAId = (): string => {
  return GA_MEASUREMENT_ID;
};

// Check if Google Analytics is properly configured
export const isGAConfigured = (): boolean => {
  return GA_MEASUREMENT_ID !== 'G-GJNTQK2270' || GA_MEASUREMENT_ID.length > 0;
};
