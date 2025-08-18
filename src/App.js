import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Carousel from "./components/Carousel/Carousel";
import Description from "./components/Description/Description";
import Features from "./components/Features/Features";
import ApiDocs from "./components/ApiDoc/ApiDoc";
import Reporting from "./components/Reporting/Reporting";
import Checkout from "./components/Checkout/Checkout";
import Storefront from "./components/Storefront/Storefront";
import AppDownload from "./components/AppDownload/AppDownload";
import Start from "./components/Start/Start";
import Invoice from "./components/Invoice/Invoice";
import Payment from "./components/PaymentFAQ/PaymentFAQ";
import Pricing from "./components/Pricing/Pricing";
import Client from "./components/Client/Client";
import Partner from "./components/Partner/Partner";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Carousel />
      <Description />
      <Features />
      <ApiDocs />
      <Reporting />
      <Checkout />
      <Storefront />
      <AppDownload />
      <Start />
      <Invoice />
      <Payment />
      <Pricing />
      <Client />
      <Partner />
      <Footer />
    </div>
  );
}

export default App;
