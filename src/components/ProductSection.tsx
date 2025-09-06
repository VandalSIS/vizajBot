import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

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
}

interface ProductSectionProps {
  title: string;
  products: Product[];
  showViewAll?: boolean;
}

const ProductSection: React.FC<ProductSectionProps> = ({ 
  title, 
  products, 
  showViewAll = true 
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const productsPerView = 4;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + productsPerView >= products.length ? 0 : prev + productsPerView
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - productsPerView < 0 
        ? Math.max(0, products.length - productsPerView)
        : prev - productsPerView
    );
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + productsPerView);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          {showViewAll && (
            <a 
              href="/products" 
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center font-medium"
            >
              A merge la cumparaturi
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          )}
        </div>

        <div className="relative">
          {/* Navigation buttons */}
          {products.length > productsPerView && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 z-10 border border-gray-200"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 z-10 border border-gray-200"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </>
          )}

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
