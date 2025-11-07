//Contact page component
import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

function Contact() {
    return (
        <div>
            <h1>Contact Me</h1>
            <p>You can reach me at:</p>
            <ul>
                <li>Email:  
                    <a href="mailto: sasha.babiy70@gmail.com"> Text Me</a>
                </li>
                <li>Phone: +48 698 973 865</li>
                <li>LinkedIn: 
                    <a href="https://www.linkedin.com/in/oleksandr-babii/" target="_linkedInPage" rel="page reference"> My LinkedIn</a>
                </li>
            </ul>
        </div>
    );
}

export default Contact;