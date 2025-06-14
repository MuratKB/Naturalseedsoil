import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Package, DollarSign, Mail, Truck, AlertCircle } from 'lucide-react';
import { shopProducts } from '../data/shopProducts';
import { ShopProduct, ProductSize, CheckoutFormData } from '../types/shop';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { stripePromise, createCheckoutSession } from '../utils/stripe';

const SHIPPING_COUNTRIES = [
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'DE', name: 'Germany' },
  { code: 'FR', name: 'France' },
  { code: 'IT', name: 'Italy' },
  { code: 'AT', name: 'Austria' },
  { code: 'SE', name: 'Sweden' },
  { code: 'CH', name: 'Switzerland' },
  { code: 'SG', name: 'Singapore' },
  { code: 'TW', name: 'Taiwan' },
  { code: 'KR', name: 'South Korea' },
  { code: 'not-listed', name: 'Not listed? Please contact us' }
];

const ShopPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<ShopProduct | null>(null);
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);
  const [quantity, setQuantity] = useState<number>(0);
  const [showCheckout, setShowCheckout] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
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

  useEffect(() => {
    document.title = 'Shop | Natural Essence Wholesale';
  }, []);

  useEffect(() => {
    const productId = searchParams.get('product');
    if (productId) {
      const product = shopProducts.find(p => p.id === productId);
      if (product) {
        setSelectedProduct(product);
        const firstSize = product.sizes.find(s => s.price !== undefined);
        if (firstSize) {
          setSelectedSize(firstSize);
          setQuantity(product.minOrder || 1);
        }
      }
    }
  }, [searchParams]);

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>, product: ShopProduct) => {
    const sizeIndex = parseInt(e.target.value);
    const size = product.sizes[sizeIndex];
    setSelectedProduct(product);
    setSelectedSize(size);
    setQuantity(product.minOrder || 1);
    setShowCheckout(false);
    setError(null);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (selectedProduct?.minOrder && value < selectedProduct.minOrder) {
      setQuantity(selectedProduct.minOrder);
    } else if (selectedSize && value > selectedSize.stockLevel) {
      setQuantity(selectedSize.stockLevel);
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
    setError(null);
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === 'not-listed') {
      navigate('/contact?international=true');
      return;
    }
    setFormData(prev => ({ ...prev, country: value }));
  };

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedProduct || !selectedSize || !quantity) {
      return;
    }

    // Check stock availability
    if (!selectedSize.inStock || selectedSize.stockLevel < quantity) {
      setError('Sorry, insufficient stock available.');
      return;
    }

    // Validate country
    if (!SHIPPING_COUNTRIES.find(c => c.code === formData.country)) {
      setError('For customers from unlisted countries, please contact us for a custom shipping quote and payment instructions.');
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe failed to load');
      }

      const session = await createCheckoutSession(
        selectedProduct.id,
        `${selectedSize.size} ${selectedSize.unit}`,
        quantity,
        formData
      );

      const result = await stripe.redirectToCheckout({
        sessionId: session.sessionId,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }

      // Redirect to success page will happen automatically
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while processing your payment. Please try again or contact support.');
    } finally {
      setIsProcessing(false);
    }
  };

  const calculateTotal = () => {
    if (!selectedSize?.price || !quantity) return 0;
    return selectedSize.price * quantity;
  };

  return (
    <div className="pt-20 pb-16">
      <div className="bg-primary-700 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="section-title text-white mb-4">Wholesale Products</h1>
          <p className="text-primary-100 text-xl max-w-3xl mx-auto">
            Premium natural oils, soaps, and sage products for international B2B buyers
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
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
                  <div className="flex flex-col space-y-2">
                    <label htmlFor={`size-${product.id}`} className="text-sm font-medium text-gray-700">
                      Select Size/Quantity
                    </label>
                    <select
                      id={`size-${product.id}`}
                      className="input"
                      onChange={(e) => handleSizeChange(e, product)}
                      value={selectedProduct?.id === product.id ? 
                        product.sizes.findIndex(s => s === selectedSize) : 
                        ''}
                    >
                      <option value="">Choose an option</option>
                      {product.sizes.map((size, index) => (
                        <option 
                          key={index} 
                          value={index}
                          disabled={!size.inStock || size.stockLevel === 0}
                        >
                          {size.size} {size.unit} - {size.price ? 
                            `$${size.price.toLocaleString()}` : 
                            'Contact for Bulk'} 
                          {size.stockLevel === 0 ? ' (Out of Stock)' : 
                           size.stockLevel <= 100 ? ` (Only ${size.stockLevel} left)` : ''}
                        </option>
                      ))}
                    </select>
                  </div>

                  {selectedProduct?.id === product.id && selectedSize && (
                    <div className="space-y-4">
                      {selectedSize.stockLevel > 0 ? (
                        <>
                          <div className="flex justify-between items-center">
                            {selectedSize.price ? (
                              <button
                                onClick={handleBuyNow}
                                className="btn-primary w-full"
                              >
                                <Package className="w-4 h-4 mr-2" />
                                Buy Now
                              </button>
                            ) : (
                              <Link
                                to={`/contact?product=${product.id}&bulk=true`}
                                className="btn-outline w-full flex items-center justify-center"
                              >
                                <Mail className="w-4 h-4 mr-2" />
                                Contact for Bulk
                              </Link>
                            )}
                          </div>
                          {selectedSize.stockLevel <= 100 && (
                            <p className="text-amber-600 text-sm flex items-center justify-center">
                              <AlertCircle className="w-4 h-4 mr-1" />
                              Only {selectedSize.stockLevel} units left
                            </p>
                          )}
                        </>
                      ) : (
                        <div className="text-red-600 text-sm flex items-center justify-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          Out of Stock
                        </div>
                      )}
                    </div>
                  )}

                  <div className="text-sm text-gray-500 flex items-center justify-center">
                    <Truck className="w-4 h-4 mr-1" />
                    Shipping included
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {showCheckout && selectedProduct && selectedSize && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-semibold">Complete Your Order</h3>
                  <button
                    onClick={() => {
                      setShowCheckout(false);
                      setError(null);
                    }}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                </div>

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                    {error}
                  </div>
                )}

                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{selectedProduct.name}</span>
                    <span className="text-primary-600">
                      {selectedSize.size} {selectedSize.unit} × {quantity}
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
                      onChange={handleCountryChange}
                    >
                      <option value="">Select a country</option>
                      {SHIPPING_COUNTRIES.map(country => (
                        <option 
                          key={country.code} 
                          value={country.code}
                          className={country.code === 'not-listed' ? 'font-medium text-primary-600' : ''}
                        >
                          {country.name}
                        </option>
                      ))}
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

                  <button 
                    type="submit" 
                    className={`btn-primary w-full ${isProcessing ? 'opacity-70 cursor-not-allowed' : ''}`}
                    disabled={isProcessing || !SHIPPING_COUNTRIES.find(c => c.code === formData.country)}
                  >
                    {isProcessing ? (
                      <span className="flex items-center justify-center">
                        <span className="animate-spin mr-2">⌛</span>
                        Processing...
                      </span>
                    ) : (
                      <>
                        <DollarSign className="w-5 h-5 mr-2" />
                        Complete Order
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-500 mt-4">
                    By completing this order, you agree to our terms of service and privacy policy.
                  </p>
                </form>
              </div>
            </div>
          </div>
        )}

        {selectedProduct && selectedSize && !showCheckout && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-40">
            <div className="container-custom">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="font-medium">{selectedProduct.name}</span>
                  <span className="text-gray-600">
                    {selectedSize.size} {selectedSize.unit}
                  </span>
                  <div className="flex items-center space-x-2">
                    <label className="text-sm text-gray-600">Quantity:</label>
                    <input
                      type="number"
                      min={selectedProduct.minOrder || 1}
                      max={selectedSize.stockLevel}
                      value={quantity}
                      onChange={handleQuantityChange}
                      className="w-20 input py-1 px-2"
                    />
                    <span className="text-sm text-gray-500">
                      (Max: {selectedSize.stockLevel})
                    </span>
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
                    disabled={!selectedSize.inStock || selectedSize.stockLevel === 0}
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