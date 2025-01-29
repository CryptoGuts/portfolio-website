import React, { useState } from 'react'; 
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Twitter, Mail, MessageSquare, Instagram } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:cryptogutss@gmail.com?subject=Project Inquiry from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const socialLinks = [
    { icon: <Twitter className="w-6 h-6" />, label: "Twitter", href: "https://x.com/crypt0_guts" },
    { icon: <Mail className="w-6 h-6" />, label: "Email", href: "mailto:cryptogutss@gmail.com" },
    { icon: <MessageSquare className="w-6 h-6" />, label: "Telegram", href: "https://t.me/Crypt0Guts" },
    { icon: <Instagram className="w-6 h-6" />, label: "Instagram", href: "https://www.instagram.com/crypt0_guts/" }
  ];

  return (
    <section id="contact" className="py-24 bg-darkBlue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            Let's Build Something Great Together
          </h2>
          <p className="text-lightGray max-w-3xl mx-auto text-lg">
            Have a project in mind? I'd love to help you bring it to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-darkBlue/50 backdrop-blur-sm p-8 rounded-2xl border border-purple/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-darkBlue/50 border border-purple/20 text-white focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-colors"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-darkBlue/50 border border-purple/20 text-white focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">Project Details</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-darkBlue/50 border border-purple/20 text-white focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-colors"
                  placeholder="Tell me about your project"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple to-orange py-4 rounded-lg text-white font-bold hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-darkBlue/50 backdrop-blur-sm p-8 rounded-2xl border border-purple/10">
              <h3 className="text-2xl font-bold mb-6 text-white">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"  // Open the link in a new tab
                    rel="noopener noreferrer"  // Prevent security risks when opening in a new tab
                    className="flex items-center gap-3 text-lightGray hover:text-purple transition-colors p-4 rounded-lg bg-darkBlue/30"
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple/10 to-orange/10 p-8 rounded-2xl border border-purple/10">
              <h3 className="text-2xl font-bold mb-4 text-white">Quick Stats</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-lightGray">Response Time</p>
                  <p className="text-xl font-bold text-white">Within 24 hours</p>
                </div>
                <div>
                  <p className="text-lightGray">Project Analysed</p>
                  <p className="text-xl font-bold text-white">100+</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
