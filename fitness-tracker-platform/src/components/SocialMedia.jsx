import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const SocialMedia = () => {
  const socialLinks = [
    { 
      icon: <Facebook className="w-5 h-5" />, 
      label: 'Facebook', 
      url: 'https://facebook.com' 
    },
    { 
      icon: <Twitter className="w-5 h-5" />, 
      label: 'Twitter', 
      url: 'https://twitter.com' 
    },
    { 
      icon: <Instagram className="w-5 h-5" />, 
      label: 'Instagram', 
      url: 'https://instagram.com' 
    },
    { 
      icon: <Youtube className="w-5 h-5" />, 
      label: 'YouTube', 
      url: 'https://youtube.com' 
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      label: 'LinkedIn', 
      url: 'https://linkedin.com' 
    },
  ];

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col items-center space-y-4">
        <div className="h-20 w-0.5 bg-gray-300"></div>
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-10 h-10 rounded-full bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 flex items-center justify-center text-white hover:bg-yellow-500 hover:border-yellow-500 transition-all duration-300 transform hover:scale-110"
            aria-label={social.label}
          >
            <span className="group-hover:text-white transition-colors duration-300">
              {social.icon}
            </span>
          </a>
        ))}
        <div className="h-20 w-0.5 bg-gray-300"></div>
      </div>
    </div>
  );
};

export default SocialMedia;
