import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Truck } from 'lucide-react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  showShipping?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, showShipping = false }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="card group h-full flex flex-col"
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <span className="text-xs font-medium bg-primary-600 text-white px-2 py-1 rounded-full">
            {product.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </span>
        </div>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="font-display text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{product.shortDescription}</p>

        <div className="mt-auto space-y-4">
          {showShipping && (
            <div className="text-sm text-gray-500 flex items-center justify-center">
              <Truck className="w-4 h-4 mr-1" />
              Shipping included
            </div>
          )}

          <Link
            to={`/products/${product.id}`}
            className="btn-primary w-full flex items-center justify-center"
          >
            View Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;