import React, { useEffect } from 'react';
import ProductSection from '../components/ProductSection';
import BlogSection from '../components/BlogSection';
import { trackViewContent } from '../components/MetaPixel';
import { trackPageView, trackUTMParameters } from '../components/GoogleAnalytics';

const HomePage: React.FC = () => {
  // Track page view
  useEffect(() => {
    trackViewContent('homepage', 'Vizaje Nica Homepage');
    // Track for Google Analytics
    trackPageView('Vizaje Nica Homepage', window.location.href);
    // Track UTM parameters
    trackUTMParameters();
  }, []);

  // Sample data - în producție acestea vor veni de la API
  const newProducts = [
    {
      id: '1',
      name: 'SHIK Lip gloss plump Luciu de buze cu plumping-effect',
      brand: 'Shik',
      price: 250,
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop&crop=center',
      isNew: true,
      bonusPoints: 25
    },
    {
      id: '2',
      name: 'SHIK Lip pencil SHIKstudio Creion de buze',
      brand: 'Shik',
      price: 270,
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center',
      isNew: true,
      bonusPoints: 27
    },
    {
      id: '3',
      name: 'SHIK Crimson Blush Fard de obraz',
      brand: 'Shik',
      price: 250,
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop&crop=center',
      isNew: true,
      bonusPoints: 25
    },
    {
      id: '4',
      name: 'SHIK Total repair balm SPF 15 02 Pastry Balsam de buze',
      brand: 'Shik',
      price: 220,
      image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop&crop=center',
      isNew: true,
      bonusPoints: 22
    }
  ];

  const saleProducts = [
    {
      id: '5',
      name: 'PUPA INVISIBLE SUNSCREEN STICK SPF50+ Stic cu protectie UV 50+',
      brand: 'Pupa',
      price: 304,
      originalPrice: 380,
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&crop=center',
      isOnSale: true,
      bonusPoints: 30
    },
    {
      id: '6',
      name: 'D&G Light Blue Capri In Love for Women',
      brand: 'D&G',
      price: 2080,
      originalPrice: 2600,
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop&crop=center',
      isOnSale: true,
      bonusPoints: 208
    },
    {
      id: '7',
      name: 'D&G Light Blue Capri In Love for Men',
      brand: 'D&G',
      price: 1744,
      originalPrice: 2180,
      image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop&crop=center',
      isOnSale: true,
      bonusPoints: 174
    },
    {
      id: '8',
      name: 'D&G Q Parfum',
      brand: 'D&G',
      price: 1680,
      originalPrice: 2100,
      image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=400&fit=crop&crop=center',
      isOnSale: true,
      bonusPoints: 168
    }
  ];

  const bestSellingProducts = [
    {
      id: '9',
      name: 'SHIK Skin Impression foundation Fond de ten',
      brand: 'Shik',
      price: 500,
      image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=400&fit=crop&crop=center',
      bonusPoints: 50
    },
    {
      id: '10',
      name: 'SHIK Velvet Cover foundation Fond de ten',
      brand: 'Shik',
      price: 460,
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center',
      bonusPoints: 46
    },
    {
      id: '11',
      name: 'SWISS IMAGE Essential Alpine Aquaboost Hydrating Water Gel Cream',
      brand: 'Swiss Image',
      price: 330,
      image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop&crop=center',
      bonusPoints: 33
    },
    {
      id: '12',
      name: 'ESTEE LAUDER Advanced Night Repair Overnight Treatment',
      brand: 'Estee Lauder',
      price: 2640,
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&crop=center',
      bonusPoints: 264
    }
  ];

  const blogPosts = [
    {
      id: '1',
      title: 'Cum să alegi fondul de ten perfect pentru tipul tău de piele',
      excerpt: 'Descoperă secretele pentru a găsi fondul de ten ideal care să se potrivească perfect cu tipul tău de piele și să îți ofere un aspect natural și strălucitor.',
      content: 'Conținut complet al articolului...',
      author: 'Elena Popescu',
      publishDate: '2024-01-15',
      image: 'https://via.placeholder.com/400x250?text=Foundation+Guide',
      category: 'Machiaj',
      tags: ['fond de ten', 'machiaj', 'piele', 'beauty'],
      slug: 'cum-sa-alegi-fondul-de-ten-perfect'
    },
    {
      id: '2',
      title: 'Rutina de îngrijire a pielii pentru sezonul rece',
      excerpt: 'Învață cum să îți protejezi și să îți îngrijești pielea în timpul iernii cu această rutină completă de îngrijire.',
      content: 'Conținut complet al articolului...',
      author: 'Maria Ionescu',
      publishDate: '2024-01-10',
      image: 'https://via.placeholder.com/400x250?text=Winter+Skincare',
      category: 'Îngrijire',
      tags: ['îngrijire', 'piele', 'iarnă', 'rutină'],
      slug: 'rutina-ingrijire-piele-sezon-rece'
    },
    {
      id: '3',
      title: 'Top 5 parfumuri pentru femei recomandate de experți',
      excerpt: 'Descoperă cele mai populare și apreciate parfumuri pentru femei, selectate de experții noștri în parfumerie.',
      content: 'Conținut complet al articolului...',
      author: 'Ana Dumitrescu',
      publishDate: '2024-01-08',
      image: 'https://via.placeholder.com/400x250?text=Top+Perfumes',
      category: 'Parfumerie',
      tags: ['parfumuri', 'femei', 'recomandări', 'arome'],
      slug: 'top-5-parfumuri-femei-recomandate'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* New Products Section */}
      <ProductSection
        title="Nou"
        products={newProducts}
      />

      {/* Sale Products Section */}
      <ProductSection
        title="Reduceri"
        products={saleProducts}
      />

      {/* Best Selling Products Section */}
      <ProductSection
        title="Cel mai vandut"
        products={bestSellingProducts}
      />

      {/* Blog Section */}
      <BlogSection
        title="Blog Beauty"
        posts={blogPosts}
      />
    </div>
  );
};

export default HomePage;
