import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { FileText, Package } from 'lucide-react';

const CTASection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref}
      className="py-20 bg-primary-700 text-white"
    >
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">
            Ready to Elevate Your Product Line?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Contact us today to discuss your wholesale needs, request samples, or get a personalized quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact"
              className="btn bg-white text-primary-700 hover:bg-gray-100 flex items-center justify-center"
            >
              <FileText className="mr-2 h-5 w-5" />
              Request a Quote
            </Link>
            <Link 
              to="/contact?sample=true"
              className="btn bg-primary-600 border border-white text-white hover:bg-primary-500 flex items-center justify-center"
            >
              <Package className="mr-2 h-5 w-5" />
              Order Samples
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;