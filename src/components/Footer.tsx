import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-blue-600 text-white py-6 mt-auto">
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* Social links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-200 transition-colors"
            aria-label="GitHub"
          >
            <i className="fab fa-github text-2xl"></i>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-200 transition-colors"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin text-2xl"></i>
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-200 transition-colors"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-200 transition-colors"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
        </div>

        {/* Made with love message */}
        <p className="text-sm text-center">
          Made with <span className="text-red-400">❤️</span> by Sridhar Vadla
        </p>
      </div>
    </footer>
  );
};

export default Footer;
