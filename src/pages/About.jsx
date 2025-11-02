//About page component
import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

function About() {
    return (
        <div>   
            <Navbar />
            <main className="about-main">
                <section className="about-section">
                    <h1>About Me</h1>
                    <p>Hello! I'm Sasha, a passionate web developer with a love for creating beautiful and functional websites. With a background in computer science and design, I enjoy combining technical skills with creativity to build engaging user experiences.</p>
                    <p>In my free time, I enjoy exploring new technologies, contributing to open-source projects, and honing my skills in front-end and back-end development. When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new recipes in the kitchen.</p>
                    <p>Feel free to explore my portfolio to see some of the projects I've worked on. If you'd like to get in touch, don't hesitate to reach out through the contact page!</p>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default About;