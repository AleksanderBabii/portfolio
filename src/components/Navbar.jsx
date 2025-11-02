//Navbar 
import { Link } from "react-router-dom";
import React from "react";
import "../styles/components/navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar-logo">
            <Link to="/">Sasha's Portfolio</Link>
        </div>
        <ul className="navbar-links">   
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
  );
}

export default Navbar;