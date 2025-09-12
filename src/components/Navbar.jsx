import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-colors transition-all duration-500 ${
        scrolled
          ? "bg-black/90 backdrop-blur-xs border border-b-white/20"
          : "bg-transparent "
      }`}
    >
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-4">
        <div className="flex justify-between items-center h-8">
          <div className="flex items-center justify-center">
            <div className="bg-white rounded-lg px-2 py-1 font-medium text-black text-lg">
              BG
            </div>
          </div>
          {/* Hamburger button for mobile */}
          <button
            className="lg:hidden flex items-center px-2 py-1 text-gray-400 hover:text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/* Menu items */}
          <ul className="hidden lg:flex gap-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-gray-400 text-sm font-medium transition-all duration-200 relative hover:text-white ${
                    isActive
                      ? "font-bold text-white after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-[115%] after:h-0.5 after:bg-white after:rounded"
                      : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-gray-400 text-sm font-medium transition-all duration-200 relative hover:text-white ${
                    isActive
                      ? "font-bold text-white after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-[115%] after:h-0.5 after:bg-white after:rounded"
                      : ""
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `text-gray-400 text-sm font-medium transition-all duration-200 relative hover:text-white ${
                    isActive
                      ? "font-bold text-white after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-[115%] after:h-0.5 after:bg-white after:rounded"
                      : ""
                  }`
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  `text-gray-400 text-sm font-medium transition-all duration-200 relative hover:text-white ${
                    isActive
                      ? "font-bold text-white after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-[115%] after:h-0.5 after:bg-white after:rounded"
                      : ""
                  }`
                }
              >
                Skills
              </NavLink>
            </li>
            <li>
              <a
                href="/cv-boray-gulpinar.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-sm font-medium transition-all duration-200 relative hover:text-white"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="mailto:boraygulpinar@gmail.com"
                className="text-gray-400 text-sm font-medium transition-all duration-200 relative hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <ul className="flex flex-col gap-4 mt-4 lg:hidden bg-black/90 rounded-lg p-4 border border-white/10">
            <li>
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-gray-400 text-base font-medium transition-all duration-200 relative hover:text-white ${
                    isActive
                      ? "font-bold text-white after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-[115%] after:h-0.5 after:bg-white after:rounded"
                      : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-gray-400 text-base font-medium transition-all duration-200 relative hover:text-white ${
                    isActive
                      ? "font-bold text-white after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-[115%] after:h-0.5 after:bg-white after:rounded"
                      : ""
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-gray-400 text-base font-medium transition-all duration-200 relative hover:text-white ${
                    isActive
                      ? "font-bold text-white after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-[115%] after:h-0.5 after:bg-white after:rounded"
                      : ""
                  }`
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/skills"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-gray-400 text-base font-medium transition-all duration-200 relative hover:text-white ${
                    isActive
                      ? "font-bold text-white after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-[115%] after:h-0.5 after:bg-white after:rounded"
                      : ""
                  }`
                }
              >
                Skills
              </NavLink>
            </li>
            <li>
              <a
                href="/cv-boray-gulpinar.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-base font-medium transition-all duration-200 relative hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="mailto:boraygulpinar@gmail.com"
                className="text-gray-400 text-base font-medium transition-all duration-200 relative hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
