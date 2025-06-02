import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, DollarSign, Mail } from 'lucide-react';
import { shopProducts } from '../data/shopProducts';
import { ShopProduct, ProductSize, CheckoutFormData } from '../types/shop';
import { Link } from 'react-router-dom';

const ShopPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ShopProduct | null>(null);
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);
  const [quantity, setQuantity] = useState<number>(0);
  const [showCheckout, setShowCheckout] = useState(false);
  const [formData, setFormData] = useState<CheckoutFormData>({
    name: '',
    email: '',
    company: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
    phone: '',
  });

  const handleSizeSelect = (product: ShopProduct, size: ProductSize) => {
    setSelectedProduct(product);
    setSelectedSize(size);
    setQuantity(product.minOrder || 1);
    setShowCheckout(false);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (selectedProduct?.minOrder && value < selectedProduct.minOrder) {
      setQuantity(selectedProduct.minOrder);
    } else {
      setQuantity(value);
    }
  };

  const handleBuyNow = () => {
    if (selectedSize?.price === undefined) {
      window.location.href = '/contact?bulk=true';
      return;
    }
    setShowCheckout(true);
  };

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your backend to create a Stripe session
    // For now, we'll just show a success message
    alert('Order submitted successfully! We will contact you for payment details.');
    setShowCheckout(false);
    setSelectedProduct(null);
    setSelectedSize(null);
    setQuantity(0);
  };

  const calculateTotal = () => {
    if (!selectedSize?.price || !quantity) return 0;
    return selectedSize.price * quantity;
  };

  return (
    <div className="pt-20 pb-16">
      {/* Header */}
      <div className="bg-primary-700 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="section-title text-white mb-4">Wholesale Products</h1>
          <p className="text-primary-100 text-xl max-w-3xl mx-auto">
            Premium natural oils, soaps, and sage products for international B2B buyers
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shopProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-soft overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="space-y-4">
                  {product.sizes.map((size) => (
                    <div key={`${size.size}${size.unit}`} className="flex items-center justify-between">
                      <span className="font-medium">
                        {size.size}{size.unit}
                      </span>
                      {size.price ? (
                        <button
                          onClick={() => handleSizeSelect(product, size)}
                          className="btn-primary text-sm px-4 py-2"
                        >
                          ${size.price.toLocaleString()}
                        </button>
                      ) : (
                        <Link
                          to="/contact?bulk=true"
                          className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                        >
                          <Mail className="w-4 h-4 mr-1" />
                          Contact for Bulk
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {product.minOrder && (
                  <p className="text-sm text-gray-500 mt-4">
                    Minimum order: {product.minOrder} {product.sizes[0].unit}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Checkout Modal */}
        {showCheckout && selectedProduct && selectedSize && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-semibold">Complete Your Order</h3>
                  <button
                    onClick={() => setShowCheckout(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                </div>

                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{selectedProduct.name}</span>
                    <span className="text-primary-600">
                      {selectedSize.size}{selectedSize.unit} × {quantity}
                    </span>
                  </div>
                  <div className="text-xl font-semibold text-right">
                    Total: ${calculateTotal().toLocaleString()}
                  </div>
                </div>

                <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="input"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="input"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="input"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Shipping Address *
                    </label>
                    <input
                      type="text"
                      required
                      className="input"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        className="input"
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        State/Province *
                      </label>
                      <input
                        type="text"
                        required
                        className="input"
                        value={formData.state}
                        onChange={(e) => setFormData({...formData, state: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Postal Code *
                      </label>
                      <input
                        type="text"
                        required
                        className="input"
                        value={formData.postalCode}
                        onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Country *
                    </label>
                    <select
                      required
                      className="input"
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                    >
                      <option value="">Select a country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="GB">United Kingdom</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      className="input"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    <DollarSign className="w-5 h-5 mr-2" />
                    Complete Order
                  </button>

                  <p className="text-sm text-gray-500 mt-4">
                    By completing this order, you agree to our terms of service and privacy policy.
                    We'll contact you within 24 hours to arrange payment and confirm shipping details.
                  </p>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Selected Product Details */}
        {selectedProduct && selectedSize && !showCheckout && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-40">
            <div className="container-custom">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="font-medium">{selectedProduct.name}</span>
                  <span className="text-gray-600">
                    {selectedSize.size}{selectedSize.unit}
                  </span>
                  <div className="flex items-center space-x-2">
                    <label className="text-sm text-gray-600">Quantity:</label>
                    <input
                      type="number"
                      min={selectedProduct.minOrder || 1}
                      value={quantity}
                      onChange={handleQuantityChange}
                      className="w-20 input py-1 px-2"
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  {selectedSize.price && (
                    <span className="text-xl font-semibold">
                      ${calculateTotal().toLocaleString()}
                    </span>
                  )}
                  <button
                    onClick={handleBuyNow}
                    className="btn-primary"
                  >
                    <Package className="w-5 h-5 mr-2" />
                    {selectedSize.price ? 'Buy Now' : 'Contact for Bulk'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;