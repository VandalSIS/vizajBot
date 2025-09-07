// Google Tag Manager Configuration
// Your Google Tag Manager Container ID

export const GTM_CONTAINER_ID = 'GTM-NL3DFTPQ'; // Your actual GTM Container ID

// GTM Events Configuration
export const GTM_EVENTS = {
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
  CHAT_MESSAGE: 'chat_message',
  
  // UTM tracking
  CAMPAIGN_TRAFFIC: 'campaign_traffic'
};

// Helper function to get GTM Container ID
export const getGTMId = (): string => {
  return GTM_CONTAINER_ID;
};

// Check if Google Tag Manager is properly configured
export const isGTMConfigured = (): boolean => {
  return GTM_CONTAINER_ID !== 'GTM-NL3DFTPQ' || GTM_CONTAINER_ID.length > 0;
};
