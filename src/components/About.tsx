import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Users, Zap, ChevronRight } from 'lucide-react';
import { FaTwitter, FaDiscord, FaEnvelope } from 'react-icons/fa'; // Importing necessary icons
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const description = "A recognized influencer and trusted voice in the crypto and blockchain space, delivering actionable insights and innovative strategies that bridge the gap between complex blockchain technology and everyday users.";

  const stats = [
    {
      value: "15K+",
      label: "Discord Members",
      emoji: <FaDiscord className="text-6xl" />,
      link: "https://discord.com/invite/blockchainedsnipers" 
    },
    {
      value: "12K+",
      label: "Twitter Followers",
      emoji: <FaTwitter className="text-6xl" />,
      link: "https://x.com/crypt0_guts"  
    },
    {
      value: "1.5K+",
      label: "Newsletter Subscribers",
      emoji: <FaEnvelope className="text-6xl" />,
      link: "https://blockchainedsnipers.substack.com/"  
    }
  ];

  const skills = [
    {
      icon: <Code className="w-8 h-8 text-purple" />,
      title: "Content Creation",
      description: "Crafting written, visual, and video content tailored for crypto audiences."
    },
    {
      icon: <Palette className="w-8 h-8 text-purple" />,
      title: "Graphics Design & UI/UX",
      description: "Designing user-centric experiences and impactful visuals."
    },
    {
      icon: <Zap className="w-8 h-8 text-purple" />,
      title: "Coding Expertise",
      description: "Technical background to convert jargon into user-friendly communication."
    },
    {
      icon: <Users className="w-8 h-8 text-purple" />,
      title: "Community Building",
      description: "Building and fostering inclusive crypto communities."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-darkBlue to-darkBlue/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex flex-col items-center mb-6"> {/* Reduced margin here */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={inView ? { scale: 1, rotate: 0 } : {}}
              transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
              className="relative w-48 h-48 mb-8"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple to-orange animate-spin-slow"></div>
              <div className="absolute inset-1 rounded-full bg-darkBlue"></div>
              <img
                src="dist/assets/cryptoguts.jpg"
                alt="Crypto Guts Profile"
                className="absolute inset-1 rounded-full object-cover border-4 border-darkBlue"
              />
            </motion.div>
            <h2 className="text-4xl font-bold mb-6 gradient-text">Who is Crypto Guts?</h2>
            <p className="text-lightGray max-w-3xl mx-auto text-lg leading-relaxed mb-8"> {/* Reduced margin here */}
              {description}
            </p>
          </div>
        </motion.div>

        {/* Stats Section with Centered Layout */}
        <div className="grid md:grid-cols-3 gap-8 w-full max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-purple/5 backdrop-blur-sm p-6 rounded-2xl border border-purple/10 hover:border-purple/30 hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-purple transition-all duration-300 flex flex-col justify-center items-center text-center"
            >
              {/* Make the stat clickable */}
              <a href={stat.link} target="_blank" rel="noopener noreferrer" className="w-full h-full flex flex-col justify-center items-center">
                <div className="mb-4">{stat.emoji}</div>
                <h4 className="text-4xl font-bold text-purple mb-1">{stat.value}</h4>
                <p className="text-lightGray text-sm">{stat.label}</p>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-darkBlue/50 backdrop-blur-sm p-6 rounded-2xl border border-purple/10 hover:border-purple/30 transition-all duration-300"
            >
              <div className="bg-purple/10 p-3 rounded-xl w-fit mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{skill.title}</h3>
              <p className="text-lightGray">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
