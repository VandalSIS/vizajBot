// Meta Pixel Configuration
// Replace 'YOUR_META_PIXEL_ID' with your actual Meta Pixel ID from Facebook Ads Manager

export const META_PIXEL_ID = 'YOUR_META_PIXEL_ID'; // TODO: Replace with your actual Pixel ID from Facebook Events Manager

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
export const getPixelId = (): string | null => {
  // Get from environment variables first (for production), then fallback to config
  const pixelId = (import.meta.env?.VITE_META_PIXEL_ID as string) || META_PIXEL_ID;
  
  // Return null if pixel ID is still placeholder (not configured)
  if (pixelId === 'YOUR_META_PIXEL_ID') {
    return null;
  }
  
  return pixelId;
};

// Check if Meta Pixel is properly configured
export const isMetaPixelConfigured = (): boolean => {
  return getPixelId() !== null;
};
