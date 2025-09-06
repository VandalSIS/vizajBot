// Meta Pixel Configuration
// Replace 'YOUR_META_PIXEL_ID' with your actual Meta Pixel ID from Facebook Ads Manager

export const META_PIXEL_ID = 'YOUR_META_PIXEL_ID'; // Replace with your actual Pixel ID

// Example: export const META_PIXEL_ID = '123456789012345';

// Meta Pixel Events Configuration
export const META_EVENTS = {
  // Standard events
  PAGE_VIEW: 'PageView',
  PURCHASE: 'Purchase',
  ADD_TO_CART: 'AddToCart',
  INITIATE_CHECKOUT: 'InitiateCheckout',
  VIEW_CONTENT: 'ViewContent',
  SEARCH: 'Search',
  
  // Custom events (you can add your own)
  PRODUCT_VIEW: 'ProductView',
  NEWSLETTER_SIGNUP: 'NewsletterSignup',
  CONTACT_FORM: 'ContactForm'
};

// Currency configuration
export const CURRENCY = 'MDL';

// Helper function to get pixel ID from environment or config
export const getPixelId = (): string => {
  // Get from environment variables first (for production), then fallback to config
  return process.env.REACT_APP_META_PIXEL_ID || META_PIXEL_ID;
};
