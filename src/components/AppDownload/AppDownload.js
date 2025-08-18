import React from 'react';
import './AppDownload.css';

function AppDownload() {
    return(
        <section className="appD-container">
            <div className='appD-content'>
                <div className='appD-image'>
                    <img 
                    src='https://myxpresspay.com:8095/iPhones.svg'
                    alt='iphoneSvg'
                    />
                </div>
                <div className="appD-text">
                    <h3>Get onboarded and start accepting payments within minutes.</h3>
                    <ul>
                        <li>Seamless onboarding with minimum documentation</li>
                        <li>Track Payments on the go</li>
                        <li>Accepts payment & issue refunds with a single click</li>
                        <li>Get detailed payments insights</li>
                    </ul>
                    <p>Download the app now!</p>
                    <img src='https://myxpresspay.com:8095/gogglePlay.svg'/>
                    <img src='https://myxpresspay.com:8095/appleStore.svg'/>
                </div>
            </div>
        </section>
    );
}

export default AppDownload;