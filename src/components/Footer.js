import React from 'react';
import './Footer.css';

function Footer() {
    return(
        <footer className="footer-container" id="contact-us">
            <div className="footer-top">
            <img 
            src="https://myxpresspay.com:8096/assets/xpressLogo-CtHYBMzi.svg"
            alt="XpressPay Logo"
            className="footer-logo"
            />
            <nav className="footer-nav">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#faqs">FAQs</a>
            </nav>
        </div>

        <div className="footer-address">
            No 23 Oba Akinjobi Street, GRA, Ikeja, Lagos, Nigeria
        </div>
        <div className="footer-bottom">
            <span>© 2025 Xpress Payment Solutions Limited. All rights reserved</span>
            <div className="footer-socials">
                <a href="#facebook">Facebook</a>
                <a href="#instagram">Instagram</a>
                <a href="#linkedin">LinkedIn</a>
            </div>
        </div>
        </footer>
    );
}

export default Footer;