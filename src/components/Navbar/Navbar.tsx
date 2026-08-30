import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./Navbar.module.scss";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const toggleTheme = () => {
    setDarkMode((previous) => !previous);
    document.body.classList.toggle("dark-mode");
  };

  const toggleMenu = () => {
    setMenuOpen((previous) => !previous);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    closeMenu();

    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className={`${styles.navbar} ${
        darkMode ? styles["navbar-dark"] : styles["navbar-light"]
      }`}
    >
      {/* LOGO */}

      <div className={styles["navbar-logo"]}>
        <Link to="/home" onClick={closeMenu}>
          AB
        </Link>
      </div>

      {/* NAVIGATION */}

      <div
        className={`${styles["navbar-links"]} ${
          menuOpen ? styles.open : ""
        }`}
      >
        <button
          type="button"
          className={styles["nav-link"]}
          onClick={() => scrollToSection("work")}
        >
          WORK
        </button>

        <button
          type="button"
          className={styles["nav-link"]}
          onClick={() => scrollToSection("about")}
        >
          ABOUT
        </button>

        <button
          type="button"
          className={styles["nav-link"]}
          onClick={() => scrollToSection("art-skills")}
        >
          ART-SKILLS
        </button>

        <button
          type="button"
          className={styles["nav-link"]}
          onClick={() => scrollToSection("technical")}
        >
          TECH-SKILLS
        </button>

        <button
          type="button"
          className={styles["nav-link"]}
          onClick={() => scrollToSection("contact")}
        >
          CONTACT
        </button>
      </div>

      {/* CONTROLS */}

      <div className={styles["navbar-controls"]}>
        <button
          type="button"
          className={styles["theme-toggle"]}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {darkMode ? "☀" : "◐"}
        </button>

        <button
          type="button"
          className={styles["menu-toggle"]}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

