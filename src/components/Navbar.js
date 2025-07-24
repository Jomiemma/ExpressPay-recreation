import React from "react";
import './Navbar.css';

function Navbar() {
    return(
    <section id="nav-container">
        <div id="logo">Xpresspay</div>
        <nav>
            <div className="nav-item"><a href="#home">Home</a></div>

           <div className="nav-item">
            <a href="#features">Features</a>
            <div className="dropdown">
                <a href="#storefront">Storefront</a>
                <a href="#dashboard">Reporting dashboard</a>
                <a href="#checkout">Customized checkout</a>
                <a href="#invoices">Invoices</a>
                <a href="#invoices">Split payments</a>
            </div>
            </div>

            <div className="nav-item"><a href="#pricing">Pricing</a></div>
            
            <div className="nav-item">
                <a href="#developer">Developer</a>
                <div className="dropdown">
                    <a href="#api-docs">API documentation</a>
                    <a href="#api-docs">API status</a>
                    <a href="#api-docs">API reference</a>
                </div>
                </div>

            <div className="nav-item"><a href="#contact-us">Support</a></div>
        </nav>

        <div className="right-buttons">
            <button>Toggle Mode</button>
            <button>Login</button>
            <button>Sign Up</button>
        </div>

    </section>
        
  )
}

export default Navbar;