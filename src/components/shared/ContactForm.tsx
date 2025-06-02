import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  isQuote?: boolean;
  productName?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ isQuote = false, productName = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    country: '',
    email: '',
    phone: '',
    message: productName ? `I'm interested in ordering ${productName}` : '',
    products: [] as string[],
    requestSample: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleProductCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      products: checked
        ? [...prev.products, value]
        : prev.products.filter(product => product !== value),
    }));
  };

  const formName = isQuote ? 'quote-request' : 'contact';

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center p-8"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-4">
            Your {isQuote ? 'quote request' : 'message'} has been submitted successfully. Our team will get back to you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="btn-primary"
          >
            Send Another Request
          </button>
        </motion.div>
      ) : (
        <form
          name={formName}
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value={formName} />
          <p className="hidden">
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>

          <h3 className="text-2xl font-semibold mb-6 font-display">
            {isQuote ? 'Request a Quote' : 'Contact Us'}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company Name *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="input"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Business Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
              Country *
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="input"
            >
              <option value="">Select your country</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="Italy">Italy</option>
              <option value="Spain">Spain</option>
              <option value="Australia">Australia</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {isQuote && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Products of Interest *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="essential-oils"
                    name="products[]"
                    value="Essential Oils"
                    checked={formData.products.includes('Essential Oils')}
                    onChange={handleProductCheckboxChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="essential-oils" className="ml-2 text-sm text-gray-700">
                    Essential Oils
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="carrier-oils"
                    name="products[]"
                    value="Carrier Oils"
                    checked={formData.products.includes('Carrier Oils')}
                    onChange={handleProductCheckboxChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="carrier-oils" className="ml-2 text-sm text-gray-700">
                    Carrier Oils
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="soaps"
                    name="products[]"
                    value="Natural Soaps"
                    checked={formData.products.includes('Natural Soaps')}
                    onChange={handleProductCheckboxChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="soaps" className="ml-2 text-sm text-gray-700">
                    Natural Soaps
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="sage"
                    name="products[]"
                    value="Sage Products"
                    checked={formData.products.includes('Sage Products')}
                    onChange={handleProductCheckboxChange}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="sage" className="ml-2 text-sm text-gray-700">
                    Sage Products
                  </label>
                </div>
              </div>
            </div>
          )}

          {isQuote && (
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="requestSample"
                name="requestSample"
                checked={formData.requestSample}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="requestSample" className="ml-2 text-sm text-gray-700">
                I would like to request product samples
              </label>
            </div>
          )}

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="input"
              placeholder="Please provide details about your requirements, quantities, and any specific questions."
            ></textarea>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn-primary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                    <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : isQuote ? (
                'Submit Quote Request'
              ) : (
                'Send Message'
              )}
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            By submitting this form, you agree to our privacy policy and terms of service. We'll respond to your inquiry within 24 hours.
          </p>
        </form>
      )}
    </div>
  );
};

export default ContactForm;