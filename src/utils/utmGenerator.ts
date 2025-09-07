// UTM Link Generator for Meta Ads Campaigns
// This helps you create properly formatted UTM links for tracking

export interface UTMParameters {
  source: string;        // facebook, google, instagram, etc.
  medium: string;        // cpc, social, email, etc.
  campaign: string;      // beauty_products, summer_sale, etc.
  content?: string;      // lipstick_ad, banner_1, etc.
  term?: string;         // keywords for search campaigns
}

export const generateUTMLink = (
  baseUrl: string,
  utmParams: UTMParameters
): string => {
  const url = new URL(baseUrl);
  
  // Add UTM parameters
  url.searchParams.set('utm_source', utmParams.source);
  url.searchParams.set('utm_medium', utmParams.medium);
  url.searchParams.set('utm_campaign', utmParams.campaign);
  
  if (utmParams.content) {
    url.searchParams.set('utm_content', utmParams.content);
  }
  
  if (utmParams.term) {
    url.searchParams.set('utm_term', utmParams.term);
  }
  
  return url.toString();
};

// Pre-configured UTM templates for your beauty store
export const UTM_TEMPLATES = {
  // Facebook Ads
  facebook_beauty_products: {
    source: 'facebook',
    medium: 'cpc',
    campaign: 'beauty_products',
    content: 'carousel_ad'
  },
  
  facebook_lipstick: {
    source: 'facebook',
    medium: 'cpc',
    campaign: 'lipstick_collection',
    content: 'single_image_ad'
  },
  
  facebook_perfume: {
    source: 'facebook',
    medium: 'cpc',
    campaign: 'perfume_collection',
    content: 'video_ad'
  },
  
  // Instagram Ads
  instagram_stories: {
    source: 'instagram',
    medium: 'cpc',
    campaign: 'beauty_products',
    content: 'story_ad'
  },
  
  instagram_feed: {
    source: 'instagram',
    medium: 'cpc',
    campaign: 'beauty_products',
    content: 'feed_ad'
  },
  
  // Google Ads
  google_search: {
    source: 'google',
    medium: 'cpc',
    campaign: 'beauty_keywords',
    content: 'search_ad',
    term: 'machiaj chisinau'
  },
  
  // Email Marketing
  email_newsletter: {
    source: 'email',
    medium: 'newsletter',
    campaign: 'weekly_promotion',
    content: 'cta_button'
  },
  
  // Social Media Organic
  facebook_organic: {
    source: 'facebook',
    medium: 'social',
    campaign: 'organic_posts',
    content: 'post_link'
  },
  
  instagram_organic: {
    source: 'instagram',
    medium: 'social',
    campaign: 'organic_posts',
    content: 'bio_link'
  }
};

// Generate UTM links for your campaigns
export const generateCampaignLinks = (baseUrl: string = 'https://vizaj-bot.vercel.app') => {
  const links: Record<string, string> = {};
  
  Object.entries(UTM_TEMPLATES).forEach(([key, template]) => {
    links[key] = generateUTMLink(baseUrl, template);
  });
  
  return links;
};

// Example usage:
// const links = generateCampaignLinks();
// console.log(links.facebook_beauty_products);
// Output: https://vizaj-bot.vercel.app/?utm_source=facebook&utm_medium=cpc&utm_campaign=beauty_products&utm_content=carousel_ad
