import React from "react";
import "../styles/pages/_about.scss";
import profileImg from "/images/profileImg.jpg"; 

function About() {
  return (
    <main className="about-main">
      <section className="about-section container">
        <div className="about-content">
          <div className="about-image">
            <img src={profileImg} alt="Sasha portrait" />
          </div>

          <div className="about-text-block">
            <h1 className="about-title">About Me</h1>
            <p className="about-text">
              Hello! I'm <strong>Sasha</strong>, a passionate web developer with a love for creating
              beautiful and functional websites. With a background in computer science and design,
              I enjoy combining technical skills with creativity to build engaging user experiences.
            </p>

            <p className="about-text">
              In my free time, I enjoy exploring new technologies, contributing to open-source projects,
              and honing my skills in front-end and back-end development. When I'm not coding, you can
              find me hiking, reading sci-fi novels, or experimenting with new recipes in the kitchen.
            </p>

            <p className="about-text">
              Feel free to explore my portfolio to see some of the projects I've worked on. If you'd like
              to get in touch, don’t hesitate to reach out through the contact page!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
