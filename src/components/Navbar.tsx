import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-500 backdrop-blur-md text-white shadow-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="WeatherProfile logo"
            className="w-10 h-10 rounded-full object-cover border border-blue-500 shadow-sm"
          />
          <span className="text-2xl font-bold tracking-wide text-white">
            WeatherProfile
          </span>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-10 text-lg font-medium">
          <li>
            <Link
              to="/"
              className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white/70 hover:after:w-full after:transition-all after:duration-300 hover:text-white transition-colors"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/mytown"
              className="relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white/70 hover:after:w-full after:transition-all after:duration-300 hover:text-white transition-colors"
            >
              My Town
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden focus:outline-none text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-blue-600 text-white px-6 pb-4 flex flex-col space-y-3 text-lg font-medium">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            About Me
          </Link>
          <Link to="/mytown" onClick={() => setMenuOpen(false)}>
            My Town
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
