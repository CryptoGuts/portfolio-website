import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,  // Trigger the load only once when it comes into view
    threshold: 0.5,     // Trigger when 50% of the element is in the viewport
  });

  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    if (inView) {
      setShowModel(true);  // Load the model when Hero section is in view
    }
  }, [inView]);

  return (
    <section id="home" className="min-h-screen flex items-center bg-darkBlue pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10"
          >
            <h1 className="font-space-grotesk text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Bridging the Gap Between{' '}
              <span className="text-purple">Blockchain</span> and{' '}
              <span className="gradient-text">People</span>
            </h1>
            <p className="font-roboto text-lightGray text-lg mb-8 leading-relaxed">
              Your partner in creating engaging content, intuitive designs, and innovative strategies for the blockchain world.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple to-orange px-8 py-4 rounded-xl font-space-grotesk flex items-center gap-2 text-white hover:opacity-90 transition-all duration-300 shadow-lg"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border border-purple/20 text-white px-8 py-4 rounded-xl font-space-grotesk flex items-center gap-2 hover:bg-purple/20 transition-all duration-300"
              >
                View Portfolio
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            ref={ref}  // Apply the ref here for IntersectionObserver
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[600px] hidden md:block pointer-events-none"
          >
            {/* Lazy load Spline model */}
            {showModel && (
              <Spline scene="https://prod.spline.design/08AXB1BscwXpptDu/scene.splinecode" />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
