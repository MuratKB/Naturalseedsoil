import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { heroContent } from '../../data/siteContent';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative h-hero min-h-[600px] flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroContent.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            {heroContent.heading}
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-100 font-display italic">
            {heroContent.subheading}
          </p>
          <p className="text-gray-200 mb-8 max-w-lg">
            {heroContent.description}
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/contact" 
              className="btn-primary"
            >
              {heroContent.cta}
            </Link>
            <Link 
              to="/products" 
              className="btn border-2 border-white text-white hover:bg-white hover:text-primary-700 transition-colors duration-200"
            >
              {heroContent.secondaryCta}
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;