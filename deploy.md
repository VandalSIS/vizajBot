# 🚀 Quick Deploy to Vercel

## **Your site is now ready to deploy!**

The Meta Pixel is configured with fallback support, so your site will work perfectly on Vercel even without the Pixel ID configured.

## **Deploy Steps:**

### **Option 1: Vercel CLI (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - Project name: vizaje-nica
# - Directory: ./
# - Override settings? N
```

### **Option 2: Vercel Dashboard**
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

## **What happens now:**

✅ **Site works immediately** - No Meta Pixel errors
✅ **All functionality works** - Shopping cart, checkout, success page
✅ **Meta Pixel ready** - When you get your Pixel ID, just update the config
✅ **Console logging** - You'll see Meta Pixel events in console (for debugging)

## **After deployment:**

1. **Test your site** - Make sure everything works
2. **Get Meta Pixel ID** - From Facebook Events Manager
3. **Update config** - Replace `'YOUR_META_PIXEL_ID'` with real ID
4. **Redeploy** - Push changes to trigger new deployment

## **Meta Pixel Setup (Later):**

When you're ready to set up Meta Pixel:

1. Go to [Meta Events Manager](https://business.facebook.com/events_manager)
2. Create a new pixel
3. Copy your Pixel ID
4. Update `src/config/metaPixel.ts`:
   ```typescript
   export const META_PIXEL_ID = '123456789012345'; // Your real Pixel ID
   ```
5. **OR** set environment variable in Vercel:
   - Go to Vercel Dashboard → Project Settings → Environment Variables
   - Add: `VITE_META_PIXEL_ID` = `your_pixel_id`
6. Push changes to trigger redeployment

**Your site is ready to go live! 🎉**
