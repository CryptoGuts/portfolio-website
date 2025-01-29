import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const posts = [
    {
      title: "Understanding AI and Crypto: Basics and Beyond",
      excerpt: "Dive into the intersection of artificial intelligence and cryptocurrency, exploring their fundamentals, use cases, and future potential in reshaping industries.",
      image: "/assets/artificialintelligence.webp",
      category: "Education",
      link: "https://blockchainedsnipers.substack.com/p/understanding-ai-and-crypto-basics"
    },
    {
      title: "The Bitcoin Halving: A Deep Dive",
      excerpt: "Uncover the mechanics and significance of Bitcoin halving events, their impact on price trends, and their role in shaping Bitcoin's future supply and demand.",
      image: "/assets/bitcoinhalving.webp",
      category: "Bitcoin",
      link: "https://blockchainedsnipers.substack.com/p/the-bitcoin-halving-a-deep-dive"
    },
    {
      title: "Unlocking The Multiverse of Crypto",
      excerpt: "Explore the rising significance of blockchain interoperability, its impact on seamless asset transfers across networks, and how upcoming upgrades and real-world asset tokenization are driving the future of crypto ecosystems.",
      image: "/assets/crosschaininteroperability.webp",
      category: "Cross Chain Interoperability",
      link: "https://blockchainedsnipers.substack.com/p/unlocking-the-multiverse-of-crypto"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-darkBlue/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            Insights and Education
          </h2>
          <p className="text-lightGray max-w-3xl mx-auto text-lg">
            Stay updated with the latest trends in the crypto world by subscribing to my newsletter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-darkBlue/50 rounded-2xl overflow-hidden border border-purple/10 hover:border-purple/30 transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-purple text-sm font-medium mb-2 block">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple transition-colors">
                  {post.title}
                </h3>
                <p className="text-lightGray mb-4">
                  {post.excerpt}
                </p>
                <a href={post.link} target="_blank" rel="noopener noreferrer">
                  <button className="flex items-center gap-2 text-purple group-hover:text-white transition-colors">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
