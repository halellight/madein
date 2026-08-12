/* eslint-disable no-unused-vars */
import React from "react";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-[#063D2C] text-[#FAF8F3] text-xs py-2.5 px-4 text-center font-heading font-bold uppercase tracking-wider border-b border-[#111111] flex items-center justify-center space-x-2 shadow-sm">
      <svg className="w-4 h-4 text-[#FAF8F3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
      <span>Free delivery to all locations within Nigeria</span>
    </div>
  );
};

export default Header;
