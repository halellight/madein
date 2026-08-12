/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RefundPolicy = () => {
  const [activeSection, setActiveSection] = useState("eligibility");

  const sections = [
    { id: "eligibility", title: "1. Return Window & Eligibility" },
    { id: "non-returnable", title: "2. Non-Returnable & Hygiene Items" },
    { id: "escrow-process", title: "3. Escrow Dispute & Claim Process" },
    { id: "refund-timeline", title: "4. Refund Disbursement Timelines" },
    { id: "damaged", title: "5. Damaged or Wrong Item Received" },
    { id: "exchanges", title: "6. Size Exchanges & Vendor Contact" },
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
            Buyer Protection Guarantee
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight"
          >
            Refund & Return Policy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xs sm:text-sm font-sans text-[#E3EDE7] max-w-2xl mx-auto font-medium"
          >
            7-day return guarantee powered by MADEIN Escrow Protection. Shop local creators with complete peace of mind.
          </motion.p>
        </div>
      </section>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-[#FFFFFF] border-2 border-[#111111] p-6 shadow-[6px_6px_0px_0px_#063D2C] space-y-3">
              <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-[#063D2C] border-b-2 border-[#111111] pb-3">
                Refund Index
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
                  Need assistance with an active order refund?
                </p>
                <Link
                  to="/orders"
                  className="mt-3 block text-center bg-[#063D2C] text-[#FAF8F3] py-2 text-[11px] font-heading font-bold uppercase border-2 border-[#063D2C]"
                >
                  View My Orders
                </Link>
              </div>
            </div>
          </div>

          {/* Legal Content */}
          <div className="lg:col-span-3 space-y-12 text-sm leading-relaxed font-sans text-[#333333]">
            
            {/* Section 1 */}
            <motion.section 
              id="eligibility"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] border-2 border-[#111111] p-8 shadow-[6px_6px_0px_0px_#111111]"
            >
              <h2 className="font-display text-xl font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3 mb-4">
                1. Return Window & General Eligibility
              </h2>
              <p className="mb-4">
                We want you to love your local Nigerian creator purchases. If you are not completely satisfied with your order, MADEIN offers a <strong>7-day return window</strong> starting from the exact date and time courier delivery is confirmed.
              </p>
              <div className="bg-[#F7F4EE] border border-[#111111] p-4 space-y-2">
                <h4 className="font-heading font-bold text-xs uppercase text-[#063D2C]">
                  To be eligible for a return:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-xs text-[#444]">
                  <li>The item must be unused, unworn, unwashed, and in original brand packaging.</li>
                  <li>All original vendor tags, protective seals, and brand cards must remain attached.</li>
                  <li>Proof of purchase (MADEIN order number or receipt email) must be provided.</li>
                </ul>
              </div>
            </motion.section>

            {/* Section 2 */}
            <motion.section 
              id="non-returnable"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] border-2 border-[#111111] p-8 shadow-[6px_6px_0px_0px_#111111]"
            >
              <h2 className="font-display text-xl font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3 mb-4">
                2. Non-Returnable & Hygiene Restricted Items
              </h2>
              <p className="mb-4">
                Due to health, hygiene, and custom craftsmanship standards, certain item categories have specific return conditions:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#FAF8F5] border border-[#111111]">
                  <h4 className="font-heading font-bold text-xs uppercase text-[#111] mb-1">Custom Wigs & Hair Units</h4>
                  <p className="text-xs text-[#555]">
                    Lace fronts cut, unraveled bundles, brushed hair units, or wigs worn after delivery are non-returnable unless a manufacturing defect is proven upon unboxing.
                  </p>
                </div>
                <div className="p-4 bg-[#FAF8F5] border border-[#111111]">
                  <h4 className="font-heading font-bold text-xs uppercase text-[#111] mb-1">Eyewear & Chain Accessories</h4>
                  <p className="text-xs text-[#555]">
                    Frames or chains with scratched lenses or removed security seals are ineligible for return.
                  </p>
                </div>
                <div className="p-4 bg-[#FAF8F5] border border-[#111111]">
                  <h4 className="font-heading font-bold text-xs uppercase text-[#111] mb-1">Curated Vintage & Thrift</h4>
                  <p className="text-xs text-[#555]">
                    Vintage pieces are sold as described in vendor drop notes. Sizing adjustments should be verified prior to ordering.
                  </p>
                </div>
                <div className="p-4 bg-[#FAF8F5] border border-[#111111]">
                  <h4 className="font-heading font-bold text-xs uppercase text-[#111] mb-1">Undergarments & Bodysuits</h4>
                  <p className="text-xs text-[#555]">
                    Strictly non-returnable for hygiene reasons once protective seals are unsealed.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Section 3 */}
            <motion.section 
              id="escrow-process"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] border-2 border-[#111111] p-8 shadow-[6px_6px_0px_0px_#111111]"
            >
              <h2 className="font-display text-xl font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3 mb-4">
                3. Escrow Dispute & Return Claim Steps
              </h2>
              <p className="mb-4">
                Follow these simple steps to file a return request before funds are released to the vendor:
              </p>
              <ol className="list-decimal list-inside space-y-3 font-medium text-xs text-[#333]">
                <li><strong className="text-[#063D2C]">Log into your MADEIN Account:</strong> Navigate to your <em>Orders</em> page and select the item you wish to return.</li>
                <li><strong className="text-[#063D2C]">Select Reason & Attach Photos:</strong> Choose your return reason (e.g. damaged upon arrival, wrong size, or item not as described) and upload clear unboxing photos/video.</li>
                <li><strong className="text-[#063D2C]">Escrow Lock & Courier Pickup:</strong> Once approved, MADEIN places a temporary hold on the vendor disbursement and dispatches a courier to collect the item from your location.</li>
                <li><strong className="text-[#063D2C]">Vendor Inspection & Refund:</strong> Upon item arrival and quick inspection at our hub, your refund is instantly initiated to your bank account.</li>
              </ol>
            </motion.section>

            {/* Section 4 */}
            <motion.section 
              id="refund-timeline"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] border-2 border-[#111111] p-8 shadow-[6px_6px_0px_0px_#111111]"
            >
              <h2 className="font-display text-xl font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3 mb-4">
                4. Refund Disbursement Timelines
              </h2>
              <p className="mb-4">
                Once your return is inspected and approved by MADEIN Concierge, refunds are processed back to your original payment method:
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-[#444] mb-4">
                <li><strong>Debit Card / Bank Transfer (Paystack/Flutterwave):</strong> 1 to 3 business days.</li>
                <li><strong>MADEIN Store Credit / Wallet:</strong> Instant (available immediately for future creator drops).</li>
              </ul>
            </motion.section>

            {/* Section 5 */}
            <motion.section 
              id="damaged"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] border-2 border-[#111111] p-8 shadow-[6px_6px_0px_0px_#111111]"
            >
              <h2 className="font-display text-xl font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3 mb-4">
                5. Damaged or Wrong Item Received
              </h2>
              <p className="mb-4">
                Please inspect your order immediately upon delivery. If your package is visibly damaged, tampered with, or contains incorrect items, notify the delivery courier and contact us at <strong>concierge@madein.ng</strong> within 24 hours with photos.
              </p>
              <p>
                MADEIN covers all return logistics fees for items received in damaged or incorrect condition.
              </p>
            </motion.section>

            {/* Section 6 */}
            <motion.section 
              id="exchanges"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] border-2 border-[#111111] p-8 shadow-[6px_6px_0px_0px_#111111]"
            >
              <h2 className="font-display text-xl font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3 mb-4">
                6. Size Exchanges & Direct Vendor Support
              </h2>
              <p>
                Need a different size for streetwear or apparel? You can request a direct size exchange subject to vendor stock availability. Contact <Link to="/contact" className="text-[#063D2C] font-bold underline">MADEIN Customer Support</Link> to arrange a swift swap.
              </p>
            </motion.section>

          </div>

        </div>
      </div>

    </div>
  );
};

export default RefundPolicy;
