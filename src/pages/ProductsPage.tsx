import React, { useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import ProductCard from '../components/ProductCard';

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  isOnSale?: boolean;
  bonusPoints: number;
  category: string;
}

const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Sample products data
  const allProducts: Product[] = [
    {
      id: '1',
      name: 'SHIK Lip gloss plump Luciu de buze cu plumping-effect',
      brand: 'Shik',
      price: 250,
      image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop&crop=center',
      isNew: true,
      bonusPoints: 25,
      category: 'Machiaj'
    },
    {
      id: '2',
      name: 'SHIK Lip pencil SHIKstudio Creion de buze',
      brand: 'Shik',
      price: 270,
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop&crop=center',
      isNew: true,
      bonusPoints: 27,
      category: 'Machiaj'
    },
    {
      id: '3',
      name: 'SHIK Crimson Blush Fard de obraz',
      brand: 'Shik',
      price: 250,
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop&crop=center',
      isNew: true,
      bonusPoints: 25,
      category: 'Machiaj'
    },
    {
      id: '4',
      name: 'PUPA INVISIBLE SUNSCREEN STICK SPF50+',
      brand: 'Pupa',
      price: 304,
      originalPrice: 380,
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop&crop=center',
      isOnSale: true,
      bonusPoints: 30,
      category: 'Îngrijire'
    },
    {
      id: '5',
      name: 'D&G Light Blue Capri In Love for Women',
      brand: 'D&G',
      price: 2080,
      originalPrice: 2600,
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop&crop=center',
      isOnSale: true,
      bonusPoints: 208,
      category: 'Parfumerie'
    },
    {
      id: '6',
      name: 'D&G Light Blue Capri In Love for Men',
      brand: 'D&G',
      price: 1744,
      originalPrice: 2180,
      image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop&crop=center',
      isOnSale: true,
      bonusPoints: 174,
      category: 'Parfumerie'
    },
    {
      id: '7',
      name: 'SHIK Skin Impression foundation Fond de ten',
      brand: 'Shik',
      price: 500,
      image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=400&fit=crop&crop=center',
      bonusPoints: 50,
      category: 'Machiaj'
    },
    {
      id: '8',
      name: 'CLARINS Sun Face Cream Cream Protecție solară',
      brand: 'Clarins',
      price: 670,
      image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop&crop=center',
      bonusPoints: 67,
      category: 'Îngrijire'
    }
  ];

  const categories = ['Toate', 'Machiaj', 'Parfumerie', 'Îngrijire', 'Îngrijirea Părului', 'Bărbați'];
  const brands = ['Toate', 'Shik', 'D&G', 'Pupa', 'Clarins', 'Estee Lauder', 'Tom Ford'];

  // Filter and sort products
  const filteredProducts = allProducts
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      const matchesBrand = !selectedBrand || product.brand === selectedBrand;
      
      return matchesSearch && matchesCategory && matchesBrand;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'brand':
          return a.brand.localeCompare(b.brand);
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Produse</h1>
          <p className="text-gray-600">Descoperă gama noastră completă de produse de frumusețe</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Caută produse..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category === 'Toate' ? '' : category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              >
                {brands.map(brand => (
                  <option key={brand} value={brand === 'Toate' ? '' : brand}>
                    {brand}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              >
                <option value="name">Sortare: Nume</option>
                <option value="price-low">Preț: Crescător</option>
                <option value="price-high">Preț: Descrescător</option>
                <option value="brand">Brand</option>
              </select>

              {/* View Mode */}
              <div className="flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-black text-white' : 'text-gray-600'}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-black text-white' : 'text-gray-600'}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            {filteredProducts.length} produse găsite
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Nu s-au găsit produse care să corespundă criteriilor de căutare.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
