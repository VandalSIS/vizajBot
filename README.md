# Vizaje Nica Clone

Un duplicat modern al site-ului Vizaje Nica, construit cu React, TypeScript și Vite.js.

## 🚀 Caracteristici

- **Design Responsive**: Optimizat pentru desktop, tablet și mobile
- **Blog Integrat**: Sistem complet de blog cu articole și categorii
- **Catalog de Produse**: Afișare produse cu filtrare și căutare
- **Componente Modulare**: Arhitectură React cu componente reutilizabile
- **Tailwind CSS**: Styling modern și consistent
- **TypeScript**: Type safety și dezvoltare mai sigură

## 📁 Structura Proiectului

```
src/
├── components/          # Componente React reutilizabile
│   ├── Header.tsx      # Header cu navigare și căutare
│   ├── Footer.tsx      # Footer cu link-uri și informații
│   ├── ProductCard.tsx # Card pentru produse
│   ├── ProductSection.tsx # Secțiune cu produse
│   ├── BlogCard.tsx    # Card pentru articole de blog
│   └── BlogSection.tsx # Secțiune cu articole
├── pages/              # Pagini principale
│   ├── HomePage.tsx    # Pagina principală
│   ├── BlogPage.tsx    # Lista de articole
│   └── BlogPostPage.tsx # Articol individual
├── App.tsx             # Componenta principală cu routing
├── main.tsx           # Entry point
└── style.css          # Stiluri globale
```

## 🛠️ Instalare și Rulare

1. **Instalare dependențe:**
   ```bash
   npm install
   ```

2. **Rulare în modul dezvoltare:**
   ```bash
   npm run dev
   ```

3. **Build pentru producție:**
   ```bash
   npm run build
   ```

4. **Preview build-ul:**
   ```bash
   npm run preview
   ```

## 🎨 Tehnologii Folosite

- **React 18** - Framework UI
- **TypeScript** - Type safety
- **Vite.js** - Build tool rapid
- **React Router** - Navigare între pagini
- **Tailwind CSS** - Framework CSS
- **Lucide React** - Iconițe moderne

## 📱 Funcționalități

### Homepage
- Hero section cu call-to-action
- Secțiuni de produse (Nou, Reduceri, Cel mai vândut)
- Blog section cu articole recente
- Newsletter signup

### Blog
- Lista de articole cu filtrare pe categorii
- Căutare în articole
- Pagină individuală pentru fiecare articol
- Articole similare
- Tag-uri și meta-informații

### Produse
- Card-uri de produse cu imagini
- Prețuri și bonusuri
- Badge-uri pentru produse noi/reduceri
- Hover effects și interacțiuni

## 🔧 Configurare pentru Dezvoltare

### Variabile de Mediu
Creează un fișier `.env.local` pentru configurații locale:

```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=Vizaje Nica Clone
```

### Structura API (pentru backend viitor)
```typescript
// Produse
GET /api/products
GET /api/products/:id
GET /api/products/category/:category

// Blog
GET /api/blog/posts
GET /api/blog/posts/:slug
GET /api/blog/categories

// Newsletter
POST /api/newsletter/subscribe
```

## 📧 Email Marketing Integration

Sistemul de blog este pregătit pentru integrarea cu servicii de email marketing:

- **Articole SEO-friendly** cu slug-uri optimizate
- **Meta-tags** pentru social media sharing
- **Newsletter signup** în multiple locații
- **Categorii** pentru segmentarea audienței
- **Tag-uri** pentru personalizarea conținutului

## 🚀 Deployment

### Vercel (Recomandat)
1. Conectează repository-ul la Vercel
2. Configurează build command: `npm run build`
3. Setează output directory: `dist`

### Netlify
1. Conectează repository-ul la Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

## 📈 Optimizări SEO

- Meta tags pentru fiecare pagină
- Structured data pentru produse
- Sitemap generat automat
- URL-uri SEO-friendly
- Open Graph tags pentru social media

## 🔮 Dezvoltări Viitoare

- [ ] Sistem de autentificare
- [ ] Coș de cumpărături
- [ ] Integrare cu API backend
- [ ] Sistem de review-uri
- [ ] Chatbot integrat
- [ ] Analytics și tracking
- [ ] PWA (Progressive Web App)

## 📞 Suport

Pentru întrebări sau suport tehnic, contactează echipa de dezvoltare.

---

**Dezvoltat cu ❤️ pentru Vizaje Nica**
