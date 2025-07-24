import React from 'react';
import './Start.css';

function Start() {
    return(
        <section className='start-container'>
            <div className='start-square'>
                <div className='start-text'>
                    Start Your Payment <br /> Journey With Us Now      
                    <br />
                <button>Start Now</button>
                </div>
                <div className='start-shapes'>
                    <div className='start-thunder'></div>
                    <div className='start-arrow'></div>
                </div>
            </div>
        </section>
    );
}

export default Start;