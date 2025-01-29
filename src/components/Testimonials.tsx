import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const testimonials = [
    {
      quote: "Gut's in-depth educational content, security tips, and guides—Blockchained Snipers has become an essential resource for me to stay informed and make smart crypto decisions!",
      author: "BlockchainedBB",
      position: "Crypto Influencer, BlockchainedBB",
      image: "dist/assets/blockchainedbb.jpg"
    },
    {
      quote: "Love the infographic content! The visual representations in Gut's newsletter break down complex concepts and trends into something simple and easy to understand.",
      author: "Sean Munn",
      position: "CMO, Three Protocol",
      image: "dist/assets/sean.jpg"
    },
    {
      quote: "We were truly impressed by Gut's in-depth coin reviews and the meticulous level of detail you bring to each project analysis.",
      author: "Mr Kwibs",
      position: "Community Manager, Zano",
      image: "dist/assets/MrKwibs.jpg"
    },
    {
      quote: "Gut's creates amazing content that breaks down complex crypto concepts into easy-to-understand insights.",
      author: "Cyn",
      position: "CEO, Dtravel",
      image: "dist/assets/cyn.jpg"
    },
    {
      quote: "A fantastic showcase of creative work and innovative projects! Gut's consistently delivers high-quality, engaging videos that make complex topics accessible and fun to follow.",
      author: "Pure8",
      position: "Crypto Influencer",
      image: "dist/assets/pure.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-darkBlue/90 to-darkBlue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            What People Say About Crypto Guts
          </h2>
          <p className="text-lightGray max-w-3xl mx-auto text-lg">
            Hear from clients and collaborators in the blockchain space.
          </p>
        </motion.div>

        {/* Horizontal scrolling container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="testimonial-wrapper flex space-x-8 py-4"
              style={{
                animation: "scrollTestimonials 20s linear infinite",
              }}
            >
              {/* Testimonials duplicated multiple times */}
              {testimonials.concat(testimonials, testimonials, testimonials).map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -100 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-darkBlue/50 backdrop-blur-sm p-8 rounded-2xl border border-purple/10 hover:border-purple/30 transition-all duration-300 w-80 flex-shrink-0"
                >
                  <Quote className="w-12 h-12 text-purple mb-6" />
                  <p className="text-lightGray mb-6 text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-white">{testimonial.author}</h4>
                      <p className="text-purple text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Add CSS keyframe animation for smooth continuous scroll */}
          <style>
            {`
            @keyframes scrollTestimonials {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-25%); /* Adjust this to scroll over 25% of the container width */
              }
            }

            /* Pause scrolling when hovering over the entire section */
            #testimonials:hover .testimonial-wrapper {
              animation-play-state: paused;
            }
            `}
          </style>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
