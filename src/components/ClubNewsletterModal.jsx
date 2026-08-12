/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const ClubNewsletterModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [preference, setPreference] = useState("all");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const clubModalSeen = localStorage.getItem("madein_club_modal_seen");
    if (!clubModalSeen) {
      // Auto open popup after 2 seconds
      const timer = setTimeout(() => setShowModal(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("madein_club_modal_seen", "true");
    setShowModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      localStorage.setItem("madein_club_modal_seen", "true");
    }
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#111111]/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#FFFFFF] border-2 border-[#111111] max-w-2xl w-full shadow-[12px_12px_0px_0px_#063D2C] relative overflow-hidden grid grid-cols-1 md:grid-cols-12">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 bg-[#FAF8F3] border-2 border-[#111111] text-[#111111] hover:bg-[#063D2C] hover:text-[#FAF8F3] flex items-center justify-center font-bold text-sm transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Left Side Image */}
        <div className="hidden md:block md:col-span-5 relative bg-[#063D2C] border-r-2 border-[#111111]">
          <img
            src={assets.chain_earphones}
            alt="MADEIN Exclusive Drops"
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#063D2C] via-[#063D2C]/30 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-[#FAF8F3]">
            <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-[#E3EDE7] block mb-1">
              VIP DROPS ACCESS
            </span>
            <p className="font-display text-lg font-extrabold uppercase leading-tight">
              UP TO 55% OFF YOUR FIRST LOCAL DROP
            </p>
          </div>
        </div>

        {/* Right Side Form Content */}
        <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-center space-y-5">
          
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-12 h-12 bg-[#E3EDE7] border-2 border-[#063D2C] text-[#063D2C] flex items-center justify-center mx-auto">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display text-xl font-extrabold uppercase text-[#111111]">
                WELCOME TO MADEIN CLUB
              </h3>
              <p className="font-sans text-xs text-[#555] font-medium leading-relaxed">
                Your 55% OFF VIP drop pass has been generated. Check your inbox for your exclusive code.
              </p>
              <button
                onClick={handleClose}
                className="bg-[#063D2C] text-[#FAF8F3] px-8 py-3 text-xs font-heading font-extrabold uppercase tracking-widest border-2 border-[#063D2C]"
              >
                START SHOPPING NOW
              </button>
            </div>
          ) : (
            <>
              <div>
                <div className="inline-block bg-[#063D2C] text-[#FAF8F3] px-2.5 py-0.5 text-[10px] font-heading font-extrabold uppercase tracking-widest mb-2">
                  LIMITED DROP ACCESS
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#111111] leading-none">
                  JOIN MADEIN CLUB
                </h2>
                <p className="font-sans text-xs text-[#555] font-medium mt-2 leading-relaxed">
                  Sign up for early news on limited drops, exclusive vendor releases, and get <span className="font-bold text-[#063D2C]">up to 55% off</span> your first order.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-heading font-bold uppercase tracking-wider text-[#111111] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="yourname@domain.com"
                    className="w-full bg-[#FAF8F5] border-2 border-[#111111] text-[#111111] text-xs px-4 py-3 font-heading font-medium focus:outline-none focus:border-[#063D2C]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-heading font-bold uppercase tracking-wider text-[#111111] mb-1">
                    Category Preference
                  </label>
                  <select
                    value={preference}
                    onChange={(e) => setPreference(e.target.value)}
                    className="w-full bg-[#FAF8F5] border-2 border-[#111111] text-[#111111] text-xs px-4 py-3 font-heading font-medium focus:outline-none focus:border-[#063D2C]"
                  >
                    <option value="all">All Drops & Exclusives</option>
                    <option value="wigs">HD Lace Wigs & Hair Units</option>
                    <option value="streetwear">Streetwear & Contemporary Fashion</option>
                    <option value="eyewear">Silver Chain Hardware & Eyewear</option>
                    <option value="thrift">Curated Thrift & Vintage Edits</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#063D2C] hover:bg-[#042B1F] text-[#FAF8F3] py-3.5 text-xs font-heading font-extrabold uppercase tracking-[0.2em] transition-all border-2 border-[#063D2C] shadow-md"
                >
                  GET 55% OFF DROP PASS
                </button>
              </form>

              <div className="text-center">
                <button
                  onClick={handleClose}
                  className="text-[10px] font-heading font-bold text-[#555] hover:text-[#111] uppercase underline"
                >
                  No thanks, I'll pay full price
                </button>
              </div>
            </>
          )}

        </div>

      </div>
    </div>
  );
};

export default ClubNewsletterModal;
