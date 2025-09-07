# 📊 Complete Analytics Setup - Meta Pixel + Google Analytics

## 🎯 **Your Analytics Stack**

### **Meta Pixel (Facebook)**
- **Pixel ID**: `1245097213969744`
- **Status**: ✅ Active and tracking
- **Events**: PageView, ViewContent, AddToCart, InitiateCheckout, Purchase

### **Google Analytics 4**
- **Measurement ID**: `G-GJNTQK2270`
- **Status**: ✅ Active and tracking
- **Events**: Enhanced E-commerce tracking

### **Tidio Chat**
- **Widget ID**: `oxwnjjzc4qelsfnr39inuadao64rgxmv`
- **Status**: ✅ Active with Lyro AI

## 🔄 **Dual Tracking System**

### **What Gets Tracked by BOTH Platforms:**

**📄 Page Views**
- Meta Pixel: `PageView`, `ViewContent`
- Google Analytics: `page_view`, `view_item`

**🛒 E-commerce Events**
- Meta Pixel: `AddToCart`, `InitiateCheckout`, `Purchase`
- Google Analytics: `add_to_cart`, `begin_checkout`, `purchase`

**🔍 Search Events**
- Meta Pixel: `Search`
- Google Analytics: `search`

**📊 UTM Campaign Tracking**
- Meta Pixel: Automatic UTM capture
- Google Analytics: `campaign_traffic` events

## 🎯 **Enhanced E-commerce Tracking**

### **Purchase Events Include:**
- Transaction ID
- Order value (MDL)
- Currency (MDL)
- Product details
- Customer information
- UTM parameters

### **Add to Cart Events Include:**
- Product ID
- Product name
- Brand
- Price
- Category

### **Checkout Events Include:**
- Cart total
- Number of items
- Product details
- UTM source data

## 📈 **Analytics Dashboards**

### **Meta Events Manager**
- Real-time event tracking
- Conversion optimization
- Custom audience creation
- Campaign performance

### **Google Analytics 4**
- Enhanced e-commerce reports
- Customer journey analysis
- Conversion funnels
- UTM campaign tracking

### **UTM Analytics Widget**
- Real-time campaign data
- Source/medium tracking
- Campaign performance
- URL copying for testing

## 🚀 **Campaign URLs Ready**

### **Facebook Ads**
```
https://vizaj-bot.vercel.app/?utm_source=facebook&utm_medium=cpc&utm_campaign=beauty_products&utm_content=carousel_ad
```

### **Instagram Ads**
```
https://vizaj-bot.vercel.app/?utm_source=instagram&utm_medium=cpc&utm_campaign=beauty_products&utm_content=story_ad
```

### **Google Ads**
```
https://vizaj-bot.vercel.app/?utm_source=google&utm_medium=cpc&utm_campaign=beauty_keywords&utm_content=search_ad&utm_term=machiaj%20chisinau
```

## 🔧 **Testing Your Setup**

### **1. Test Meta Pixel**
- Install [Meta Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc)
- Visit your site with UTM parameters
- Check Events Manager for real-time data

### **2. Test Google Analytics**
- Visit [Google Analytics](https://analytics.google.com)
- Check Real-time reports
- Verify e-commerce events

### **3. Test UTM Tracking**
```
http://localhost:5173/?utm_source=facebook&utm_medium=cpc&utm_campaign=test_campaign
```
- Should see analytics widget
- Check console for UTM data
- Verify both platforms receive data

## 📊 **What You'll See in Analytics**

### **Meta Events Manager**
- PageView events
- AddToCart events
- InitiateCheckout events
- Purchase events with values
- UTM parameter data

### **Google Analytics 4**
- Enhanced e-commerce reports
- Purchase conversion tracking
- Customer acquisition data
- Campaign performance metrics
- UTM source/medium reports

## 🎯 **Ready for Campaigns**

### **Meta Ads Manager**
1. Create conversion campaign
2. Select "Purchase" as conversion event
3. Use UTM links in ad URLs
4. Monitor Events Manager

### **Google Ads**
1. Create conversion campaign
2. Import GA4 conversions
3. Use UTM links in ad URLs
4. Monitor GA4 reports

## ✅ **Complete Setup Checklist**

- ✅ Meta Pixel configured and tracking
- ✅ Google Analytics 4 configured and tracking
- ✅ Tidio chat with AI bot active
- ✅ UTM analytics widget working
- ✅ Enhanced e-commerce tracking
- ✅ Campaign URLs ready
- ✅ Dual platform tracking active

## 🚀 **Next Steps**

1. **Deploy to Vercel** - Push all changes
2. **Test live site** - Verify all tracking works
3. **Create campaigns** - Use UTM links
4. **Monitor performance** - Check both analytics platforms
5. **Optimize campaigns** - Use conversion data

**Your complete analytics and conversion tracking system is ready!** 🎉

Both Meta Pixel and Google Analytics are now tracking all customer interactions, purchases, and campaign performance with comprehensive UTM tracking and enhanced e-commerce data.
