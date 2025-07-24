import React from 'react';
import './Storefront.css';

function Storefront() {
    return(
        <section className='storefront-container'id='storefront'>
            <div className='storefront-square'>
                <div className='storefront-content'>
                    <div className='storefront-text'>
                        <p>STOREFRONT</p>
                        <h2>Storefront for Payment Gateway</h2>
                        <ul>
                            <li>Unlimited Listings: Add unlimited products or services with rich descriptions, images, and videos.</li>
                            <li>Categories and Filters: Organize products into categories with filter options (e.g., price, size, availability).</li>
                            <li>Inventory Tracking: Real-time inventory management with low-stock notifications.</li>
                        </ul>
                    </div>
                    <div className='storefront-image'>
                        <img 
                        src='https://myxpresspay.com:8095/desktopSample2.svg'
                        alt="desktop2"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Storefront;