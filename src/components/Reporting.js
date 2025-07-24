import React from 'react';
import './Reporting.css';

function Reporting() {
    return(
        <section className="reporting-container" id="dashboard">
            <div className='reporting-square'>
                <div className='reporting-content'>
                <div className='reporting-text'>
                    <p>Analytics & Reporting Dashboard</p>
                    <h2>Gain insights into your business performance with a robust reporting suite.</h2>
                    <ul>
                        <li>Visualize transactions, revenue, and refunds in real time.</li>
                        <li>Export reports in CSV, Excel, or PDF formats.</li>
                        <li>Track customer behavior and identify trends.</li>
                        <li>Monitor payment success rates and resolve failures.</li>
                    </ul>
                </div>

                <div className='reporting-image'>
                    <img 
                    src='https://myxpresspay.com:8095/desktopSample.svg'
                    id="reporting-img"
                    alt='desktop'/>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Reporting;