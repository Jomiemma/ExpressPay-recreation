import React from 'react';
import './Checkout.css';

function Checkout() {
    return (
        <section className='checkout-container' id="checkout">
            <div className='checkout-square'>
                <div className='checkout-content'>
                 <div className="checkout-image">
                    <img 
                    src='https://myxpresspay.com:8095/iPhones.svg'
                    alt='iphoneSvg'
                    />
                </div>

                <div className='checkout-text'>
                    <p>Customizable Checkout</p>
                    <h2>Deliver a seamless checkout experience tailored to your brand.</h2>
                    <ul>
                        <li>Support for multiple payment methods (cards, e-wallets, bank transfers).</li>
                        <li>One-click checkout for returning customers.</li>
                        <li>Mobile-first design for responsiveness.</li>
                        <li>Language and theme customization options.</li>
                    </ul>
                </div>
               
            </div>
            </div>
        </section>
    )
}

export default Checkout;