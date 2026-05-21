import React from "react";
import { HashRouter, Routes, Route, Navigate} from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Projects from "./pages/Projects.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./styles/main.scss";


function App() {
  return (
    <HashRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Projects />} />
            <Route path="/contact" element={<Contact />} /> 

            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/projects" element={<Navigate to="/portfolio" replace />} />
            <Route path="/about-me" element={<Navigate to="/about" replace />} />
            <Route path="/contact-me" element={<Navigate to="/contact" replace />} />

        </Routes>
        <Footer />
    </HashRouter>
  );
}

export default App;