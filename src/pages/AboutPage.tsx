import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data/siteContent';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | Natural Essence Wholesale';
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-20 pb-16">
      {/* Header */}
      <div className="bg-primary-700 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="section-title text-white mb-4">About Us</h1>
          <p className="text-primary-100 text-xl max-w-3xl mx-auto">
            Learn about our journey, values, and commitment to providing premium natural products
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4 font-display">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in {companyInfo.yearEstablished}, {companyInfo.name} began as a small family operation with a simple mission: to connect artisan producers of natural oils and soaps with international markets.
            </p>
            <p className="text-gray-600 mb-4">
              With deep roots in traditional production methods and a commitment to quality, we've grown to become a trusted wholesale supplier to natural product brands across North America and Europe.
            </p>
            <p className="text-gray-600">
              Today, we partner with over 30 artisan producers, ensuring they receive fair compensation while providing our international clients with premium products at competitive prices.
            </p>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-lg h-[400px]">
            <img 
              src="https://images.pexels.com/photos/3735201/pexels-photo-3735201.jpeg" 
              alt="Artisan soap making" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white text-lg font-medium">Traditional production methods</p>
            </div>
          </div>
        </div>

        {/* Values & Mission */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 font-display">Our Mission & Values</h2>
            <p className="text-xl text-gray-700 mb-8">
              "To bridge the gap between artisan producers and international markets, bringing the highest quality natural products to businesses worldwide while supporting sustainable practices and traditional craftsmanship."
            </p>

            <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  title: 'Quality',
                  description: 'Unwavering commitment to premium quality in every product we source and supply.',
                  icon: '🌿'
                },
                {
                  title: 'Integrity',
                  description: 'Honest business practices and transparent relationships with both producers and clients.',
                  icon: '🤝'
                },
                {
                  title: 'Sustainability',
                  description: 'Supporting sustainable harvesting and production methods that respect nature and communities.',
                  icon: '♻️'
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Quality Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center font-display">Our Quality Assurance Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Careful Sourcing',
                description: 'We partner only with skilled artisans who follow traditional production methods and use premium raw materials.',
                image: 'https://images.pexels.com/photos/3626622/pexels-photo-3626622.jpeg'
              },
              {
                title: 'Rigorous Testing',
                description: 'Every batch undergoes comprehensive lab testing for purity, composition, and consistency.',
                image: 'https://images.pexels.com/photos/8326366/pexels-photo-8326366.jpeg'
              },
              {
                title: 'Quality Control',
                description: 'Our quality assurance team inspects products at multiple stages to ensure they meet our strict standards.',
                image: 'https://images.pexels.com/photos/7723583/pexels-photo-7723583.jpeg'
              },
              {
                title: 'Documentation',
                description: 'Complete transparency with comprehensive documentation for every shipment.',
                image: 'https://images.pexels.com/photos/6883847/pexels-photo-6883847.jpeg'
              },
            ].map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-soft overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 font-display">Ready to Experience Our Quality?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Join the growing number of businesses that trust us for their premium natural product needs.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;