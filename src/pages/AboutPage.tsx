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
            US-registered producer and exporter. Owns white sage & lavender farms, black seed oil production, and Aleppo soap factory in Turkey. Lab-tested, direct-from-farm quality. Fast global shipping. Sales and support via Florida, USA office.
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4 font-display">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in {companyInfo.yearEstablished}, Natural Essence Wholesale began as a small family operation with a simple mission: to connect artisan producers of natural oils and soaps with international markets.
            </p>
            <p className="text-gray-600 mb-4">
              Today, we are proud to be producers, not just suppliers — managing our own white sage and lavender farms, as well as our Aleppo soap production facility in Turkey. With deep roots in traditional methods and a relentless commitment to quality, we've become a trusted wholesale partner for brands and retailers across North America, Europe, and the UK.
            </p>
            <p className="text-gray-600 mb-4">
              We directly oversee every stage: from sustainable farming, careful harvesting, and traditional soap making, to rigorous lab testing, quality control, and international export documentation. By working closely with over 30 artisan partners, we ensure fair compensation for producers and premium products for our clients, always at competitive prices.
            </p>
            <p className="text-gray-600 mb-4">
              We are a US-registered company with sales and customer support managed via our US office in Florida (FL). Production, warehousing, and export operations are based in Turkey.
            </p>
            <p className="text-gray-600 mb-4">
              Our US office is for correspondence, sales, and support only. All fulfillment and manufacturing are handled directly from Turkey.
            </p>
            <p className="text-gray-600">
              Our promise: Direct-from-farm and workshop natural oils and soaps, lab-tested for purity, shipped globally with full export documentation and support.
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
          <h2 className="text-2xl font-semibold mb-8 text-center font-display">Our Quality Assurance Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Careful Sourcing',
                description: 'We cultivate our own white sage, lavender, and rosemary, and craft Aleppo soap and black seed oil in our workshop.',
                image: 'https://res.cloudinary.com/dbklhd9nn/image/upload/v1748956922/soap101_eprguq.jpg'
              },
              {
                title: 'Seasonal Lab Testing',
                description: 'We conduct lab tests on our products for purity and quality. Test reports are available upon request.',
                image: 'https://images.pexels.com/photos/8326366/pexels-photo-8326366.jpeg'
              },
              {
                title: 'Quality Control',
                description: 'Every batch is checked at multiple stages, from harvest to packaging, to ensure premium quality.',
                image: 'https://res.cloudinary.com/dbklhd9nn/image/upload/v1748956921/Wsage101_u7r5rc.jpg'
              },
              {
                title: 'Documentation',
                description: 'All shipments include export documents. Health or phytosanitary certificates can be provided for bulk orders.',
                image: 'https://res.cloudinary.com/dbklhd9nn/image/upload/v1748956919/LAV101_mn1jq4.jpg'
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