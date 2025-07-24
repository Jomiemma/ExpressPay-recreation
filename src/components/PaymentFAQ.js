import React, { useState } from 'react';
import './PaymentFAQ.css';
import ToggleItem from './ToggleItem';

function Payment() {
    return(
        <section className="payment-container" id="faqs">
            <div className="payment-content">
                <div className="payment-right">
                    <h2>
                      Payment Gateway <span className="orange-letter">FAQs</span>
                    </h2>
                    <p>
                        As a leading digital marketing agency, we are dedicated to providing comprehensive educational resources and answering frequently asked questions to help our clients.
                    </p>
                   <a className="payment-contact" href="#contact-us" >Contact Us</a>
                    {/* <a className='payment-contact' ontact Us</a>/ */}
                </div>

                <div className='payment-left'>
                  <ToggleItem title="What is Payment Gateway?">
                      A payment gateway is a technology that facilitates the secure transfer of payment data between customers, merchants, and financial institutions during a transaction. It acts as a bridge, ensuring the payment process is seamless, fast, and secure.
                  </ToggleItem>

                 <ToggleItem title="How can I earn money on XpressPay?">
                   You can earn money by selling products or services online and processing payments securely through the app. You can leverage the app's tools, like invoicing, subscription billing, and customer analytics, to grow sales.
                 </ToggleItem>

                  <ToggleItem title="How do i sign up as a Merchant?" >
                    To sign up as a merchant on XpressPay, visit our <a className="merchant-portal">Merchant Portal</a>.Provide required details like your business name, email, and phone number. Submit necessary documents, such as business registration and banl account details. Once verified, integrate the gateway with your platform to start accepting payments. We offer API keys or plugins for seamless setup.
                  </ToggleItem >
                </div>
            </div>
        </section>
    );
}

export default Payment;


