//Hero Section component
import React from 'react';
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <section className="hero-section">
        <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}    
        >
            <h1 className="header">Welcome to My Webpage</h1>
            
            <p className="intro-info">I'm Aleksander, a Junior Full-Stack .NET Developer. </p>
        </motion.div>
    </section>
  );
}

export default HeroSection;
