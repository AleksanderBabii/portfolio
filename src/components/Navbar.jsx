// Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/components/_navbar.scss";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${darkMode ? "navbar-dark" : "navbar-light"}`}>
      {/* Logo on the left */}
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          My Webpage
        </Link>
      </div>

      {/* Navigation links */}
      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <Link
          to="/"
          className={location.pathname === "/" ? "active nav-link" : "nav-link"}
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "active nav-link" : "nav-link"}
          onClick={closeMenu}
        >
          About
        </Link>
        <Link
          to="/portfolio"
          className={location.pathname === "/portfolio" ? "active nav-link" : "nav-link"}
          onClick={closeMenu}
        >
          Portfolio
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active nav-link" : "nav-link"}
          onClick={closeMenu}
        >
          Contact
        </Link>
      </div>

      {/* Controls on the right */}
      <div className="navbar-controls">
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? "☀️" : "🌙"}
        </button>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
