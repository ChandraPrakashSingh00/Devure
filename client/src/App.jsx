import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Services from "./pages/Services/service.jsx";
import Contact from "./pages/Contact/contact.jsx";
import Product from "./pages/Product/product.jsx";

import Navbar from "./Components/Layout/Navbar.jsx";
import Footer from "./Components/Layout/Footer.jsx";
import ScrollToTop from "./Components/Layout/ScrollToTop.jsx";
import SignUp from "./Components/Auth/SignUp.jsx";

// Services Pages
import WebsiteDevelopment from "./pages/Services/ServicesPages/WebsiteDevelopment.jsx"
import EcommerceSolution from "./pages/Services/ServicesPages/EcommerceSolution.jsx"
import AppDevelopment from "./pages/Services/ServicesPages/AppDevelopment.jsx"
import SeoOptimization from "./pages/Services/ServicesPages/SeoOptimization.jsx"
import UiUxDesign from "./pages/Services/ServicesPages/UiUxDesign.jsx"
import DigitalMarketing from "./pages/Services/ServicesPages/Digital Marketing.jsx"

const App = () => {
  return (
    <>
    <Navbar/>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/product" element={<Product />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/SignUp" element={<SignUp />} />

      {/* Services Pages */}
      <Route path="/servicespages/websitedevelopment" element={<WebsiteDevelopment/>} />
      <Route path="/servicespages/ecommercesolution" element={<EcommerceSolution/>} />
      <Route path="/servicespages/appdevelopment" element={<AppDevelopment/>} />
      <Route path="/servicespages/seooptimization" element={<SeoOptimization/>} />
      <Route path="/servicespages/uiuxdesign" element={<UiUxDesign/>} />
      <Route path="/servicespages/Digitalmarketing" element={<DigitalMarketing/>} />

    </Routes>
    <Footer/>
    </>
  );
};

export default App;
