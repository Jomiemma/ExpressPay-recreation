import React from "react";
import Typewriter from 'typewriter-effect'
import "./Description.css";

function Description() {
  return (
    <section className="description-container" id="about">
      <div id="description-left">
        <h2>
          <span className="green-letter">W</span>
          <Typewriter
          options={{
            strings: ['hy our Payment Gateway?'],
            autoStart: true,
            loop: true,
          }}
          />
        </h2>
        <p>
         We believe that the best way to create successful
         marketing campaigns is to work closely with our clients
         to understand their goals and challenges.
        </p>
        <img
          src="https://myxpresspay.com:8095/whyxpress.png"
          alt="Whyxpresspay"
        />
      </div>

      <div id="description-right">
        <div className="bullet-point">
          <div className="icon-box">👤</div>
          <span>
            <h4>Secure Transactions</h4>
            <p>PCI DSS compliance, fraud detection systems.</p>
          </span>
        </div>

        <div className="bullet-point">
          <div className="icon-box">👤</div>
          <span>
            <h4>Multi-Channel Payments</h4>
            <p>Online, in-store, and mobile options</p>
          </span>
        </div>

        <div className="bullet-point">
          <div className="icon-box">👤</div>
          <span>
            <h4>Fast Settlement</h4>
            <p>Get your payments processed quickly.</p>
          </span>
        </div>

        <div className="bullet-point">
          <div className="icon-box">👤</div>
          <span>
            <h4>Scalable Solutions</h4>
            <p>For businesses of all sizes.</p>
          </span>
        </div>

        <button>Sign Up Now</button>
      </div>
    </section>
  );
}

export default Description;
