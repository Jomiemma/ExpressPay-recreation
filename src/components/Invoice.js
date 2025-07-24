import React from 'react';
import Typewriter from 'typewriter-effect';
import './Invoice.css';

function Invoice() {
    return(
        <section className="invoice-container" id="invoices" >               
         <div className='invoice-header'>
            <h2><span className='green-letter'>U</span>
            <Typewriter 
            options={{
                strings: ['se Payment Gateway with'],
                autoStart: true,
                loop: true,
            }}/>
            <br /> other products.</h2>
                </div>

            <div className="invoice-content">
                <div className='invoice-square'>
                    <div className="icon-title">
                        <img src="https://myxpresspay.com:8095/invoice.svg" />
                        <h4>Invoices</h4>
                    </div>
                    <p>
                        Send your customers GST compliant invoices with item level details to accept online payments through debit/credit cards, net banking, wallets, UPI etc.
                    </p>
                </div>

                <div className='invoice-square'>
                    <div className="icon-title">
                        <img src="https://myxpresspay.com:8095/paymentLink.svg"/>
                        <h4>Payment Links</h4>
                    </div>
                    <p>
                        Create custom-branded, hosted Payment Pages in a few clicks to accept payments online. Your business can go online with zero integration and tech efforts
                    </p>
                </div>
                <div className='invoice-square'>
                    <div className="icon-title">
                        <img src="https://myxpresspay.com:8095/split.svg" />
                        <h4>Discount Code</h4>
                    </div>
                    <p>
                        Set up and manage discount campaigns effortlessly to attract new customers and reward loyal ones, with options to customise validity periods and usage limits
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Invoice;