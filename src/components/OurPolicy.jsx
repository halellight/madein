/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const OurPolicy = () => {
  const policies = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#063D2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "100% Vetted Local Vendors",
      description: "Every wig maker, clothing designer, optician, and thrift curator is verified for quality and authenticity.",
      link: "/terms",
      linkText: "Read Vendor Terms →",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#063D2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Escrow Payment Security",
      description: "Your funds are securely held in escrow and only released to the vendor upon successful package delivery.",
      link: "/refund-policy",
      linkText: "View Refund & Escrow Policy →",
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#063D2C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fast Nationwide Dispatch",
      description: "Express doorstep delivery to all locations across Lagos, Abuja, Port Harcourt, and every state in Nigeria.",
      link: "/shipping-policy",
      linkText: "View Shipping Timelines →",
    },
  ];

  return (
    <section className="py-16 bg-[#F7F4EE] text-[#111111] border-b-2 border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {policies.map((policy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="p-6 bg-[#FFFFFF] border-2 border-[#111111] flex flex-col justify-between items-center hover:shadow-[8px_8px_0px_0px_#063D2C] transition-all duration-300 group"
            >
              <div className="flex flex-col items-center">
                <div className="mb-4 transform group-hover:scale-110 transition-transform">{policy.icon}</div>
                <h3 className="font-heading text-base font-bold text-[#111111] uppercase mb-2">
                  {policy.title}
                </h3>
                <p className="font-sans text-[#555555] text-xs font-medium leading-relaxed mb-4">
                  {policy.description}
                </p>
              </div>

              <Link
                to={policy.link}
                className="inline-block mt-2 font-heading font-extrabold text-[11px] uppercase tracking-wider text-[#063D2C] hover:underline"
              >
                {policy.linkText}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPolicy;
