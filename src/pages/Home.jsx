/* eslint-disable no-unused-vars */
import React from "react";
import Hero from "../components/Hero";
import CategoryShowcase from "../components/CategoryShowcase";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OnlyOnMadeIn from "../components/OnlyOnMadeIn";
import VendorSpotlight from "../components/VendorSpotlight";
// import VendorIncentives from "../components/VendorIncentives"; // Commented out as requested
import VisionSection from "../components/VisionSection";
import OurPolicy from "../components/OurPolicy";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div className="bg-[#F7F4EE]">
      <Hero />
      <CategoryShowcase />
      <LatestCollection />
      <OnlyOnMadeIn />
      <VendorSpotlight />
      <BestSeller />
      {/* <VendorIncentives /> -- Commented out why sell on MADEIN instead of solo */}
      <VisionSection />
      <OurPolicy />
      <Newsletter />
    </div>
  );
};

export default Home;
