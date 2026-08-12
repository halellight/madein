/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const VendorIncentives = () => {
  const { vendorIncentives } = useContext(ShopContext);

  return (
    <section className="py-20 bg-[#E3EDE7] text-[#111111] relative overflow-hidden border-b-2 border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-1.5 bg-[#063D2C] text-[#FAF8F3] px-3.5 py-1 text-xs font-heading font-extrabold tracking-widest uppercase mb-3">
            <svg className="w-3.5 h-3.5 text-[#FAF8F3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>FOR LOCAL CREATORS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#111111] uppercase tracking-tight leading-none">
            Why Sell on MADEIN Instead of Solo?
          </h2>
          <p className="font-sans text-[#333333] text-xs sm:text-sm font-medium mt-3 leading-relaxed">
            Stop losing buyers to isolated standalone websites and DM fatigue. MADEIN gives upcoming wig creators, streetwear labels, opticians, and thrift curators instant credibility, logistics, and buyer traffic.
          </p>
        </div>

        {/* Incentive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {vendorIncentives.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] border-2 border-[#111111] p-6 hover:shadow-[6px_6px_0px_0px_#063D2C] transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-[#E3EDE7] border border-[#063D2C] text-[#063D2C] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-lg font-bold text-[#111111] mb-2 group-hover:text-[#063D2C] transition-colors uppercase">
                {item.title}
              </h3>
              <p className="font-sans text-[#555555] text-xs font-medium leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="bg-[#063D2C] text-[#FAF8F3] border-2 border-[#111111] p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#FAF8F3] uppercase mb-1">
              Ready to scale your brand on MADEIN?
            </h3>
            <p className="font-sans text-[#E3EDE7] text-xs sm:text-sm font-medium">
              Join vetted local vendors. Free onboarding support within 24 hours.
            </p>
          </div>
          <Link
            to="/contact"
            className="whitespace-nowrap bg-[#FAF8F3] hover:bg-[#EBF2EE] text-[#063D2C] px-8 py-3.5 text-xs font-heading font-extrabold tracking-[0.2em] uppercase transition-all duration-300 border-2 border-[#FAF8F3]"
          >
            Apply as Vendor (0% Fee)
          </Link>
        </div>

      </div>
    </section>
  );
};

export default VendorIncentives;
