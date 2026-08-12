/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { motion } from "framer-motion";

const VendorSpotlight = () => {
  const { vendors } = useContext(ShopContext);

  return (
    <section className="py-16 bg-[#F7F4EE] text-[#111111] border-b-2 border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-10 border-b-2 border-[#111111] pb-4"
        >
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight uppercase">
            Spotlight
          </h2>
          <Link
            to="/collection"
            className="text-xs font-heading font-extrabold tracking-widest text-[#063D2C] hover:underline uppercase flex items-center space-x-1"
          >
            <span>VIEW ALL</span>
            <span>→</span>
          </Link>
        </motion.div>

        {/* Vendor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vendors.slice(0, 3).map((vendor, idx) => (
            <motion.div
              key={vendor._id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              whileHover={{ y: -6 }}
              className="bg-[#FFFFFF] border-2 border-[#111111] p-6 flex flex-col justify-between hover:shadow-[8px_8px_0px_0px_#063D2C] transition-all duration-300 group"
            >
              <div>
                {/* Vendor Image */}
                <div className="relative h-52 mb-5 overflow-hidden bg-[#F4F1EA] border border-[#111111]">
                  <img
                    src={vendor.image}
                    alt={vendor.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#063D2C] text-[#FAF8F3] px-2.5 py-1 text-[10px] font-heading font-extrabold uppercase tracking-wider flex items-center space-x-1">
                    <svg className="w-3 h-3 text-[#FAF8F3]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>VERIFIED BRAND</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-heading font-bold text-[#555]">{vendor.location}</span>
                  <span className="text-xs font-heading font-extrabold text-[#063D2C]">★ {vendor.rating}</span>
                </div>

                <h3 className="font-display text-xl font-extrabold text-[#111111] mb-1 group-hover:text-[#063D2C] transition-colors uppercase">
                  {vendor.name}
                </h3>
                <p className="text-[#063D2C] text-xs font-heading font-bold mb-2">{vendor.tagline}</p>
                <p className="font-sans text-[#555] text-xs font-medium leading-relaxed mb-5">
                  {vendor.story}
                </p>
              </div>

              <Link
                to={`/collection?vendor=${encodeURIComponent(vendor.name)}`}
                className="w-full py-3 bg-[#063D2C] hover:bg-[#042B1F] text-[#FAF8F3] text-xs font-heading font-bold tracking-widest uppercase text-center transition-all duration-300 block border-2 border-[#063D2C]"
              >
                View Storefront ({vendor.exclusiveCount} Exclusives)
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VendorSpotlight;
