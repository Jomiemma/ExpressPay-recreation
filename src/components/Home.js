import React, {useEffect, useRef, useState} from 'react';
import './Home.css';

function Home() {
    // Tracking whether the section is visible in the viewport
    const [isVisisble, setIsVisible] = useState(false);
   // have access to the required div
    const sectionRef = useRef(null);

    // setting up the scroll observer once the component loads up
     useEffect(() => {
        // create the observer to check if section is visible
        const observer= new IntersectionObserver(
            ([entry]) => {
                // if section is in sight mark as visible
                setIsVisible(entry.isIntersecting);
            },
            {
                // Start when at least 10% of the section is visible
                threshold: 0.1,
            }
        );

        // if statement to start observing the section
        if(sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Stop observing when the component is out of view
        return ()=> {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []); // only run this once after the component loads

    return(
    <section
    id="home"
     ref={sectionRef}
     className={`home-content fade-in-section ${isVisisble ? 'visible' : ''}`}
     >
        <div id="intro-div">
            <h1>
                Secure & Seamless Payment Solutions for Your Business with <span>Payment Gateway...</span>
            </h1>
            <h3>
                Empowering transactions with cutting-edge technology
            </h3>
            <div id="button-group">
            <button id="home-signup">Signup Now</button>
        <button id="home-view">View Documentation</button>
        </div>
        </div>
        <div id="home-img-container">
            <img 
                src='https://myxpresspay.com:8095/appSample.svg' 
                alt="Laptop"
                id="home-img" />
        </div>
    </section>
    );
}

export default Home;