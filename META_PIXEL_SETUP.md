# Meta Pixel Setup for Vizaje Nica

## 🎯 Meta Ads Conversion Tracking Setup

This guide will help you set up Meta Pixel tracking for your e-commerce site to track conversions and optimize your Meta Ads campaigns.

### 📋 Prerequisites

1. **Meta Business Account** - You need a Meta Business account
2. **Meta Ads Manager Access** - Access to create and manage ads
3. **Website Access** - Ability to modify your website code

### 🔧 Step 1: Create Meta Pixel

1. Go to [Meta Events Manager](https://business.facebook.com/events_manager)
2. Click **"Connect Data Sources"** → **"Web"**
3. Choose **"Meta Pixel"**
4. Enter your website URL: `https://your-domain.com`
5. Name your pixel: `Vizaje Nica Pixel`
6. Click **"Create Pixel"**

### 🔑 Step 2: Get Your Pixel ID

1. After creating the pixel, you'll see your **Pixel ID** (looks like: `123456789012345`)
2. Copy this ID - you'll need it for the next step

### ⚙️ Step 3: Configure Your Website

1. Open `src/config/metaPixel.ts`
2. Replace `YOUR_META_PIXEL_ID` with your actual Pixel ID:

```typescript
export const META_PIXEL_ID = '123456789012345'; // Your actual Pixel ID
```

### 🎯 Step 4: Set Up Conversion Events

The following events are already configured in your website:

#### ✅ **Purchase Event** (Success Page)
- **When**: Customer completes a purchase
- **Where**: `/success` page
- **Data Tracked**: 
  - Order value
  - Currency (MDL)
  - Order ID
  - Product information

#### ✅ **AddToCart Event** (Product Cards)
- **When**: Customer adds product to cart
- **Where**: Product cards throughout the site
- **Data Tracked**:
  - Product price
  - Product ID
  - Currency (MDL)

#### ✅ **InitiateCheckout Event** (Checkout Page)
- **When**: Customer starts checkout process
- **Where**: `/checkout` page
- **Data Tracked**:
  - Cart total value
  - Currency (MDL)

### 🚀 Step 5: Test Your Pixel

1. **Install Meta Pixel Helper** (Chrome Extension)
2. Visit your website: `http://localhost:5173/`
3. Add a product to cart
4. Go through checkout process
5. Complete a purchase
6. Check that events are firing in Meta Pixel Helper

### 📊 Step 6: Create Conversion Campaigns

1. Go to **Meta Ads Manager**
2. Create a new campaign
3. Choose **"Conversions"** as your objective
4. Select your pixel
5. Choose **"Purchase"** as your conversion event
6. Set up your ad creative and targeting

### 🔍 Step 7: Verify Tracking

1. Go to **Events Manager** → **Test Events**
2. Enter your website URL
3. Perform test actions (add to cart, checkout, purchase)
4. Verify events are being tracked correctly

### 📈 Step 8: Optimize Your Campaigns

Once tracking is working:

1. **Create Lookalike Audiences** based on purchasers
2. **Set up Dynamic Product Ads** for retargeting
3. **Use Conversion API** for better data accuracy (optional)
4. **Create Custom Audiences** for remarketing

### 🛠️ Advanced Configuration

#### Environment Variables (Optional)
You can also set your Pixel ID as an environment variable:

1. Create `.env` file in your project root:
```
REACT_APP_META_PIXEL_ID=123456789012345
```

2. Update `src/config/metaPixel.ts`:
```typescript
export const getPixelId = (): string => {
  return process.env.REACT_APP_META_PIXEL_ID || META_PIXEL_ID;
};
```

#### Custom Events
You can add custom events by using the tracking functions:

```typescript
import { trackCustomEvent } from '../components/MetaPixel';

// Track custom event
trackCustomEvent('NewsletterSignup', { value: 0, currency: 'MDL' });
```

### 🎯 Success Page URL Structure

Your success page uses this URL structure:
- **With Order ID**: `/success?orderId=1757161880375`
- **Clean URL**: `/success` (order data loaded from localStorage)

Both URLs work for tracking, but the clean URL is better for Meta Ads optimization.

### 📞 Support

If you need help with Meta Pixel setup:
1. Check [Meta Pixel Documentation](https://developers.facebook.com/docs/facebook-pixel/)
2. Use [Meta Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
3. Contact Meta Business Support

### ✅ Checklist

- [ ] Meta Pixel created
- [ ] Pixel ID added to `src/config/metaPixel.ts`
- [ ] Test events firing correctly
- [ ] Conversion campaigns created
- [ ] Tracking verified in Events Manager

---

**Your Meta Pixel is now ready to track conversions and optimize your Meta Ads campaigns!** 🎉
