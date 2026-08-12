/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F7F4EE] text-[#111111] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#063D2C] text-xs font-heading font-extrabold tracking-[0.25em] uppercase">CONTACT US</span>
          <h1 className="font-display text-4xl font-extrabold text-[#111111] uppercase tracking-tight mt-2">
            Vendor Onboarding & Support
          </h1>
          <p className="font-sans text-xs sm:text-sm font-medium text-[#555] mt-3">
            Have questions about listing your brand or tracking a parcel? Reach our Lagos & Abuja concierge team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Info */}
          <div className="bg-[#FFFFFF] border-2 border-[#111111] p-8 space-y-8 shadow-[6px_6px_0px_0px_#063D2C]">
            <div>
              <span className="text-xs text-[#063D2C] font-heading font-extrabold uppercase tracking-widest block mb-2">LAGOS HUB</span>
              <p className="text-sm font-heading font-bold text-[#111111]">Victoria Island HQ</p>
              <p className="text-xs font-sans text-[#555] font-medium">Admiralty Way, Lekki Phase 1, Lagos</p>
            </div>

            <div>
              <span className="text-xs text-[#063D2C] font-heading font-extrabold uppercase tracking-widest block mb-2">ABUJA HUB</span>
              <p className="text-sm font-heading font-bold text-[#111111]">Maitama Suite</p>
              <p className="text-xs font-sans text-[#555] font-medium">Gana Street, Maitama, Abuja</p>
            </div>

            <div className="border-t-2 border-[#111111] pt-6 space-y-2 text-xs font-heading font-bold text-[#333]">
              <p>Phone: +234 812 117 3432</p>
              <p>Vendor Desk: concierge@madein.ng</p>
              <p>Onboarding SLA: 24 Hours</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-[#FFFFFF] border-2 border-[#111111] p-8 space-y-5 shadow-[6px_6px_0px_0px_#063D2C]">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 bg-[#E3EDE7] border-2 border-[#063D2C] text-[#063D2C] flex items-center justify-center mx-auto">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-extrabold uppercase text-[#111111]">Application Submitted</h3>
                <p className="text-xs font-sans text-[#555] font-medium">Our vendor onboarding concierge will contact you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-lg font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3">
                  Submit Application / Inquiry
                </h3>

                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#111] mb-1">Your Name / Brand Name</label>
                  <input required type="text" placeholder="e.g. Watashi / Marythin Optics" className="w-full bg-[#FAF8F5] border-2 border-[#111111] text-[#111] text-xs px-4 py-3 font-heading font-medium focus:outline-none focus:border-[#063D2C]" />
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#111] mb-1">Email Address</label>
                  <input required type="email" placeholder="contact@yourbrand.ng" className="w-full bg-[#FAF8F5] border-2 border-[#111111] text-[#111] text-xs px-4 py-3 font-heading font-medium focus:outline-none focus:border-[#063D2C]" />
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#111] mb-1">Inquiry Type</label>
                  <select className="w-full bg-[#FAF8F5] border-2 border-[#111111] text-[#111] text-xs px-4 py-3 font-heading font-medium focus:outline-none focus:border-[#063D2C]">
                    <option value="vendor">Apply to Become a Vendor (0% Fee)</option>
                    <option value="exclusive">Submit Exclusive "Only on MADEIN" Drop</option>
                    <option value="support">Customer Order Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#111] mb-1">Message / Catalog Link</label>
                  <textarea required rows={4} placeholder="Tell us about your wigs, streetwear, chain earphones or thrift brand (Instagram handle or website)..." className="w-full bg-[#FAF8F5] border-2 border-[#111111] text-[#111] text-xs px-4 py-3 font-heading font-medium focus:outline-none focus:border-[#063D2C]"></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#063D2C] hover:bg-[#042B1F] text-[#FAF8F3] py-4 text-xs font-heading font-extrabold uppercase tracking-[0.2em] transition-all border-2 border-[#063D2C] shadow-md"
                >
                  Send Application
                </button>
              </>
            )}
          </form>

        </div>

      </div>
    </div>
  );
};

export default Contact;
