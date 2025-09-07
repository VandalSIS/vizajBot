# 🧪 Ghid de Testare UTM Tracking

## 🎯 **Problema Rezolvată: Google Analytics UTM Tracking**

### **Ce am corectat:**
- ✅ **UTM parametrii sunt acum capturați explicit** în Google Analytics
- ✅ **Toate evenimentele includ UTM data** (Purchase, AddToCart, Checkout)
- ✅ **UTM parametrii sunt stocați în session storage**
- ✅ **Custom events pentru UTM tracking**

## 🧪 **Cum să Testezi UTM Tracking**

### **Pasul 1: Testează cu UTM Link**

**Deschide această link în browser:**
```
https://vizaj-bot.vercel.app/?utm_source=facebook&utm_medium=cpc&utm_campaign=test_campaign&utm_content=test_ad
```

### **Pasul 2: Verifică Browser Console**

**Deschide Developer Tools (F12) și verifică:**

1. **Console Messages:**
   ```
   Google Analytics: UTM parameters tracked and stored
   UTM parameters stored in session: {utm_source: "facebook", utm_medium: "cpc", ...}
   ```

2. **DataLayer Events:**
   ```
   Google Analytics: page_view event with UTM data
   Google Analytics: campaign_traffic event
   ```

### **Pasul 3: Verifică Google Analytics**

**În Google Analytics:**

1. **Real-time Reports:**
   - **Path**: Reports → Realtime
   - **Ar trebui să vezi**: Traffic cu source "facebook"

2. **Traffic Acquisition:**
   - **Path**: Reports → Acquisition → Traffic acquisition
   - **Ar trebui să vezi**: facebook/cpc în tabel

3. **Campaigns:**
   - **Path**: Reports → Acquisition → Campaigns
   - **Ar trebui să vezi**: "test_campaign" în tabel

### **Pasul 4: Testează E-commerce Events**

**După ce ai vizitat cu UTM link:**

1. **Adaugă produs în coș**
2. **Mergi la checkout**
3. **Finalizează comanda**

**Verifică în console:**
```
Google Analytics: Tracking Purchase with UTM data
Google Analytics: add_to_cart event with UTM data
Google Analytics: begin_checkout event with UTM data
```

## 📊 **Ce să Cauți în Google Analytics**

### **În Real-time Reports:**
- **Active users**: 1
- **Traffic source**: facebook/cpc
- **Campaign**: test_campaign

### **În Traffic Acquisition:**
- **Source/Medium**: facebook/cpc
- **Campaign**: test_campaign
- **Sessions**: 1 (în loc de 0)

### **În E-commerce Reports:**
- **Purchase events** cu UTM data
- **Add to cart events** cu UTM data
- **Revenue** atribuit la campaign

## 🔧 **Debugging UTM Tracking**

### **Dacă nu vezi UTM data:**

1. **Verifică Console pentru erori**
2. **Verifică că UTM link-ul este corect**
3. **Verifică că Google Analytics este încărcat**
4. **Verifică că UTM parametrii sunt în URL**

### **Console Commands pentru Debug:**

```javascript
// Verifică UTM parametrii
console.log(new URLSearchParams(window.location.search).get('utm_source'));

// Verifică stored UTM data
console.log(JSON.parse(sessionStorage.getItem('utm_data') || '{}'));

// Verifică Google Analytics
console.log(window.gtag);
```

## 🎯 **UTM Links pentru Testare**

### **Facebook Test:**
```
https://vizaj-bot.vercel.app/?utm_source=facebook&utm_medium=cpc&utm_campaign=facebook_test&utm_content=banner_ad
```

### **Instagram Test:**
```
https://vizaj-bot.vercel.app/?utm_source=instagram&utm_medium=cpc&utm_campaign=instagram_test&utm_content=story_ad
```

### **Google Test:**
```
https://vizaj-bot.vercel.app/?utm_source=google&utm_medium=cpc&utm_campaign=google_test&utm_content=search_ad&utm_term=test_keyword
```

### **Email Test:**
```
https://vizaj-bot.vercel.app/?utm_source=email&utm_medium=newsletter&utm_campaign=email_test&utm_content=cta_button
```

## 📈 **Expected Results**

### **După testarea cu UTM link:**

**În Google Analytics:**
- ✅ **Real-time**: Traffic cu source/medium
- ✅ **Acquisition**: Campaign data în tabele
- ✅ **E-commerce**: Events cu UTM attribution

**În Browser Console:**
- ✅ **UTM parameters logged**
- ✅ **Events with UTM data**
- ✅ **Session storage updated**

**În Meta Events Manager:**
- ✅ **PageView events**
- ✅ **Purchase events** (dacă faci comanda)
- ✅ **UTM data în events**

## 🚀 **Testare Completă**

### **Workflow de Testare:**

1. **Deschide UTM link** în browser
2. **Verifică console** pentru UTM messages
3. **Verifică Google Analytics** Real-time
4. **Adaugă produs în coș**
5. **Verifică AddToCart event** în console
6. **Mergi la checkout**
7. **Verifică BeginCheckout event** în console
8. **Finalizează comanda**
9. **Verifică Purchase event** în console
10. **Verifică Google Analytics** pentru conversion data

## ✅ **Checklist de Testare**

- [ ] UTM link se încarcă corect
- [ ] Console arată UTM parameters
- [ ] Google Analytics Real-time arată traffic
- [ ] Traffic Acquisition arată source/medium
- [ ] Campaigns arată campaign name
- [ ] AddToCart event include UTM data
- [ ] BeginCheckout event include UTM data
- [ ] Purchase event include UTM data
- [ ] Session storage conține UTM data

## 🎯 **Rezultat Final**

**După testare, ar trebui să vezi în Google Analytics:**
- **Traffic cu UTM source/medium**
- **Campaign data în reports**
- **E-commerce events cu UTM attribution**
- **Conversion data linked la campaigns**

**UTM tracking-ul ar trebui să funcționeze perfect acum!** 🚀
