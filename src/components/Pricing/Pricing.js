import { React } from "react";
import "./Pricing.css";

function Pricing() {
  return (
    <section className="pricing-container" id="pricing">
      <div className="pricing-content">
        <div className="pricing-rect" id="pricing-rect-colored">
          <p>Simple pricing,</p>
          <p>No hidden charges</p>
          <p>
            With no setup or maintenance fees and one of the lowest transaction
            charges in the industry, pay only when you get paid!
          </p>
          <div className="pricing-arrow"> --> </div>
          <img src="https://myxpresspay.com:8095/woman.png" alt="Woman" />
        </div>

        <div className="pricing-rect">
          <h3>Local Plan</h3>
          <p>What We Offer</p>

          <div className="img-container">
            <div className="img-div">
              <img
                src="https://myxpresspay.com:8095/masterCard.svg"
                alt="MasterCard"
              />
              <p>Master Card</p>
            </div>

            <div className="img-div">
              <img src="https://myxpresspay.com:8095/visa.svg" alt="VisaCard" />
              <p>Visa Card</p>
            </div>

            <div className="img-div">
              <img
                src="https://myxpresspay.com:8095/verve.svg"
                alt="VerveCard"
              />
              <p>Verve Card</p>
            </div>

            <div className="img-div">
              <img
                src="https://myxpresspay.com:8095/afrigo.png"
                alt="AfrigoCard"
              />
              <p>Afrigo Card</p>
            </div>
          </div>
          <div className="pricing-dotted"></div>
          <h2>1.5 % Cap at N2000</h2>
          <button>Get Started</button>
        </div>

        <div className="pricing-rect">
          <h3>International Plan</h3>
          <p>What We Offer</p>

          <div className="img-container">
            <div className="img-div">
              <img
                src="https://myxpresspay.com:8095/masterCard.svg"
                alt="MasterCard"
              />
              <p>Master Card</p>
            </div>

            <div className="img-div">
              <img src="https://myxpresspay.com:8095/visa.svg" alt="VisaCard" />
              <p>Visa Card</p>
            </div>

            <div className="img-div">
              <img
                src="https://myxpresspay.com:8095/unionpay.svg "
                alt="UnionPay"
              />
              <p>Union Pay</p>
            </div>

            <div className="img-div">
              <img
                src="https://myxpresspay.com:8095/american-express.png"
                alt="AmericaExpress"
              />
              <p>America Express (coming soon)</p>
            </div>
          </div>
          <div className="pricing-dotted"></div>
          <h2>4.8 % Plus 0.24 Cent</h2>
          <button>Get Started</button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
