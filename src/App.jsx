import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Services from "./Pages/Services";
import ServiceDetail from "./Pages/ServiceDetail";
import About from "./Components/home/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Layout/Navbar";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Performance Marketing Company | Infriva Solutions</title>
        <meta
          name="description"
          content="Infriva Solution is a performance-driven digital marketing company offering SEO, PPC, web and app development, and growth-focused marketing solutions."
        />
        <meta
          name="keywords"
          content="Agency, Best Web development services in India, Web Developement, App Development, SEO Optimization, Digital Marketing Agency, UI&UX Designs, meta Ads, Paid Ads, PPC, Lead Generation"
        />
      </Helmet>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
