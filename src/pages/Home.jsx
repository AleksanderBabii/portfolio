//Home page component
import React from 'react';
import HeroSection from '../components/HeroSection.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

function Home() {
  return (
    <>
      <Navbar />
      <main className="home">
        <HeroSection />
      </main>
      <Footer />
    </>
  );
}

export default Home;
