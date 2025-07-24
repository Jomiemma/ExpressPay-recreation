import React from 'react';
import './ApiDoc.css';

function ApiDocs(){
    return(
        <section className='apiDoc-container' id='api-docs'>
            <div className='apiDoc-square'>
                <div className='apiDoc-contents'>
                    <div className='apiDoc-image'>
                        <img 
                        src='https://myxpresspay.com:8095/iPhones.svg'
                        alt='iphoneSvg'
                        />
                    </div>
                    <div className='apiDoc-texts'>
                        <p>API Integration for Custom Workflows</p>
                        <h2>Our developer-friendly API allows you to integrate payment solutions into your systems effortlessly.</h2>
                        <ul>
                            <li>Comprehensive API documentation and SDKs.</li>
                            <li>Webhooks for real-time notifications.</li>
                            <li>Sandbox environment for testing.</li>
                            <li>Plugins for popular platforms (Shopify, WooCommerce, etc.).</li>
                        </ul>
                        <button>View API Documentation</button>
                    </div>
                </div>
            </div>
            </section>
    );
}

export default ApiDocs;