import React from 'react';
import Typewriter from 'typewriter-effect';
import './Features.css';

function Features() {
    return(
        <section className="features-container">
            <div className='feature-headers'>
                <h2>
                    <span className='green-letter'>W</span>
                    <Typewriter options={{
                        strings: ['hat does our Platform offer'],
                        autoStart: true,
                        loop: true
                    }} 
                    />
                </h2>
                <p>Features Tailored to Your Needs</p>
            </div>
            <div className='feature-square'>
                <div className='feature-content'>
                <div className='feature-text'>
                <p className='feature-title'>Multi-Currency Support</p>
                <p className='feature-description'>Accepts payments in multiple currencies seamlessly, enabling businesses to expand globally without barriers.</p>
                <ul>
                    <li>Real-time currency conversion.</li>
                    <li>Support for over 50+ currencies.</li>
                    <li>Reduce transaction fees for international payments.</li>
                </ul>
                </div>

                <div className='feature-image'>
                    <img 
                    src="https://myxpresspay.com:8095/desktopSample.svg" 
                    id='feature-img'
                    alt="desktop"/>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Features;