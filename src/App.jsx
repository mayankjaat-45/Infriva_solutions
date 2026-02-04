import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Services from "./Pages/Services";
import ServiceDetail from "./Pages/ServiceDetail";
import About from "./Components/home/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Layout/Navbar";

const App = () => {
  return (
    <>
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
