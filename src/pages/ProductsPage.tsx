import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, CheckCircle2 } from 'lucide-react';
import ProductCard from '../components/shared/ProductCard';
import { products, getAllCategories } from '../data/products';

const ProductsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  useEffect(() => {
    document.title = 'Products | Natural Essence Wholesale';
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory]);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const categories = [
    { id: 'all', name: 'All Products' },
    ...getAllCategories()
  ];

  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const essentialOils = [
    'Lavender Essential Oil',
    'Oregano Essential Oil',
    'Rosemary Essential Oil',
    'Bay Leaf Essential Oil',
    'Sage Essential Oil',
    'Thyme Essential Oil',
    'Eucalyptus Essential Oil',
    'Peppermint Essential Oil',
  ];

  return (
    <div className="pt-20">
      <div className="bg-primary-700 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="section-title text-white mb-4">Premium Wholesale Products</h1>
          <p className="text-primary-100 text-xl max-w-3xl mx-auto">
            Explore our complete range of artisan-quality natural oils, soaps, and herbal products
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Categories */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-soft p-6">
              <h3 className="font-semibold text-lg mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-primary-100 text-primary-700 font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:hidden mb-4">
            <button
              onClick={toggleMobileFilter}
              className="flex items-center justify-center w-full py-3 bg-white rounded-lg shadow-sm text-primary-700 font-medium"
            >
              <Filter className="w-5 h-5 mr-2" />
              Filter Products
            </button>
            
            {isMobileFilterOpen && (
              <div className="mt-2 bg-white rounded-lg shadow-md p-4">
                <h3 className="font-semibold text-lg mb-2">Categories</h3>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.id);
                        setIsMobileFilterOpen(false);
                      }}
                      className={`px-3 py-2 rounded-md transition-colors text-center text-sm ${
                        selectedCategory === category.id
                          ? 'bg-primary-100 text-primary-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="flex-grow">
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <h2 className="text-2xl font-semibold">
                {selectedCategory === 'all' 
                  ? 'All Products' 
                  : categories.find(c => c.id === selectedCategory)?.name || 'Products'}
              </h2>
              <p className="text-gray-600">
                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Product Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {filteredProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product}
                  />
                ))}

                {filteredProducts.length === 0 && (
                  <div className="col-span-full text-center py-16">
                    <p className="text-gray-500 text-lg mb-4">No products found in this category.</p>
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className="btn-primary"
                    >
                      View All Products
                    </button>
                  </div>
                )}
              </motion.div>

              {/* Right Sidebar - Essential Oils List */}
              {selectedCategory === 'essential-oils' && (
                <div className="lg:w-[480px] flex-shrink-0">
                  <div className="bg-white rounded-lg shadow-soft p-6 sticky top-24">
                    <h3 className="font-semibold text-xl mb-6">Available Essential Oils</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {essentialOils.map((oil, index) => (
                        <div 
                          key={index} 
                          className="flex items-start bg-gray-50 rounded-lg p-4 hover:bg-primary-50 transition-colors"
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-lg">{oil}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-primary-50 rounded-lg p-6">
                      <h4 className="font-semibold text-lg mb-4">Request Information</h4>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center space-x-2 text-gray-700">
                          <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                          <span>Lab Reports</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700">
                          <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                          <span>Bulk Pricing</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700">
                          <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                          <span>Custom Blends</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700">
                          <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                          <span>Export Docs</span>
                        </div>
                      </div>
                      <Link 
                        to="/contact?product=essential-oils" 
                        className="btn-primary w-full text-center"
                      >
                        Request Quote
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;