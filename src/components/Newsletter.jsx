/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-[#F7F4EE] text-[#111111] border-b-2 border-[#111111]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <span className="text-[#063D2C] text-xs font-heading font-extrabold tracking-[0.25em] uppercase">MADEIN CLUB</span>
        <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-[#111111] tracking-tight uppercase mt-1 mb-2">
          Get Early Access to Drops
        </h2>
        <p className="font-sans text-[#555555] text-xs sm:text-sm font-medium max-w-xl mx-auto mb-6 leading-relaxed">
          Be the first to know when new wig units, streetwear brands, chain earphones, and curated thrift collections drop.
        </p>

        {subscribed ? (
          <div className="bg-[#063D2C] text-[#FAF8F3] p-5 max-w-md mx-auto font-heading font-bold text-xs tracking-wider uppercase border-2 border-[#111111] flex items-center justify-center space-x-2">
            <svg className="w-4 h-4 text-[#FAF8F3]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>Welcome to the MADEIN Club. Check your inbox for your drop pass.</span>
          </div>
        ) : (
          <form
            onSubmit={onSubmitHandler}
            className="flex flex-col sm:flex-row items-stretch justify-center max-w-md mx-auto gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email address"
              className="bg-[#FFFFFF] text-[#111111] text-xs px-4 py-3.5 border-2 border-[#111111] focus:outline-none focus:border-[#063D2C] flex-1 font-heading font-medium"
            />
            <button
              type="submit"
              className="bg-[#063D2C] hover:bg-[#042B1F] text-[#FAF8F3] text-xs font-heading font-extrabold px-7 py-3.5 uppercase tracking-[0.2em] transition-all duration-300 border-2 border-[#063D2C] whitespace-nowrap shadow-sm"
            >
              Join VIP List
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
