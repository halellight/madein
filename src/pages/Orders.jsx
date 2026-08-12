/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Orders = () => {
  const { products, formatPrice } = useContext(ShopContext);

  const mockOrders = [
    {
      ...products[0],
      quantity: 1,
      size: "One Size",
      status: "In Transit with GIG Logistics",
      date: "Aug 08, 2026",
      orderId: "MDN-2026-8891",
    },
    {
      ...products[1],
      quantity: 1,
      size: "M",
      status: "Vendor Dispatch Complete",
      date: "Aug 05, 2026",
      orderId: "MDN-2026-7734",
    },
  ];

  return (
    <div className="bg-[#F7F4EE] text-[#111111] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="border-b-2 border-[#111111] pb-6 mb-8">
          <span className="text-[#063D2C] text-xs font-heading font-extrabold tracking-[0.25em] uppercase">MY ACCOUNT</span>
          <h1 className="font-display text-3xl font-extrabold text-[#111111] uppercase tracking-tight mt-1">
            Order History & Dispatch Tracking
          </h1>
        </div>

        <div className="space-y-6">
          {mockOrders.map((order, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] border-2 border-[#111111] p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-[4px_4px_0px_0px_#063D2C] transition-all"
            >
              <div className="flex items-center space-x-4 w-full md:w-auto">
                <img
                  src={order.image[0]}
                  alt={order.name}
                  className="w-20 h-24 object-contain bg-[#F4F1EA] border border-[#111111]"
                />
                <div className="space-y-1">
                  <span className="text-[10px] font-heading font-extrabold text-[#063D2C] tracking-widest uppercase block">
                    {order.vendor}
                  </span>
                  <h3 className="text-sm font-heading font-bold text-[#111111] line-clamp-1">{order.name}</h3>
                  <p className="text-xs font-sans text-[#555] font-medium">Order ID: {order.orderId} • Date: {order.date}</p>
                  <p className="font-heading text-sm font-extrabold text-[#063D2C]">
                    {formatPrice(order.price)}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6 w-full md:w-auto justify-between border-t md:border-t-0 border-[#111111]/20 pt-3 md:pt-0">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#063D2C] animate-pulse"></span>
                  <span className="text-xs font-heading font-bold text-[#111111]">{order.status}</span>
                </div>

                <button className="border-2 border-[#063D2C] text-[#063D2C] hover:bg-[#063D2C] hover:text-[#FAF8F3] px-4 py-2 text-xs font-heading font-extrabold uppercase tracking-wider transition-all">
                  Track Parcel
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Orders;
