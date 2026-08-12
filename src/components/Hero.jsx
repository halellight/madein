/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#111111] text-[#FAF8F3] border-b-2 border-[#111111] overflow-hidden pt-24">

      {/* Background Image with Zoom Animation */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0.2 }}
        animate={{ scale: 1.05, opacity: 0.45 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={assets.sew}
          alt="MADEIN Landing Craft"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/85 to-transparent"></div>
      </motion.div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl space-y-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* <span className="inline-block bg-[#FAF8F3]/10 text-[#FAF8F3] text-xs font-heading font-bold uppercase tracking-[0.25em] px-4 py-1.5 border border-[#FAF8F3]/20 mb-3">
              Direct from Local Nigerian Creators
            </span> */}
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tighter text-[#FAF8F3] uppercase">
              Find Your {" "}
              <span className="text-[#E3EDE7]">Style.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-sm sm:text-base text-[#E3EDE7] font-medium leading-relaxed max-w-lg"
          >
            Your everyday destination for affordable wigs, streetwear, eyewear, and thrift directly from local creators.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2"
          >
            <Link
              to="/collection"
              className="bg-[#063D2C] hover:bg-[#042B1F] text-[#FAF8F3] px-8 py-4 text-xs font-heading font-extrabold tracking-[0.2em] uppercase text-center transition-all duration-300 border-2 border-[#063D2C] shadow-lg hover:shadow-[4px_4px_0px_0px_#FAF8F3]"
            >
              BROWSE CATEGORIES
            </Link>
            <Link
              to="/collection?exclusive=true"
              className="bg-[#FAF8F3] hover:bg-[#E3EDE7] text-[#111111] px-8 py-4 text-xs font-heading font-extrabold tracking-[0.2em] uppercase text-center transition-all duration-300 border-2 border-[#FAF8F3] hover:shadow-[4px_4px_0px_0px_#063D2C]"
            >
              ONLY ON MADEIN
            </Link>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
