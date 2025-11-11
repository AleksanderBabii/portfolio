import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

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
    <BrowserRouter> 
        <Navbar />
        <Routes>
            <Route path="/portfolio" element={<Navigate to="/" replace/>} />

            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Projects />} />
            <Route path="/contact" element={<Contact />} /> 
            
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;