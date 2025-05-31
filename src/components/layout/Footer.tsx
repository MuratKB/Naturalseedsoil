import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { companyInfo } from '../../data/siteContent';
import { getAllCategories } from '../../data/products';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-6 w-6 text-primary-500" />
              <span className="ml-2 font-display text-xl font-bold">{companyInfo.name}</span>
            </div>
            <p className="text-gray-400 mb-4">
              {companyInfo.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              {getAllCategories().map((category) => (
                <li key={category.id}>
                  <Link 
                    to={`/products?category=${category.id}`}
                    className="text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/products" 
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  View All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  Request a Quote
                </Link>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  Shipping & Export
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  Private Label Solutions
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-primary-500 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-400">{companyInfo.address}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary-500 mr-2" />
                <a href={`tel:${companyInfo.phone}`} className="text-gray-400 hover:text-primary-500 transition-colors">
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary-500 mr-2" />
                <a href={`mailto:${companyInfo.email}`} className="text-gray-400 hover:text-primary-500 transition-colors">
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <img 
              src="https://www.mastercard.us/content/dam/public/mastercardcom/na/us/en/homepage/Home/mc-logo-52.svg" 
              alt="Payment Methods" 
              className="h-8" 
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;