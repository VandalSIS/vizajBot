// Google Analytics UTM Configuration
// This helps you set up proper UTM tracking in GA4

export const GA_UTM_CONFIG = {
  // UTM parameter mapping for Google Analytics
  utmParameters: {
    utm_source: 'source',
    utm_medium: 'medium', 
    utm_campaign: 'campaign',
    utm_content: 'content',
    utm_term: 'term'
  },

  // Campaign naming conventions
  campaignTypes: {
    facebook: {
      source: 'facebook',
      medium: 'cpc',
      campaigns: ['beauty_products', 'lipstick_collection', 'perfume_collection']
    },
    instagram: {
      source: 'instagram', 
      medium: 'cpc',
      campaigns: ['beauty_products', 'stories_campaign', 'feed_campaign']
    },
    google: {
      source: 'google',
      medium: 'cpc', 
      campaigns: ['beauty_keywords', 'branded_search', 'competitor_keywords']
    },
    email: {
      source: 'email',
      medium: 'newsletter',
      campaigns: ['weekly_promotion', 'product_launch', 'seasonal_sale']
    }
  },

  // Enhanced UTM tracking configuration
  enhancedTracking: {
    // Track UTM parameters with every event
    trackWithEvents: true,
    
    // Custom dimensions for UTM data
    customDimensions: {
      utm_source: 'custom_parameter_1',
      utm_medium: 'custom_parameter_2', 
      utm_campaign: 'custom_parameter_3',
      utm_content: 'custom_parameter_4',
      utm_term: 'custom_parameter_5'
    },

    // Session storage for UTM persistence
    sessionStorage: true,
    
    // Cross-domain tracking
    crossDomain: false
  }
};

// Helper function to get UTM parameters from URL
export const getUTMParameters = (): Record<string, string | null> => {
  if (typeof window === 'undefined') return {};
  
  const urlParams = new URLSearchParams(window.location.search);
  
  return {
    utm_source: urlParams.get('utm_source'),
    utm_medium: urlParams.get('utm_medium'),
    utm_campaign: urlParams.get('utm_campaign'),
    utm_content: urlParams.get('utm_content'),
    utm_term: urlParams.get('utm_term')
  };
};

// Helper function to store UTM parameters in session storage
export const storeUTMParameters = (): void => {
  if (typeof window === 'undefined') return;
  
  const utmParams = getUTMParameters();
  
  // Only store if UTM parameters are present
  if (utmParams.utm_source || utmParams.utm_medium || utmParams.utm_campaign) {
    sessionStorage.setItem('utm_data', JSON.stringify(utmParams));
    console.log('UTM parameters stored in session:', utmParams);
  }
};

// Helper function to get stored UTM parameters
export const getStoredUTMParameters = (): Record<string, string | null> => {
  if (typeof window === 'undefined') return {};
  
  try {
    const stored = sessionStorage.getItem('utm_data');
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error('Error retrieving stored UTM parameters:', error);
    return {};
  }
};

// Helper function to create UTM link
export const createUTMLink = (
  baseUrl: string,
  source: string,
  medium: string,
  campaign: string,
  content?: string,
  term?: string
): string => {
  const url = new URL(baseUrl);
  
  url.searchParams.set('utm_source', source);
  url.searchParams.set('utm_medium', medium);
  url.searchParams.set('utm_campaign', campaign);
  
  if (content) url.searchParams.set('utm_content', content);
  if (term) url.searchParams.set('utm_term', term);
  
  return url.toString();
};
