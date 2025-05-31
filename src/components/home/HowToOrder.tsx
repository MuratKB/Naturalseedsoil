import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as LucideIcons from 'lucide-react';
import { orderSteps } from '../../data/siteContent';
import { Link } from 'react-router-dom';

const HowToOrder: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section ref={ref} className="py-16 bg-primary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">How to Order</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            A simple, streamlined process from inquiry to delivery
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary-200 -translate-y-1/2 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {orderSteps.map((step) => {
              const Icon = LucideIcons[step.icon as keyof typeof LucideIcons];
              
              return (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-lg shadow-soft relative z-10"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-lg mb-4 mx-auto">
                    {step.number}
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <div className="mb-4 flex justify-center">
                      <Icon className="h-8 w-8 text-primary-600" />
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <div className="text-center mt-12">
          <Link to="/contact" className="btn-primary">
            Get Started Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;