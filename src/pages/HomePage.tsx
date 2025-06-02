import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Features from '../components/home/Features';
import HowToOrder from '../components/home/HowToOrder';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import CTASection from '../components/home/CTASection';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Natural Essence Wholesale | Premium Oils & Soaps for B2B';
  }, []);

  return (
    <>
      <Hero />
      
      {/* SEO Content Section */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-8 max-w-5xl mx-auto leading-tight">
            Premium Bulk Natural Oils: Black Seed Oil, Laurel Berry Oil & White Sage Wholesale | Private Label Solutions
          </h1>
          
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-700">
            <p className="mb-6">
              Natural Essence Wholesale is your trusted source for premium bulk natural oils and wellness products, delivered directly from Turkey to international markets. We specialize in high-quality Black Seed Oil featuring exceptional thymoquinone content (2-3%), traditional Laurel Berry Oil for authentic Aleppo soap production, and premium White Sage wholesale supplies. Our comprehensive product range serves businesses across the USA, UK, Canada, and Europe with competitive bulk pricing and efficient international shipping solutions.
            </p>
            
            <p className="mb-6">
              As industry leaders in carrier oils and essential oils, we maintain rigorous quality standards with thorough laboratory testing for every batch. Our signature products include cold-pressed Black Seed Oil, authentic Laurel Berry Oil, traditional Aleppo soap with 20-40% laurel oil content, and sustainably harvested White Sage smudge sticks. We provide complete private label solutions for natural wellness brands, supporting your business with custom formulations, packaging, and branding options.
            </p>
          </div>
        </div>
      </section>

      <FeaturedProducts />
      <Features />
      <HowToOrder />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
};

export default HomePage;