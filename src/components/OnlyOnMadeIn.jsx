/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import { motion } from "framer-motion";

const OnlyOnMadeIn = () => {
  const { products } = useContext(ShopContext);
  const exclusiveProducts = products.filter((item) => item.exclusive);

  return (
    <section className="py-20 bg-[#063D2C] text-[#FAF8F3] relative overflow-hidden border-b-2 border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#FAF8F3]/20 pb-6"
        >
          <div>
            <div className="inline-flex items-center space-x-1.5 bg-[#FAF8F3] text-[#063D2C] px-3 py-1 text-xs font-heading font-extrabold tracking-widest uppercase mb-2">
              <svg className="w-3.5 h-3.5 text-[#063D2C]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>EXCLUSIVE DROPS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#FAF8F3] uppercase tracking-tight">
              Only Found on MADEIN
            </h2>
          </div>
          <p className="font-sans text-[#E3EDE7] text-xs sm:text-sm font-medium mt-3 md:mt-0 max-w-md">
            Limited drops, bespoke wig units, silver chain earphones, and unique items created exclusively for our platform.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {exclusiveProducts.slice(0, 4).map((item, idx) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <ProductItem
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
                vendor={item.vendor}
                exclusive={item.exclusive}
                condition={item.condition}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to="/collection?exclusive=true"
            className="inline-flex items-center space-x-2 bg-[#FAF8F3] hover:bg-[#EBF2EE] text-[#063D2C] px-8 py-3.5 text-xs font-heading font-extrabold tracking-[0.2em] uppercase transition-all duration-300 border-2 border-[#FAF8F3]"
          >
            <span>VIEW ALL EXCLUSIVES</span>
            <span>→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default OnlyOnMadeIn;
