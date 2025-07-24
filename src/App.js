import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Carousel from "./components/Carousel";
import Description from "./components/Description";
import Features from "./components/Features";
import ApiDocs from "./components/ApiDoc";
import Reporting from "./components/Reporting";
import Checkout from "./components/Checkout";
import Storefront from "./components/Storefront";
import AppDownload from "./components/AppDownload";
import Start from "./components/Start";
import Invoice from "./components/Invoice";
import Payment from "./components/PaymentFAQ";
import Pricing from "./components/Pricing";
import Client from "./components/Client";
import Partner from "./components/Partner";
import Footer from "./components/Footer";

function App() {
  return (
    <div >
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