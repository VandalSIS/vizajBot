import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import BlogCard from '../components/BlogCard';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  image: string;
  category: string;
  tags: string[];
  slug: string;
}

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = ['Toate', 'Machiaj', 'Îngrijire', 'Parfumerie', 'Îngrijirea Părului', 'Bărbați'];

  const blogPosts: BlogPost[] = [
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
    },
    {
      id: '4',
      title: 'Cum să îți faci machiajul perfect pentru ocazii speciale',
      excerpt: 'Învață pașii esențiali pentru a crea un machiaj elegant și durabil pentru evenimente importante.',
      content: 'Conținut complet al articolului...',
      author: 'Cristina Radu',
      publishDate: '2024-01-05',
      image: 'https://via.placeholder.com/400x250?text=Special+Occasion+Makeup',
      category: 'Machiaj',
      tags: ['machiaj', 'ocazii speciale', 'tutorial', 'beauty'],
      slug: 'machiaj-perfect-ocazii-speciale'
    },
    {
      id: '5',
      title: 'Secretele pentru păr sănătos și strălucitor',
      excerpt: 'Descoperă produsele și tehniciile care îți vor transforma părul într-unul sănătos, puternic și strălucitor.',
      content: 'Conținut complet al articolului...',
      author: 'Laura Popa',
      publishDate: '2024-01-03',
      image: 'https://via.placeholder.com/400x250?text=Healthy+Hair',
      category: 'Îngrijirea Părului',
      tags: ['păr', 'îngrijire', 'sănătos', 'strălucitor'],
      slug: 'secretele-par-sanatos-straluitor'
    },
    {
      id: '6',
      title: 'Rutina de îngrijire pentru bărbați - Ghid complet',
      excerpt: 'Tot ce trebuie să știi despre îngrijirea pielii pentru bărbați, de la curățare la hidratare.',
      content: 'Conținut complet al articolului...',
      author: 'Alexandru Marin',
      publishDate: '2024-01-01',
      image: 'https://via.placeholder.com/400x250?text=Men+Skincare',
      category: 'Bărbați',
      tags: ['bărbați', 'îngrijire', 'piele', 'rutină'],
      slug: 'rutina-ingrijire-barbati-ghid-complet'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === '' || selectedCategory === 'Toate' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog Beauty
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descoperă cele mai noi tendințe în frumusețe, sfaturi de la experți și ghiduri practice
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Caută în articole..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category === 'Toate' ? '' : category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Nu s-au găsit articole care să corespundă criteriilor de căutare.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Nu rata niciun articol nou
          </h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Abonează-te la newsletter și primește cele mai noi articole despre frumusețe direct în inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Adresa ta de email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Abonează-te
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
