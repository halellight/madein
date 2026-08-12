/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShopContext } from "../context/ShopContext";

const CategoryShowcase = () => {
  const { categories } = useContext(ShopContext);

  return (
    <section className="py-16 bg-[#F7F4EE] text-[#111111] border-b-2 border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-10 border-b-2 border-[#111111] pb-4"
        >
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight">
            Browse Categories
          </h2>
          <Link
            to="/collection"
            className="text-xs font-heading font-extrabold tracking-widest text-[#063D2C] hover:underline uppercase flex items-center space-x-1"
          >
            <span>VIEW ALL</span>
            <span>→</span>
          </Link>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Link
                to={`/collection?category=${encodeURIComponent(cat.name)}`}
                className="group relative h-80 overflow-hidden bg-[#FFFFFF] border-2 border-[#111111] flex flex-col justify-end p-5 transition-all duration-300 hover:shadow-[8px_8px_0px_0px_#063D2C] block"
              >
                <div className="absolute inset-0 z-0 bg-[#F4F1EA]">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover object-center opacity-85 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#063D2C] via-[#063D2C]/40 to-transparent"></div>
                </div>

                <div className="relative z-10 text-[#FAF8F3]">
                  <h3 className="font-display text-xl font-extrabold text-[#FAF8F3] uppercase mb-1">
                    {cat.name}
                  </h3>
                  <p className="font-sans text-[#E3EDE7] text-xs font-medium line-clamp-2 mb-3">
                    {cat.description}
                  </p>
                  <div className="inline-flex items-center space-x-2 text-xs font-heading font-extrabold tracking-widest text-[#FAF8F3] group-hover:underline">
                    <span>SHOP NOW</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategoryShowcase;
