import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import { companyInfo } from '../../data/siteContent';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Leaf className={`h-8 w-8 ${isScrolled ? 'text-primary-600' : 'text-white'}`} />
          <span className={`ml-2 font-display text-xl font-bold ${isScrolled ? 'text-primary-800' : 'text-white'}`}>
            {companyInfo.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${
                isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-secondary-200'
              } ${location.pathname === link.path ? 'font-semibold' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className={`btn ${
              isScrolled 
                ? 'bg-primary-600 text-white hover:bg-primary-700' 
                : 'bg-white text-primary-700 hover:bg-secondary-100'
            } px-4 py-2 rounded-md transition-colors duration-200`}
          >
            Request Quote
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          )}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-xl font-medium text-gray-800 hover:text-primary-600"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary mt-4 text-center"
              onClick={closeMenu}
            >
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;