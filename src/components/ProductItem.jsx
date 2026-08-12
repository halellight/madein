/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShopContext } from "../context/ShopContext";

const ProductItem = ({ image, id, name, price, vendor, exclusive, condition }) => {
  const { formatPrice } = useContext(ShopContext);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Link
        to={`/product/${id}`}
        className="group bg-[#FFFFFF] border-2 border-[#111111] hover:shadow-[8px_8px_0px_0px_#063D2C] transition-all duration-300 flex flex-col justify-between overflow-hidden h-full block"
      >
        {/* Image Box */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F4F1EA] border-b-2 border-[#111111]">
          <img
            src={image[0]}
            alt={name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          
          {/* Only on MADEIN Ribbon */}
          {exclusive && (
            <div className="absolute top-2 left-2 bg-[#063D2C] text-[#FAF8F3] text-[9px] font-heading font-extrabold px-2.5 py-1 tracking-widest uppercase border border-[#FAF8F3]/20 shadow-sm flex items-center space-x-1">
              <svg className="w-2.5 h-2.5 text-[#FAF8F3]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>ONLY ON MADEIN</span>
            </div>
          )}

          {/* Condition Badge */}
          {condition && (
            <div className="absolute bottom-2 right-2 bg-[#111111] text-[#FAF8F3] text-[9px] font-heading font-bold px-2 py-0.5 uppercase tracking-wider">
              {condition}
            </div>
          )}
        </div>

        {/* Details Box */}
        <div className="p-4 flex flex-col flex-1 justify-between bg-[#FFFFFF]">
          <div>
            {/* Vendor Name */}
            <span className="text-[10px] font-heading font-extrabold text-[#063D2C] tracking-widest uppercase block mb-1">
              {vendor || "VENDOR"}
            </span>

            {/* Product Name */}
            <h4 className="font-heading text-xs font-bold text-[#111111] group-hover:text-[#063D2C] transition-colors leading-snug line-clamp-2 mb-3">
              {name}
            </h4>
          </div>

          {/* Price & Action */}
          <div className="pt-3 border-t border-[#E2DDD3] flex items-center justify-between">
            <span className="font-heading font-extrabold text-sm text-[#063D2C]">
              {formatPrice(price)}
            </span>
            <span className="text-[10px] font-heading font-extrabold text-[#111111] group-hover:text-[#063D2C] transition-colors uppercase">
              VIEW ITEM →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductItem;
