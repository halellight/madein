/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const { formatPrice, getCartAmount, delivery_fee } = useContext(ShopContext);
  const [method, setMethod] = useState("paystack");
  const navigate = useNavigate();

  const totalAmount = getCartAmount();

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    navigate("/orders");
  };

  return (
    <div className="bg-[#F7F4EE] text-[#111111] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Delivery Form */}
          <div className="lg:col-span-2 space-y-6">
            <div className="border-b-2 border-[#111111] pb-4">
              <span className="text-[#063D2C] text-xs font-heading font-extrabold tracking-[0.25em] uppercase">CHECKOUT</span>
              <h1 className="font-display text-3xl font-extrabold text-[#111111] uppercase tracking-tight mt-1">
                Delivery Address
              </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#111] mb-1">First Name</label>
                <input required type="text" placeholder="Adebayo" className="w-full bg-[#FFFFFF] border-2 border-[#111111] text-[#111] text-xs px-4 py-3 font-heading font-medium focus:border-[#063D2C] focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#111] mb-1">Last Name</label>
                <input required type="text" placeholder="Okonkwo" className="w-full bg-[#FFFFFF] border-2 border-[#111111] text-[#111] text-xs px-4 py-3 font-heading font-medium focus:border-[#063D2C] focus:outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#111] mb-1">Email Address</label>
              <input required type="email" placeholder="adebayo@example.com" className="w-full bg-[#FFFFFF] border-2 border-[#111111] text-[#111] text-xs px-4 py-3 font-heading font-medium focus:border-[#063D2C] focus:outline-none" />
            </div>

            <div>
              <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#111] mb-1">Street Address</label>
              <input required type="text" placeholder="Plot 14 Admiralty Way, Lekki Phase 1" className="w-full bg-[#FFFFFF] border-2 border-[#111111] text-[#111] text-xs px-4 py-3 font-heading font-medium focus:border-[#063D2C] focus:outline-none" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#111] mb-1">City</label>
                <input required type="text" placeholder="Lagos / Abuja" className="w-full bg-[#FFFFFF] border-2 border-[#111111] text-[#111] text-xs px-4 py-3 font-heading font-medium focus:border-[#063D2C] focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#111] mb-1">State</label>
                <input required type="text" placeholder="Lagos State" className="w-full bg-[#FFFFFF] border-2 border-[#111111] text-[#111] text-xs px-4 py-3 font-heading font-medium focus:border-[#063D2C] focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#111] mb-1">Phone Number</label>
                <input required type="tel" placeholder="+234 812 345 6789" className="w-full bg-[#FFFFFF] border-2 border-[#111111] text-[#111] text-xs px-4 py-3 font-heading font-medium focus:border-[#063D2C] focus:outline-none" />
              </div>
            </div>
          </div>

          {/* Summary & Payment */}
          <div className="space-y-6">
            <div className="bg-[#FFFFFF] border-2 border-[#111111] p-6 space-y-6 shadow-[6px_6px_0px_0px_#063D2C]">
              <h2 className="font-display text-lg font-extrabold text-[#111111] uppercase border-b-2 border-[#111111] pb-4">
                Cart Total
              </h2>

              <div className="space-y-2 text-xs font-sans font-medium text-[#333]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold font-heading text-[#111111]">{formatPrice(totalAmount)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Express Shipping (Doorstep)</span>
                  <span className="font-bold font-heading text-[#111111]">{formatPrice(delivery_fee)}</span>
                </div>
                <div className="border-t-2 border-[#111111] pt-3 flex justify-between text-sm font-heading font-extrabold text-[#111111]">
                  <span>Total Due</span>
                  <span className="text-[#063D2C] text-lg">{formatPrice(totalAmount + delivery_fee)}</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="pt-4 border-t-2 border-[#111111] space-y-3">
                <h3 className="font-heading text-xs font-extrabold text-[#063D2C] uppercase tracking-wider">
                  Payment Gateway
                </h3>
                
                <div
                  onClick={() => setMethod("paystack")}
                  className={`p-3.5 border-2 cursor-pointer flex items-center justify-between transition-all ${
                    method === "paystack" ? "border-[#063D2C] bg-[#E3EDE7]" : "border-[#111111] hover:bg-[#F7F4EE]"
                  }`}
                >
                  <span className="text-xs font-heading font-bold text-[#111111]">Paystack (Card, Transfer, USSD)</span>
                  <span className="text-[10px] font-heading font-extrabold text-[#063D2C]">Instant</span>
                </div>

                <div
                  onClick={() => setMethod("flutterwave")}
                  className={`p-3.5 border-2 cursor-pointer flex items-center justify-between transition-all ${
                    method === "flutterwave" ? "border-[#063D2C] bg-[#E3EDE7]" : "border-[#111111] hover:bg-[#F7F4EE]"
                  }`}
                >
                  <span className="text-xs font-heading font-bold text-[#111111]">Flutterwave / Transfer</span>
                  <span className="text-[10px] font-heading font-bold text-[#555]">Escrow</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#063D2C] hover:bg-[#042B1F] text-[#FAF8F3] py-4 text-xs font-heading font-extrabold uppercase tracking-[0.2em] transition-all border-2 border-[#063D2C] shadow-lg"
              >
                Pay Now ({formatPrice(totalAmount + delivery_fee)})
              </button>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
};

export default PlaceOrder;
