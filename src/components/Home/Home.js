import React, { useEffect, useRef, useState } from "react";
import "./Home.css";

function Home() {
  const [isVisisble, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className={`home-content fade-in-section ${isVisisble ? "visible" : ""}`}
    >
      <div id="intro-div">
        <h1>
          Secure & Seamless Payment Solutions for Your Business with{" "}
          <span>Payment Gateway...</span>
        </h1>
        <h3>Empowering transactions with cutting-edge technology</h3>
        <div id="button-group">
          <button id="home-signup">Signup Now</button>
          <button id="home-view">View Documentation</button>
        </div>
      </div>
      <div id="home-img-container">
        <img
          src="https://myxpresspay.com:8095/appSample.svg"
          alt="Laptop"
          id="home-img"
        />
      </div>
    </section>
  );
}

export default Home;
