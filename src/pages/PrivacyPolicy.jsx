/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("collection");

  const sections = [
    { id: "collection", title: "1. Information We Collect" },
    { id: "usage", title: "2. How We Use Your Data" },
    { id: "sharing", title: "3. Logistics & Third-Party Sharing" },
    { id: "cookies", title: "4. Cookies & Tracking Technologies" },
    { id: "security", title: "5. Data Security & Escrow Privacy" },
    { id: "rights", title: "6. Your Privacy Rights & Choices" },
    { id: "contact-privacy", title: "7. Contact Data Protection Officer" },
  ];

  const scrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-[#F7F4EE] text-[#111111] min-h-screen pt-28 pb-20">
      
      {/* Header Banner */}
      <section className="bg-[#063D2C] text-[#FAF8F3] py-16 px-4 border-b-2 border-[#111111]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-xs font-heading font-bold uppercase tracking-[0.25em] bg-[#FAF8F3]/10 px-4 py-1.5 border border-[#FAF8F3]/20 mb-4"
          >
            MADEIN Transparency Commitment
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight"
          >
            Privacy Policy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xs sm:text-sm font-sans text-[#E3EDE7] max-w-2xl mx-auto font-medium"
          >
            Safeguarding your personal information, delivery addresses, and payment data across Nigeria.
          </motion.p>
        </div>
      </section>

      {/* Main Content & Sidebar Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* Quick Nav Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-[#FFFFFF] border-2 border-[#111111] p-6 shadow-[6px_6px_0px_0px_#063D2C] space-y-3">
              <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-[#063D2C] border-b-2 border-[#111111] pb-3">
                Privacy Navigation
              </h3>
              <nav className="flex flex-col space-y-2 text-xs font-heading font-semibold">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollTo(sec.id)}
                    className={`text-left py-2 px-2 transition-all ${
                      activeSection === sec.id
                        ? "bg-[#063D2C] text-[#FAF8F3] font-bold border-l-4 border-[#111111]"
                        : "text-[#111111] hover:bg-[#F7F4EE]"
                    }`}
                  >
                    {sec.title}
                  </button>
                ))}
              </nav>

              <div className="pt-4 border-t border-[#111111]/20">
                <p className="text-[11px] text-[#555] font-sans">
                  Manage your browser tracking preferences anytime.
                </p>
                <button
                  onClick={() => localStorage.removeItem("madein_cookie_consent")}
                  className="mt-3 w-full text-center bg-[#111111] text-[#FAF8F3] py-2 text-[11px] font-heading font-bold uppercase hover:bg-[#063D2C] transition-colors"
                >
                  Reset Cookie Banner
                </button>
              </div>
            </div>
          </div>

          {/* Legal Content */}
          <div className="lg:col-span-3 space-y-12 text-sm leading-relaxed font-sans text-[#333333]">
            
            {/* Section 1 */}
            <motion.section 
              id="collection"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] border-2 border-[#111111] p-8 shadow-[6px_6px_0px_0px_#111111]"
            >
              <h2 className="font-display text-xl font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3 mb-4">
                1. Information We Collect
              </h2>
              <p className="mb-4">
                At MADEIN, we respect your privacy and are committed to protecting your personal data in compliance with the Nigeria Data Protection Act (NDPA).
              </p>
              <h4 className="font-heading font-bold text-xs uppercase text-[#063D2C] mb-2">
                A. Personal Details Provided by You:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-xs text-[#444] mb-4">
                <li>Full name, delivery phone number, and email address upon account setup.</li>
                <li>Detailed shipping address (street, city, state in Nigeria).</li>
                <li>Saved items, cart choices, and vendor inquiry messages.</li>
              </ul>
              <h4 className="font-heading font-bold text-xs uppercase text-[#063D2C] mb-2">
                B. Payment Information:
              </h4>
              <p className="text-xs text-[#444]">
                We do NOT store your credit/debit card numbers, PINs, or CVVs on our servers. All financial transactions are securely tokenized and processed by PCIDSS-compliant payment processors (Paystack/Flutterwave).
              </p>
            </motion.section>

            {/* Section 2 */}
            <motion.section 
              id="usage"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] border-2 border-[#111111] p-8 shadow-[6px_6px_0px_0px_#111111]"
            >
              <h2 className="font-display text-xl font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3 mb-4">
                2. How We Use Your Data
              </h2>
              <p className="mb-4">
                We use the information collected strictly for legitimate operational purposes:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                <div className="p-4 bg-[#F7F4EE] border border-[#111111]">
                  <h5 className="font-heading font-bold text-xs uppercase text-[#111] mb-1">Order Fulfillment</h5>
                  <p className="text-xs text-[#555]">Dispatching items from verified local vendors to your delivery doorstep.</p>
                </div>
                <div className="p-4 bg-[#F7F4EE] border border-[#111111]">
                  <h5 className="font-heading font-bold text-xs uppercase text-[#111] mb-1">Escrow & Verification</h5>
                  <p className="text-xs text-[#555]">Verifying delivery confirmation before disbursing funds to independent creators.</p>
                </div>
                <div className="p-4 bg-[#F7F4EE] border border-[#111111]">
                  <h5 className="font-heading font-bold text-xs uppercase text-[#111] mb-1">Customer Support</h5>
                  <p className="text-xs text-[#555]">Resolving sizing issues, return inquiries, or courier status checks.</p>
                </div>
                <div className="p-4 bg-[#F7F4EE] border border-[#111111]">
                  <h5 className="font-heading font-bold text-xs uppercase text-[#111] mb-1">Exclusive Drop Alerts</h5>
                  <p className="text-xs text-[#555]">Notifying opt-in members of limited-edition drops and vendor promotions.</p>
                </div>
              </div>
            </motion.section>

            {/* Section 3 */}
            <motion.section 
              id="sharing"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] border-2 border-[#111111] p-8 shadow-[6px_6px_0px_0px_#111111]"
            >
              <h2 className="font-display text-xl font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3 mb-4">
                3. Logistics & Third-Party Sharing
              </h2>
              <p className="mb-4">
                MADEIN will never sell or rent your personal information to third-party advertisers. Data is shared exclusively with necessary operational partners:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4 text-xs">
                <li><strong>Verified Logistics Partners:</strong> Doorstep courier agents receive your name, phone number, and address strictly to perform delivery.</li>
                <li><strong>Assigned Local Vendors:</strong> Vendors fulfilling your order receive item specifications and delivery city to customize and pack your order.</li>
                <li><strong>Payment Providers:</strong> Secure payment tokens are transmitted to bank networks for instant payment verification.</li>
              </ul>
            </motion.section>

            {/* Section 4 */}
            <motion.section 
              id="cookies"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] border-2 border-[#111111] p-8 shadow-[6px_6px_0px_0px_#111111]"
            >
              <h2 className="font-display text-xl font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3 mb-4">
                4. Cookies & Tracking Technologies
              </h2>
              <p className="mb-4">
                We use essential session cookies to keep your shopping cart active, remember saved search filters, and store cookie preferences.
              </p>
              <p>
                Optional performance and analytics cookies help us measure page speed and identify popular product drops across Lagos, Abuja, and other states. You can modify your preferences at any time.
              </p>
            </motion.section>

            {/* Section 5 */}
            <motion.section 
              id="security"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] border-2 border-[#111111] p-8 shadow-[6px_6px_0px_0px_#111111]"
            >
              <h2 className="font-display text-xl font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3 mb-4">
                5. Data Security & Escrow Privacy
              </h2>
              <p>
                We employ SSL/TLS encryption for all data in transit, strict access control policies, and regular security audits. Your escrow account details and identity verification records are protected with bank-grade security standards.
              </p>
            </motion.section>

            {/* Section 6 */}
            <motion.section 
              id="rights"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] border-2 border-[#111111] p-8 shadow-[6px_6px_0px_0px_#111111]"
            >
              <h2 className="font-display text-xl font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3 mb-4">
                6. Your Privacy Rights & Choices
              </h2>
              <p className="mb-4">
                Under NDPA regulations, you have full authority over your data:
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-[#444]">
                <li><strong>Access & Export:</strong> Request a copy of all personal data linked to your account.</li>
                <li><strong>Correction:</strong> Update incorrect phone numbers or shipping addresses in your profile.</li>
                <li><strong>Deletion:</strong> Request permanent erasure of your account and order history.</li>
              </ul>
            </motion.section>

            {/* Section 7 */}
            <motion.section 
              id="contact-privacy"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] border-2 border-[#111111] p-8 shadow-[6px_6px_0px_0px_#111111]"
            >
              <h2 className="font-display text-xl font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3 mb-4">
                7. Contact Data Protection Officer
              </h2>
              <p className="mb-4">
                If you have privacy concerns or wish to submit a data erasure request, contact our dedicated Data Protection Officer:
              </p>
              <div className="bg-[#063D2C] text-[#FAF8F3] p-4 text-xs font-heading font-bold space-y-1">
                <p>Email: privacy@madein.ng</p>
                <p>Concierge Line: +234 (0) 812 117 3432</p>
                <p>HQ: Victoria Island, Lagos, Nigeria</p>
              </div>
            </motion.section>

          </div>

        </div>
      </div>

    </div>
  );
};

export default PrivacyPolicy;
