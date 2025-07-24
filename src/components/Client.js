import React from 'react';
import './Client.css';

function Client() {
  return (
    <section className="client-container">
      <div className="client-header">
        <p>What Our Client Says about us</p>
      </div>

      <div className="client-content">
        <div className="client-square" id="client-square-colored">
          <div className="client-profile">
            <img src="https://myxpresspay.com:8095/oyo.png" alt="oyo" />
            <div className="client-info">
              <p className="client-name">Amelia Joseph</p>
              <p className="client-role">Chief Manager</p>
            </div>
          </div>
          <p className="client-text">
            We use the eCashier platform for collections of the Oyo State IGR. It is convenient and user friendly as attested by Bankers. eCashier is used across all banks in the State to collect Revenue for the State Government. It is more effective compared to other competitors.
          </p>
        </div>

        <div className="client-square">
          <div className="client-profile">
            <img src="https://myxpresspay.com:8095/keystone.svg" alt="keystone" />
            <div className="client-info">
              <p className="client-name">Jacob Joshua</p>
              <p className="client-role">Chief Manager</p>
            </div>
          </div>
          <p className="client-text">
            Xpress Payments is one of the best PTSPs in the industry with top-notch support service.
          </p>
        </div>

        <div className="client-square">
          <div className="client-profile">
            <img src="https://myxpresspay.com:8095/woman.png" alt="woman" />
            <div className="client-info">
              <p className="client-name">Jacob Joshua</p>
              <p className="client-role">Chief Manager</p>
            </div>
          </div>
          <p className="client-text">
            Embrace really nails it! Creative brilliance, approachable style. They're the partners you want—artistry meets strategy. Thrilled with what they achieved!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Client;
