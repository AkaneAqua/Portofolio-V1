import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#] text-white py-4 mt-8 shadow-inner">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/AkaneAqua"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img
              src="/public/icons8-github-48.png" // Ganti dengan path logo GitHub Anda
              alt="GitHub"
              className="h-8 w-8"
            />
          </a>
          <a
            href="https://www.instagram.com/isaeall/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img
              src="/public/instagram.png" // Ganti dengan path logo Instagram Anda
              alt="Instagram"
              className="h-8 w-8"
            />
          </a>
        </div>
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
