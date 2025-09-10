import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
      <div className="container mx-auto px-24 py-4">
        <div className="flex justify-between items-center h-8">
          <div className="flex items-center justify-center">
            <div className="bg-white rounded-lg px-2 py-1 font-medium text-black text-lg">
              BG
            </div>
          </div>
          <ul className="flex gap-8">
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
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  `text-gray-400 text-sm font-medium transition-all duration-200 relative hover:text-white ${
                    isActive
                      ? "font-bold text-white after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-[115%] after:h-0.5 after:bg-white after:rounded"
                      : ""
                  }`
                }
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `text-gray-400 text-sm font-medium transition-all duration-200 relative hover:text-white ${
                    isActive
                      ? "font-bold text-white after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-[115%] after:h-0.5 after:bg-white after:rounded"
                      : ""
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
