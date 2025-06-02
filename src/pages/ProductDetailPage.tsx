import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronDown, ChevronUp, FileText, ShoppingCart } from 'lucide-react';
import { getProductById } from '../data/products';
import ContactForm from '../components/shared/ContactForm';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const product = getProductById(productId || '');
  
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [activeImageUrl, setActiveImageUrl] = useState<string>('');

  useEffect(() => {
    if (!product) {
      navigate('/products');
      return;
    }
    
    setActiveImageUrl(product.imageUrl);
    document.title = `${product.name} | Natural Essence Wholesale`;
  }, [product, navigate]);

  if (!product) {
    return null;
  }

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const productImages = [
    product.imageUrl,
    'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/6621460/pexels-photo-6621460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  ];

  const categoryName = product.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="pt-20 pb-16">
      <div className="container-custom">
        <nav className="flex py-4 text-sm">
          <Link to="/" className="text-gray-500 hover:text-primary-600">Home</Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link to="/products" className="text-gray-500 hover:text-primary-600">Products</Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link 
            to={`/products?category=${product.category}`} 
            className="text-gray-500 hover:text-primary-600"
          >
            {categoryName}
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-soft overflow-hidden mb-4">
              <img 
                src={activeImageUrl} 
                alt={product.name} 
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
            
            <div className="flex space-x-3">
              {productImages.map((imgUrl, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveImageUrl(imgUrl)}
                  className={`w-24 h-24 rounded-md overflow-hidden border-2 ${
                    activeImageUrl === imgUrl ? 'border-primary-600' : 'border-gray-200'
                  }`}
                >
                  <img src={imgUrl} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2 font-display">{product.name}</h1>
            <p className="text-primary-600 font-medium mb-4">{categoryName}</p>
            
            <div className="prose max-w-none mb-6">
              <p className="text-gray-600 text-lg">{product.description}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Available Bulk Options:</h3>
              <div className="flex flex-wrap gap-3">
                {product.bulkOptions.map((option, index) => (
                  <div 
                    key={index} 
                    className="px-4 py-2 bg-gray-100 rounded-md text-gray-800 flex items-center"
                  >
                    <span className="font-semibold">{option.size}{option.unit}</span>
                    {option.minOrder && (
                      <span className="text-sm ml-2 text-gray-600">
                        (Min: {option.minOrder})
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mt-0.5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#request-quote" 
                className="btn-primary flex-1"
              >
                <FileText className="w-5 h-5 mr-2" />
                Request Quote
              </a>
              <Link 
                to={`/shop?product=${product.id}`}
                className="btn-outline flex-1 flex items-center justify-center"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Buy Now
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl">
            {product.faq.map((item, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-4 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium">{item.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="p-4 bg-gray-50">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div id="request-quote" className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Interested in {product.name}?</h2>
          <ContactForm isQuote={true} productName={product.name} />
        </div>

        <div className="mt-12">
          <Link to="/products" className="inline-flex items-center text-primary-600 hover:text-primary-700">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;