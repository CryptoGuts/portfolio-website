import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });

    return () => {
      unsubscribe(); // Cleanup the scroll listener on unmount
    };
  }, [scrollY]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-darkBlue/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-purple to-orange rounded-lg flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-all duration-300">
                <span className="text-white font-space-grotesk font-bold text-xl transform -rotate-12 group-hover:rotate-0">CG</span>
              </div>
              <span className="font-space-grotesk text-white text-xl font-bold">Crypto Guts</span>
            </a>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  className="font-roboto text-lightGray hover:text-purple text-sm font-medium transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple to-orange px-6 py-2 rounded-lg text-white font-medium hover:opacity-90 transition-all duration-300 shadow-lg"
            >
              Explore Services
            </motion.a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-purple hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-darkBlue/95 backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lightGray hover:text-purple block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#services"
              className="block w-full text-center bg-gradient-to-r from-purple to-orange px-6 py-2 rounded-lg text-white font-medium hover:opacity-90 transition-all duration-300 mt-4"
              onClick={() => setIsOpen(false)}
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
