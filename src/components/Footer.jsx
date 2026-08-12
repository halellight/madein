/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-[#063D2C] text-[#FAF8F3] pt-16 pb-12 border-t-2 border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-14 border-b border-[#FAF8F3]/20">
          
          {/* Brand Info & Custom Logo */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <img
                src={assets.madein_logo}
                alt="MADEIN"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="font-sans text-[#E3EDE7] text-xs font-medium leading-relaxed max-w-sm">
              An affordable one-stop shop empowering local fashion creators, wig makers, eyewear designers, and thrift curators across Nigeria. Quality local deals delivered directly to your doorstep.
            </p>
            <div className="pt-1">
              <span className="font-heading text-[10px] text-[#FAF8F3] font-bold tracking-widest uppercase block">
                HEADQUARTERS
              </span>
              <p className="text-xs text-[#E3EDE7]">Victoria Island, Lagos • Maitama, Abuja</p>
            </div>
          </div>

          {/* Column 1: Shop */}
          <div>
            <h4 className="font-heading text-xs font-bold tracking-[0.2em] uppercase text-[#FAF8F3] mb-4">
              SHOP
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E3EDE7] font-medium">
              <li>
                <Link to="/collection?category=Phone%20Cases%20%26%20Accessories" className="hover:underline">Phone Cases & Tech Cases</Link>
              </li>
              <li>
                <Link to="/collection?category=Wigs%20%26%20Hair" className="hover:underline">Wigs & Hair Units</Link>
              </li>
              <li>
                <Link to="/collection?category=Clothing%20%26%20Fashion" className="hover:underline">Clothing & Streetwear</Link>
              </li>
              <li>
                <Link to="/collection?category=Eyewear%20%26%20Accessories" className="hover:underline">Chain Earphones & Eyewear</Link>
              </li>
              <li>
                <Link to="/collection?category=Thrift%20%26%20Vintage" className="hover:underline">Curated Thrift & Vintage</Link>
              </li>
              <li>
                <Link to="/collection?exclusive=true" className="text-[#FAF8F3] font-bold underline">Only on MADEIN Drops</Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Our Why / Brand */}
          <div>
            <h4 className="font-heading text-xs font-bold tracking-[0.2em] uppercase text-[#FAF8F3] mb-4">
              ABOUT US
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E3EDE7] font-medium">
              <li>
                <Link to="/about" className="hover:underline">Our Why</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">Apply as Vendor (0% Fee)</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">Vendor Portal</Link>
              </li>
              <li>
                <Link to="/admin" className="text-[#FAF8F3] font-bold underline hover:text-[#E3EDE7]">Admin Control Center</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Legal Policies */}
          <div>
            <h4 className="font-heading text-xs font-bold tracking-[0.2em] uppercase text-[#FAF8F3] mb-4">
              POLICIES & LEGAL
            </h4>
            <ul className="space-y-2.5 text-xs text-[#E3EDE7] font-medium">
              <li>
                <Link to="/terms" className="hover:underline">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:underline">Refund & Escrow Policy</Link>
              </li>
              <li>
                <Link to="/shipping-policy" className="hover:underline">Shipping & Delivery Policy</Link>
              </li>
              <li className="pt-2 text-[11px] text-[#FAF8F3]/80">
                Support: concierge@madein.ng
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E3EDE7] font-medium space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} MADEIN LTD. ALL RIGHTS RESERVED.</p>

          {/* Policy Links */}
          <div className="flex items-center space-x-4 text-[11px]">
            <Link to="/terms" className="hover:underline hover:text-white">Terms</Link>
            <span>•</span>
            <Link to="/privacy" className="hover:underline hover:text-white">Privacy</Link>
            <span>•</span>
            <Link to="/refund-policy" className="hover:underline hover:text-white">Refunds</Link>
            <span>•</span>
            <Link to="/shipping-policy" className="hover:underline hover:text-white">Shipping</Link>
          </div>

          <div className="flex items-center space-x-2 text-[#FAF8F3]">
            <svg className="w-3.5 h-3.5 text-[#FAF8F3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Delivering across all locations in Nigeria</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
