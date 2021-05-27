import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StepsSection from "./components/StepsSection";
import DoctorSection from "./components/DoctorSection";
import ExpertSection from "./components/ExpertSection";
import FacilitySection from "./components/FacilitySection";
import Qualified from "./components/Qualified";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StepsSection />
      <ExpertSection />
      <FacilitySection />
      <DoctorSection />
      <Qualified />
      <Footer />
    </>
  );
};

export default App;
