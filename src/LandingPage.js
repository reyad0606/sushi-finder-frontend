import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";
import { homeObjOne, homeObjTwo } from "./components/InfoSection/Data";
import Services from "./components/Services";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import "./LandingPage.css";

function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="landingPage">
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />

      <Footer />
    </div>
  );
}

export default LandingPage;
