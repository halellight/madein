/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="bg-[#F7F4EE] text-[#111111] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#063D2C] text-xs font-heading font-extrabold tracking-[0.25em] uppercase">OUR MISSION</span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-[#111111] uppercase tracking-tight mt-2">
            Better Quality. <br />
            <span className="text-[#063D2C]">Direct Local Deals.</span>
          </h1>
          <p className="font-sans text-[#333333] text-sm sm:text-base font-medium mt-4 leading-relaxed">
            MADEIN was built to offer a superior local alternative to cheap mass imports. We empower local fashion creators, wig makers, eyewear designers, and thrift curators across Nigeria.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative aspect-square bg-[#FFFFFF] border-2 border-[#111111] overflow-hidden shadow-[8px_8px_0px_0px_#063D2C]">
            <img src={assets.about_img} alt="Nigerian Atelier" className="w-full h-full object-cover" />
          </div>

          <div className="space-y-6">
            <h2 className="font-display text-3xl font-extrabold text-[#111111] uppercase leading-tight">
              An Affordable One-Stop Shop For Local Creators
            </h2>
            <p className="font-sans text-[#333333] text-xs sm:text-sm font-medium leading-relaxed">
              Instead of relying on low-quality cross-border apps, MADEIN connects buyers with authentic local vendors who deliver real craftsmanship, raw virgin wig lace, custom streetwear, and silver chain accessories with fast doorstep delivery.
            </p>
            <p className="font-sans text-[#333333] text-xs sm:text-sm font-medium leading-relaxed">
              We empower local vendors with 0% setup fees, verified badges, doorstep dispatch logistics across Nigeria, and escrow protection.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-[#FFFFFF] p-4 border-2 border-[#111111]">
                <p className="font-heading text-3xl font-extrabold text-[#063D2C]">0%</p>
                <p className="text-xs font-heading font-bold text-[#555] uppercase">Commission Intro</p>
              </div>
              <div className="bg-[#FFFFFF] p-4 border-2 border-[#111111]">
                <p className="font-heading text-3xl font-extrabold text-[#111111]">100%</p>
                <p className="text-xs font-heading font-bold text-[#555] uppercase">Quality Guaranteed</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#063D2C] text-[#FAF8F3] border-2 border-[#111111] p-12 text-center max-w-4xl mx-auto space-y-6 shadow-xl">
          <h3 className="font-display text-2xl sm:text-4xl font-extrabold uppercase">
            Are you a local creator or brand?
          </h3>
          <p className="font-sans text-[#E3EDE7] text-xs sm:text-sm max-w-xl mx-auto font-medium">
            List your wigs, streetwear, chain earphones, or vintage edits on MADEIN with zero listing fees.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#FAF8F3] hover:bg-[#EBF2EE] text-[#063D2C] px-10 py-4 text-xs font-heading font-extrabold uppercase tracking-[0.2em] shadow-lg border-2 border-[#FAF8F3]"
          >
            Apply for Vendor Storefront
          </Link>
        </div>

      </div>
    </div>
  );
};

export default About;
