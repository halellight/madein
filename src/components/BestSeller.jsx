/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 4));
  }, [products]);

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
            Trending Drops
          </h2>
          <Link
            to="/collection"
            className="text-xs font-heading font-extrabold tracking-widest text-[#063D2C] hover:underline uppercase flex items-center space-x-1"
          >
            <span>DISCOVER MORE</span>
            <span>→</span>
          </Link>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSeller.map((item, idx) => (
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

      </div>
    </section>
  );
};

export default BestSeller;
