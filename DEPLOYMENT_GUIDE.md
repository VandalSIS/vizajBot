# Vercel Deployment Guide for Vizaje Nica

## 🚀 **Deploy to Vercel**

### **Step 1: Prepare for Deployment**

1. **Build the project locally:**
```bash
npm run build
```

2. **Test the build:**
```bash
npm run preview
```

### **Step 2: Deploy to Vercel**

#### **Option A: Vercel CLI (Recommended)**
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
# - Project name: vizaje-nica-clone
# - Directory: ./
# - Override settings? N
```

#### **Option B: Vercel Dashboard**
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### **Step 3: Environment Variables**

In Vercel Dashboard → Project Settings → Environment Variables:

```
REACT_APP_META_PIXEL_ID=your_actual_pixel_id_here
```

### **Step 4: Custom Domain (Optional)**

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

---

## 💬 **Tidio Chat Bot Integration**

### **Step 1: Get Tidio Code**

1. Go to [tidio.com](https://tidio.com)
2. Sign up for free account
3. Create a new chat widget
4. Copy the installation code

### **Step 2: Add Tidio to Your Site**

#### **Method 1: Add to index.html (Recommended)**
```html
<!-- Add this before closing </head> tag in index.html -->
<script src="//code.tidio.co/YOUR_TIDIO_ID.js" async></script>
```

#### **Method 2: Add as React Component**
Create `src/components/TidioChat.tsx`:
```tsx
import React, { useEffect } from 'react';

const TidioChat: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//code.tidio.co/YOUR_TIDIO_ID.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src*="tidio.co"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
};

export default TidioChat;
```

Then add to `src/App.tsx`:
```tsx
import TidioChat from './components/TidioChat';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <TidioChat />
          <Header />
          {/* rest of your app */}
        </div>
      </Router>
    </CartProvider>
  );
}
```

### **Step 3: Configure Tidio**

1. **Chat Widget Settings:**
   - Position: Bottom right
   - Theme: Match your site colors
   - Language: Romanian

2. **Automated Messages:**
   - Welcome message: "Bună! Cum vă pot ajuta?"
   - Offline message: "Vă vom răspunde în cel mai scurt timp"

3. **Integration with Meta Pixel:**
   - Enable "Track Events" in Tidio
   - This will track chat interactions in Meta Pixel

---

## 🎯 **Meta Pixel Setup for Production**

### **Step 1: Update Pixel ID**

1. Get your actual Meta Pixel ID from [Facebook Events Manager](https://business.facebook.com/events_manager)
2. Update `src/config/metaPixel.ts`:
```typescript
export const META_PIXEL_ID = 'YOUR_ACTUAL_PIXEL_ID';
```

### **Step 2: Test Tracking**

1. Deploy to Vercel
2. Install [Meta Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
3. Test the purchase flow
4. Verify events are firing in Meta Pixel Helper

### **Step 3: Set Up Conversion Campaigns**

1. Go to [Meta Ads Manager](https://business.facebook.com/adsmanager)
2. Create new campaign
3. Choose "Conversions" objective
4. Select your pixel
5. Choose "Purchase" as conversion event
6. Set up your ad creative and targeting

---

## 🔧 **Post-Deployment Checklist**

### **✅ Functionality Tests:**
- [ ] Homepage loads correctly
- [ ] Product pages work
- [ ] Add to cart functionality
- [ ] Checkout process
- [ ] Success page with Meta Pixel tracking
- [ ] Tidio chat widget appears
- [ ] Mobile responsiveness

### **✅ Meta Pixel Tests:**
- [ ] PageView events firing
- [ ] AddToCart events firing
- [ ] InitiateCheckout events firing
- [ ] Purchase events firing on success page
- [ ] Events visible in Meta Pixel Helper
- [ ] Events visible in Meta Events Manager

### **✅ Tidio Chat Tests:**
- [ ] Chat widget appears on all pages
- [ ] Chat opens when clicked
- [ ] Messages can be sent
- [ ] Offline messages work
- [ ] Mobile chat functionality

---

## 🚨 **Common Issues & Solutions**

### **Issue: Meta Pixel not tracking**
**Solution:** Check browser console for errors, verify pixel ID is correct

### **Issue: Tidio not loading**
**Solution:** Check if script is properly added, verify Tidio ID

### **Issue: Success page not working**
**Solution:** Check if `/ro/order-success` route is properly configured

### **Issue: Build fails on Vercel**
**Solution:** Check `package.json` scripts, ensure all dependencies are listed

---

## 📞 **Support**

- **Vercel Support**: [vercel.com/help](https://vercel.com/help)
- **Tidio Support**: [tidio.com/support](https://tidio.com/support)
- **Meta Pixel Support**: [developers.facebook.com/docs/facebook-pixel](https://developers.facebook.com/docs/facebook-pixel)

---

**Your site is now ready for production deployment with Meta Pixel tracking and Tidio chat integration!** 🎉
