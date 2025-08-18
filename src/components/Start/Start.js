import React from 'react';
import './Start.css';

function Start() {
    return(
        <section className='start-container'>
            <div className='start-square'>
                <div className='start-text'>
                    Start Your Payment Journey With Us Now      
                    <br />
                <button>Start Now</button>
                </div>
                <div className='start-shapes'>
                    <div className='start-thunder'>

                        <svg viewBox="64 64 896 896" focusable="false" data-icon="thunderbolt" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7z"></path>
                        </svg>
                    </div>
                    <div className='start-arrow'>
<svg viewBox="64 64 896 896" focusable="false" data-icon="rise" width="1em" height="1em" fill="currentColor" aria-hidden="true">
    <path d="M917 211.1l-199.2 24c-6.6.8-9.4 8.9-4.7 13.6l59.3 59.3-226 226-101.8-101.7c-6.3-6.3-16.4-6.2-22.6 0L100.3 754.1a8.03 8.03 0 000 11.3l45 45.2c3.1 3.1 8.2 3.1 11.3 0L433.3 534 535 635.7c6.3 6.2 16.4 6.2 22.6 0L829 364.5l59.3 59.3a8.01 8.01 0 0013.6-4.7l24-199.2c.7-5.1-3.7-9.5-8.9-8.8z"></path>
</svg>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Start;