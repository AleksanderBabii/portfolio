// src/pages/Contact.jsx
import React from "react";
import "../styles/pages/_contact.scss";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>If you’d like to get in touch, feel free to reach out:</p>

        <ul className="contact-list">
          <li>
            <span>Email:</span>
            <a href="mailto:sasha.babiy70@gmail.com">sasha.babiy70@gmail.com</a>
          </li>
          <li className="phone-number">
            <span>Phone:</span> +48 698 973 865
          </li>
          <li>
            <span>LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/oleksandr-babii/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Profile
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
