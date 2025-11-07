//Navbar 
import React, {useState} from "react";  
import { Link, useLocation } from "react-router-dom";

import "../styles/components/_navbar.scss";

function Navbar() {
  const[darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen]= useState(false);
  const location = useLocation();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

return (
    <nav className={`navbar ${darkMode ? "navbar-dark" : "navbar-light"}`}>
      <div className="navbar-logo">
        <Link to="/">My Webpage</Link>
      </div>

      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <Link
          to="/"
          className={location.pathname === "/" ? "active nav-link" : "nav-link"}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "active nav-link" : "nav-link"}
        >
          About
        </Link>
        <Link
          to="/portfolio"
          className={location.pathname === "/portfolio" ? "active nav-link" : "nav-link"}
        >
          Portfolio
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active nav-link" : "nav-link"}
        >
          Contact
        </Link>
      </div>

      <div className="navbar-controls">
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? "☀️" : "🌙"}
        </button>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;