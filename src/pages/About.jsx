import React from "react";
import "../styles/pages/_about.scss";
import profileImg from "/images/profileImg.jpg";

function About() {
  return (
    <main className="about-main">
      <section className="about-section container">
        <div className="about-content">
          <div className="about-image">
            <img src={profileImg} alt="Aleksander portrait" />
          </div>

          <div className="about-text-block">
            <h1 className="about-title">About Me</h1>
            <p className="about-text">
              Hello! I'm <strong>Aleksander</strong>, a Junior Full-Stack
              .NET Developer passionate about building modern web applications
              with C#, ASP.NET Core, React, TypeScript, and PostgreSQL. I enjoy
              turning ideas into practical, user-friendly solutions while
              continuously learning and improving my skills. Currently, I’m
              expanding my experience through personal projects and looking for
              opportunities to grow as a developer and contribute to real-world
              software products.
            </p>

            <p className="about-text">
              In my free time, I enjoy exploring new technologies, contributing
              to open-source projects, and honing my skills in front-end and
              back-end development. When I'm not coding, you can find me hiking,
              reading sci-fi novels, or experimenting with new recipes in the
              kitchen.
            </p>

            <p className="about-text">
              Feel free to explore my portfolio to see some of the projects I've
              worked on. If you'd like to get in touch, don’t hesitate to reach
              out through the contact page!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
