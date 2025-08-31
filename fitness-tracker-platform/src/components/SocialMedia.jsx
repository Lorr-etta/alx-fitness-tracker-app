import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const SocialMedia = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: <Facebook className="w-6 h-6" />,
      url: '#',
      color: 'hover:text-blue-500',
      delay: 0.1
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      url: '#',
      color: 'hover:text-pink-500',
      delay: 0.2
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-6 h-6" />,
      url: '#',
      color: 'hover:text-blue-400',
      delay: 0.3
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Follow Us</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Stay connected with us on social media for the latest updates, fitness tips, and community events.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${social.color} transition-colors duration-300 transform hover:-translate-y-1`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: social.delay }}
                aria-label={social.name}
              >
                <span className="sr-only">{social.name}</span>
                <div className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300">
                  {social.icon}
                </div>
              </motion.a>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Figure 8 Fitness. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SocialMedia;
