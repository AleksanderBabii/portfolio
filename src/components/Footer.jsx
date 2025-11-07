// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import "../styles/components/_footer.scss";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="footer-content">
        <p className="footer-text">© {currentYear} My Portfolio</p>
        <ul className="footer-socials">
          <li>
            <a href="https://github.com/AleksanderBabii" target="_github" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/oleksandr-babii/" target="_linkedin" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="mailto:sasha.babiy70@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>
    </motion.footer>
  );
}

export default Footer;
