/* eslint-disable no-unused-vars */
import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const VisionSection = () => {
  return (
    <section className="py-20 bg-[#F7F4EE] text-[#111111] border-b-2 border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#063D2C] text-[#FAF8F3] border-2 border-[#111111] p-8 sm:p-14 shadow-[8px_8px_0px_0px_#111111] relative overflow-hidden"
        >

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Pic 3 Style Editorial Photo Container */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-[4/5] bg-[#F7F4EE] border-4 border-[#FAF8F3] overflow-hidden shadow-2xl">
                <img
                  src={assets.keepitrad}
                  alt="MADEIN Vision & Culture"
                  className="w-full h-full object-cover object-center"
                />

              </div>
            </motion.div>

            {/* Pic 3 Style Vision Headlines & Paragraph */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-7 space-y-6"
            >

              <div className="inline-block bg-[#FAF8F3] text-[#063D2C] px-3.5 py-1 text-xs font-heading font-extrabold uppercase tracking-[0.2em]">
                OUR VISION
              </div>

              <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-[#FAF8F3] leading-[0.95]">
                FOR THE <span className="text-[#E3EDE7] underline decoration-4">CULTURE</span> <br />
                BY THE <span className="text-[#E3EDE7] underline decoration-4">CULTURE</span>
              </h2>

              <p className="font-sans text-sm sm:text-base text-[#E3EDE7] font-medium leading-relaxed max-w-xl">
                Every piece, wig unit, chain earphone, and streetwear garment on MADEIN is crafted from the finest local materials and curated directly from Nigeria's top independent artisans. Our mission is to ensure you enjoy superior quality, authentic deals, and timeless West African craftsmanship every day.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#FAF8F3]/20">
                <div>
                  <p className="font-heading text-2xl font-extrabold text-[#FAF8F3]">100%</p>
                  <p className="font-sans text-xs text-[#E3EDE7] font-medium uppercase">Locally Curated</p>
                </div>
                <div>
                  <p className="font-heading text-2xl font-extrabold text-[#FAF8F3]">Direct</p>
                  <p className="font-sans text-xs text-[#E3EDE7] font-medium uppercase">Vendor Shipping</p>
                </div>
              </div>

            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default VisionSection;
