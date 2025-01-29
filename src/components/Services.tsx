import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  PenTool, 
  Layout, 
  Users, 
  Lightbulb,
  ArrowRight,
  MessageSquare
} from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Content Creation",
      features: [
        "4–5 Twitter posts per week",
        "One in-depth thread weekly",
        "Short-form videos or infographics",
        "Ebooks on crypto topics"
      ]
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "UI/UX Development",
      features: [
        "Website and app interface designs",
        "Prototyping and wireframing",
        "User journey mapping",
        "Responsive design implementation"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Engagement",
      features: [
        "Discord community management",
        "Social platform engagement",
        "User feedback management",
        "Trend monitoring and insights"
      ]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Consulting & Strategy",
      features: [
        "Blockchain trend analysis",
        "Product launch strategy",
        "User onboarding optimization",
        "Token launch guidance"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-darkBlue/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            Tailored Services for Blockchain Projects
          </h2>
          <p className="text-lightGray max-w-3xl mx-auto text-lg">
            Explore my diverse range of offerings designed to elevate your brand in the crypto world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-darkBlue/50 backdrop-blur-sm p-8 rounded-2xl border border-purple/10 hover:border-purple/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple/5 to-orange/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="bg-purple/10 p-3 rounded-xl w-fit mb-6 text-purple">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-lightGray">
                      <ArrowRight className="w-4 h-4 mr-2 text-purple flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://t.me/Crypt0Guts"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple to-orange px-8 py-4 rounded-xl font-space-grotesk text-white hover:opacity-90 transition-all duration-300 shadow-lg"
          >
            <MessageSquare className="w-5 h-5" />
            Let's collaborate on your project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;