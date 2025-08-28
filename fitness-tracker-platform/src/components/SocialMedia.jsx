import { Instagram } from "lucide-react";

const SocialMedia = () => {
  return (
    <div className="fixed bottom-8 right-8 z-30 flex flex-col space-y-3">
      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
        aria-label="Instagram"
      >
        <div className="p-3 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
          <Instagram className="w-5 h-5 text-white" />
        </div>
      </a>

      {/* TikTok */}
      <a
        href="https://tiktok.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
        aria-label="TikTok"
      >
        <div className="p-3 bg-black rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
          <svg
            className="w-5 h-5 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
          </svg>
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
