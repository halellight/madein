/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState("general");

  const sections = [
    { id: "general", title: "1. Acceptance of Terms" },
    { id: "marketplace", title: "2. Marketplace & Local Vendor Model" },
    { id: "accounts", title: "3. User Accounts & Responsibilities" },
    { id: "orders", title: "4. Orders, Escrow & Payment Processing" },
    { id: "returns", title: "5. Return, Cancellation & Dispute Policy" },
    { id: "intellectual", title: "6. Intellectual Property & Content" },
    { id: "liability", title: "7. Limitation of Liability" },
    { id: "governing", title: "8. Governing Law & Jurisdiction" },
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
            MADEIN Legal Documentation
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight"
          >
            Terms of Service
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xs sm:text-sm font-sans text-[#E3EDE7] max-w-2xl mx-auto font-medium"
          >
            Effective Date: January 1, 2026 • Last Updated: August 2026
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
                Table of Contents
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
                  Have questions about our terms? Contact our concierge team.
                </p>
                <Link
                  to="/contact"
                  className="mt-3 block text-center bg-[#111111] text-[#FAF8F3] py-2 text-[11px] font-heading font-bold uppercase hover:bg-[#063D2C] transition-colors"
                >
                  Contact Legal Support
                </Link>
              </div>
            </div>
          </div>

          {/* Legal Content */}
          <div className="lg:col-span-3 space-y-12 text-sm leading-relaxed font-sans text-[#333333]">
            
            {/* Section 1 */}
            <motion.section 
              id="general"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] border-2 border-[#111111] p-8 shadow-[6px_6px_0px_0px_#111111]"
            >
              <h2 className="font-display text-xl font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="mb-4">
                Welcome to <strong>MADEIN</strong> (operated by MADEIN LTD). By accessing, browsing, or placing orders through our website located at madein.ng or associated applications, you agree to be bound by these Terms of Service and all applicable guidelines, rules, and privacy policies incorporated herein.
              </p>
              <p>
                If you do not agree to these terms, you must discontinue using our marketplace immediately. We reserve the right to update these terms at any time without prior individual notice. Your continued use of the platform after updates are published constitutes binding agreement to the revised terms.
              </p>
            </motion.section>

            {/* Section 2 */}
            <motion.section 
              id="marketplace"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] border-2 border-[#111111] p-8 shadow-[6px_6px_0px_0px_#111111]"
            >
              <h2 className="font-display text-xl font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3 mb-4">
                2. Marketplace & Local Vendor Model
              </h2>
              <p className="mb-4">
                MADEIN operates as a premier Nigerian fashion and lifestyle multi-vendor marketplace connecting verified local creators, custom wig technicians, eyewear designers, and thrift curators directly with shoppers nationwide.
              </p>
              <div className="bg-[#F7F4EE] border border-[#111111] p-4 my-4">
                <h4 className="font-heading font-bold text-xs uppercase text-[#063D2C] mb-1">
                  Key Platform Principles:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#444]">
                  <li>All products are crafted or curated by independent local vendors in Nigeria.</li>
                  <li>MADEIN provides escrow payment holding and logistics facilitation to guarantee safe transactions.</li>
                  <li>Vendors retain full legal responsibility for product authenticity, accurate sizing, and timely dispatch.</li>
                </ul>
              </div>
            </motion.section>

            {/* Section 3 */}
            <motion.section 
              id="accounts"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] border-2 border-[#111111] p-8 shadow-[6px_6px_0px_0px_#111111]"
            >
              <h2 className="font-display text-xl font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3 mb-4">
                3. User Accounts & Responsibilities
              </h2>
              <p className="mb-4">
                When creating an account on MADEIN, you represent and warrant that:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>You are at least 18 years old or possess legal parental consent.</li>
                <li>All registration details, shipping addresses, and contact phone numbers provided are accurate and truthful.</li>
                <li>You are solely responsible for maintaining the confidentiality of your account login credentials.</li>
              </ul>
              <p>
                We reserve the right to suspend or terminate accounts found participating in fraudulent activity, fake reviews, abusive communications, or unauthorized resale of vendor intellectual property.
              </p>
            </motion.section>

            {/* Section 4 */}
            <motion.section 
              id="orders"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] border-2 border-[#111111] p-8 shadow-[6px_6px_0px_0px_#111111]"
            >
              <h2 className="font-display text-xl font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3 mb-4">
                4. Orders, Escrow & Payment Processing
              </h2>
              <p className="mb-4">
                Payments on MADEIN are processed securely via verified Nigerian payment gateways (Paystack/Flutterwave/Bank Transfer).
              </p>
              <div className="bg-[#063D2C] text-[#FAF8F3] p-5 rounded-none border border-[#111111]">
                <h4 className="font-heading font-extrabold text-xs uppercase tracking-wider text-[#FAF8F3] mb-2">
                  MADEIN Escrow Protection Guarantee:
                </h4>
                <p className="text-xs text-[#E3EDE7] leading-relaxed">
                  Funds paid by buyers are retained safely in escrow by MADEIN LTD. Funds are only disbursed to the independent vendor after order delivery has been confirmed by our logistics tracking partner or after the standard 48-hour delivery inspection window expires without dispute.
                </p>
              </div>
            </motion.section>

            {/* Section 5 */}
            <motion.section 
              id="returns"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] border-2 border-[#111111] p-8 shadow-[6px_6px_0px_0px_#111111]"
            >
              <h2 className="font-display text-xl font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3 mb-4">
                5. Return, Cancellation & Dispute Policy
              </h2>
              <p className="mb-4">
                Buyers are entitled to request returns or refunds within 7 calendar days of package arrival under our <Link to="/refund-policy" className="text-[#063D2C] font-bold underline">Refund Policy</Link>.
              </p>
              <p className="mb-4">
                Custom wig units, altered apparel, or hygienic accessories that show signs of wear or unsealed hygiene tags are non-returnable unless defective upon initial unboxing.
              </p>
            </motion.section>

            {/* Section 6 */}
            <motion.section 
              id="intellectual"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] border-2 border-[#111111] p-8 shadow-[6px_6px_0px_0px_#111111]"
            >
              <h2 className="font-display text-xl font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3 mb-4">
                6. Intellectual Property & Content
              </h2>
              <p>
                All brand photography, vendor logos, custom designs, website graphics, and user interface elements on MADEIN are owned by or licensed to MADEIN LTD and respective creator partners. Reproduction without written consent is strictly prohibited.
              </p>
            </motion.section>

            {/* Section 7 */}
            <motion.section 
              id="liability"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] border-2 border-[#111111] p-8 shadow-[6px_6px_0px_0px_#111111]"
            >
              <h2 className="font-display text-xl font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3 mb-4">
                7. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by Nigerian law, MADEIN LTD shall not be liable for indirect, incidental, or consequential damages resulting from courier delays, third-party vendor stockouts, or unauthorized account access beyond the value of the order placed.
              </p>
            </motion.section>

            {/* Section 8 */}
            <motion.section 
              id="governing"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] border-2 border-[#111111] p-8 shadow-[6px_6px_0px_0px_#111111]"
            >
              <h2 className="font-display text-xl font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3 mb-4">
                8. Governing Law & Jurisdiction
              </h2>
              <p>
                These terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising from platform usage shall be subject to amicable dispute resolution or arbitration in Lagos State, Nigeria.
              </p>
            </motion.section>

          </div>

        </div>
      </div>

    </div>
  );
};

export default TermsOfService;
