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