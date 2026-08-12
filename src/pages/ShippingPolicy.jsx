/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ShippingPolicy = () => {
  const [activeSection, setActiveSection] = useState("coverage");

  const sections = [
    { id: "coverage", title: "1. Delivery Coverage & Regions" },
    { id: "timelines", title: "2. Processing & Dispatch Timelines" },
    { id: "rates", title: "3. Shipping Fees & Free Shipping Promo" },
    { id: "tracking", title: "4. Live Order Tracking" },
    { id: "attempts", title: "5. Delivery Attempts & Doorstep Protocol" },
    { id: "customs", title: "6. Inter-State & Regional Express Services" },
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
            Nationwide Logistics Network
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight"
          >
            Shipping Policy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xs sm:text-sm font-sans text-[#E3EDE7] max-w-2xl mx-auto font-medium"
          >
            Fast, reliable doorstep delivery covering Lagos, Abuja, Port Harcourt, and all 36 states across Nigeria.
          </motion.p>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* Quick Nav Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-[#FFFFFF] border-2 border-[#111111] p-6 shadow-[6px_6px_0px_0px_#063D2C] space-y-3">
              <h3 className="font-heading text-xs font-bold uppercase tracking-widest text-[#063D2C] border-b-2 border-[#111111] pb-3">
                Shipping Topics
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
                  Tracking a package right now?
                </p>
                <Link
                  to="/orders"
                  className="mt-3 block text-center bg-[#111111] text-[#FAF8F3] py-2 text-[11px] font-heading font-bold uppercase hover:bg-[#063D2C] transition-colors"
                >
                  Track Package Status
                </Link>
              </div>
            </div>
          </div>

          {/* Policy Detail Sections */}
          <div className="lg:col-span-3 space-y-12 text-sm leading-relaxed font-sans text-[#333333]">
            
            {/* Section 1 */}
            <motion.section 
              id="coverage"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] border-2 border-[#111111] p-8 shadow-[6px_6px_0px_0px_#111111]"
            >
              <h2 className="font-display text-xl font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3 mb-4">
                1. Delivery Coverage & Regions
              </h2>
              <p className="mb-4">
                MADEIN partners with top-tier courier networks (GIG Logistics, Red Star, Speedaf, and local express riders) to deliver orders to every corner of Nigeria.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-[#F7F4EE] border border-[#111111]">
                  <h4 className="font-heading font-bold text-xs uppercase text-[#063D2C] mb-1">Lagos Metropolis</h4>
                  <p className="text-xs text-[#555]">Island (VI, Ikoyi, Lekki, Ajah) & Mainland (Ikeja, Yaba, Surulere, Maryland).</p>
                </div>
                <div className="p-4 bg-[#F7F4EE] border border-[#111111]">
                  <h4 className="font-heading font-bold text-xs uppercase text-[#063D2C] mb-1">Abuja & Port Harcourt</h4>
                  <p className="text-xs text-[#555]">Maitama, Asokoro, Wuse, Gwarinpa, GRA Phase 1-3, Trans Amadi.</p>
                </div>
                <div className="p-4 bg-[#F7F4EE] border border-[#111111]">
                  <h4 className="font-heading font-bold text-xs uppercase text-[#063D2C] mb-1">All Other States</h4>
                  <p className="text-xs text-[#555]">Capital cities and major commercial hubs in Enugu, Ibadan, Benin, Kano, Calabar, etc.</p>
                </div>
              </div>
            </motion.section>

            {/* Section 2 */}
            <motion.section 
              id="timelines"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] border-2 border-[#111111] p-8 shadow-[6px_6px_0px_0px_#111111]"
            >
              <h2 className="font-display text-xl font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3 mb-4">
                2. Processing & Dispatch Timelines
              </h2>
              <p className="mb-4">
                Orders are processed quickly by our independent vendors and dispatched through our logistics hub:
              </p>
              <table className="w-full text-left text-xs border-collapse border border-[#111111]">
                <thead>
                  <tr className="bg-[#063D2C] text-[#FAF8F3] font-heading font-bold uppercase">
                    <th className="p-3 border border-[#111111]">Location / Category</th>
                    <th className="p-3 border border-[#111111]">Vendor Handling</th>
                    <th className="p-3 border border-[#111111]">Estimated Delivery</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#111111]">
                  <tr className="bg-[#FFFFFF]">
                    <td className="p-3 border border-[#111111] font-bold">Lagos Same-City Express</td>
                    <td className="p-3 border border-[#111111]">24 Hours</td>
                    <td className="p-3 border border-[#111111]">1 to 2 Business Days</td>
                  </tr>
                  <tr className="bg-[#FAF8F5]">
                    <td className="p-3 border border-[#111111] font-bold">Abuja & State Capitals</td>
                    <td className="p-3 border border-[#111111]">24-48 Hours</td>
                    <td className="p-3 border border-[#111111]">2 to 4 Business Days</td>
                  </tr>
                  <tr className="bg-[#FFFFFF]">
                    <td className="p-3 border border-[#111111] font-bold">Custom Wig Creation / Tailored Drops</td>
                    <td className="p-3 border border-[#111111]">3 to 5 Days (Crafting)</td>
                    <td className="p-3 border border-[#111111]">2 Days Post-Dispatch</td>
                  </tr>
                </tbody>
              </table>
            </motion.section>

            {/* Section 3 */}
            <motion.section 
              id="rates"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] border-2 border-[#111111] p-8 shadow-[6px_6px_0px_0px_#111111]"
            >
              <h2 className="font-display text-xl font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3 mb-4">
                3. Shipping Fees & Nationwide Delivery Promotion
              </h2>
              <div className="bg-[#063D2C] text-[#FAF8F3] p-5 mb-4 border border-[#111111]">
                <div className="flex items-center space-x-3 mb-2">
                  <svg className="w-6 h-6 text-[#FAF8F3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                  <h4 className="font-heading font-extrabold text-sm uppercase text-[#FAF8F3]">
                    SPECIAL PROMOTION: FREE DELIVERY
                  </h4>
                </div>
                <p className="text-xs text-[#E3EDE7]">
                  For a limited time, MADEIN offers <strong>Free Doorstep Delivery</strong> on eligible local vendor orders to all locations within Nigeria!
                </p>
              </div>
              <p className="text-xs text-[#555]">
                Standard flat-rate shipping for multi-vendor orders is automatically calculated at checkout based on weight and recipient city.
              </p>
            </motion.section>

            {/* Section 4 */}
            <motion.section 
              id="tracking"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] border-2 border-[#111111] p-8 shadow-[6px_6px_0px_0px_#111111]"
            >
              <h2 className="font-display text-xl font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3 mb-4">
                4. Live Order Tracking & SMS Notifications
              </h2>
              <p className="mb-4">
                Once your order is picked up by the courier rider, you will receive an automated SMS and email containing your unique <strong>MADEIN Waybill Tracking Number</strong> and direct rider contact.
              </p>
              <p>
                You can track your package progress in real time directly from your <Link to="/orders" className="text-[#063D2C] font-bold underline">Orders Account Dashboard</Link>.
              </p>
            </motion.section>

            {/* Section 5 */}
            <motion.section 
              id="attempts"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] border-2 border-[#111111] p-8 shadow-[6px_6px_0px_0px_#111111]"
            >
              <h2 className="font-display text-xl font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3 mb-4">
                5. Delivery Attempts & Doorstep Protocol
              </h2>
              <p className="mb-4">
                Couriers will make up to <strong>two (2) delivery attempts</strong> to your provided delivery address. Before arrival, the dispatch driver will place a phone call to confirm your availability.
              </p>
              <p className="text-xs text-[#555]">
                If delivery fails due to incorrect phone details or recipient unavailability after two attempts, the package will be held at the nearest regional pickup hub for 48 hours before return processing.
              </p>
            </motion.section>

            {/* Section 6 */}
            <motion.section 
              id="customs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] border-2 border-[#111111] p-8 shadow-[6px_6px_0px_0px_#111111]"
            >
              <h2 className="font-display text-xl font-extrabold uppercase text-[#111111] border-b-2 border-[#111111] pb-3 mb-4">
                6. Support & Address Assistance
              </h2>
              <p className="mb-4">
                Entered an incorrect landmark or need to change your delivery address after placing an order? Contact concierge immediately:
              </p>
              <div className="bg-[#F7F4EE] border border-[#111111] p-4 text-xs font-heading font-bold space-y-1">
                <p>Hotline / WhatsApp: +234 (0) 812 117 3432</p>
                <p>Support Email: concierge@madein.ng</p>
              </div>
            </motion.section>

          </div>

        </div>
      </div>

    </div>
  );
};

export default ShippingPolicy;
