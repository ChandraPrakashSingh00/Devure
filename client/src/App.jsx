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
    </Routes>
    <Footer/>
    </>
  );
};

export default App;
