import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: 'Infographics of Projects',
      category: 'Graphic Design',
      image: 'dist/assets/infographics.png',
      description: 'These visually engaging infographics represent my ability to simplify complex crypto concepts and blockchain trends into clear, impactful visuals that resonate with audiences. This work highlights my skills in data visualization and graphic design.',
      link: 'https://x.com/crypt0_guts',
    },
    {
      title: 'Velo & BlackRock: A Game-Changing Integration Video',
      category: 'Video Editing',
      image: 'dist/assets/velo.jpeg',
      description: "This video showcases my ability to craft compelling narratives around major blockchain developments, like Velo Labs' integration of BlackRock's tokenized Short-Term Treasury Fund. It's a testament to my expertise in content creation and the crypto industry.",
      link: 'https://x.com/crypt0_guts/status/1834436821532770521',
    },
    {
      title: 'Crypto Fundamentals for Beginners: Ultimate Guide & eBook',
      category: 'E-Books',
      image: 'dist/assets/ebooks.jpg',
      description: 'This comprehensive eBook is a cornerstone of my portfolio, demonstrating my ability to create accessible, beginner-friendly resources for mastering cryptocurrency, blockchain technology, DeFi, and Web3.',
      link: 'https://drive.google.com/file/d/1N2bS-FDKcJrzVqRijVT9EYj1UGAENRyl/view?usp=sharing',
    },
    {
      title: 'Web3 Design Agency Company',
      category: 'UI/UX Design',
      image: 'dist/assets/laptopdesign.jpg',
      description: 'This UI/UX design project exemplifies my expertise in creating responsive, user-centric designs. It highlights a modern approach to web design, blending bold aesthetics with functionality to deliver an engaging user experience.',
    },
  ];

  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));

  return (
    <section id="portfolio" className="py-24 bg-darkBlue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">Proven Results in the Crypto Space</h2>
          <p className="text-lightGray max-w-3xl mx-auto text-lg">
            Take a closer look at my portfolio, showcasing the impactful work I've delivered across blockchain, design, and content creation.
          </p>
        </motion.div>

        {/* Carousel Section */}
        <div className="relative overflow-hidden rounded-2xl">
          <motion.div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={project.title} className="w-full flex-shrink-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group overflow-hidden rounded-2xl"
                >
                  <div className="w-[1280px] h-[720px] max-w-full max-h-full mx-auto">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-darkBlue via-darkBlue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <span className="text-purple text-sm font-medium mb-2 block">{project.category}</span>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-lightGray mb-4">{project.description}</p>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-purple hover:text-white transition-colors"
                        >
                          View Work <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Carousel Navigation */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-darkBlue text-white rounded-full p-2 hover:bg-purple transition-colors"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-darkBlue text-white rounded-full p-2 hover:bg-purple transition-colors"
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
