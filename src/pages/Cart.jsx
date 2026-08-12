/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { products, cartItems, updateQuantity, formatPrice, getCartAmount, delivery_fee } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  const totalAmount = getCartAmount();

  return (
    <div className="bg-[#F7F4EE] text-[#111111] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="border-b-2 border-[#111111] pb-6 mb-8">
          <span className="text-[#063D2C] text-xs font-heading font-extrabold tracking-[0.25em] uppercase">YOUR BAG</span>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#111111] uppercase tracking-tight mt-1">
            Shopping Cart ({cartData.length} items)
          </h1>
        </div>

        {cartData.length === 0 ? (
          <div className="text-center py-24 bg-[#FFFFFF] border-2 border-[#111111] p-8">
            <p className="font-display text-3xl text-[#111111] uppercase mb-3">Your shopping bag is empty</p>
            <p className="font-sans text-xs sm:text-sm font-medium text-[#555] mb-8 max-w-md mx-auto">
              Discover raw lace wigs, handmade crochet, silver chain earphones, and vintage gems from upcoming Nigerian vendors.
            </p>
            <Link
              to="/collection"
              className="bg-[#063D2C] hover:bg-[#042B1F] text-[#FAF8F3] px-9 py-4 text-xs font-heading font-extrabold uppercase tracking-[0.2em] inline-block border-2 border-[#063D2C] shadow-md"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-6">
              {cartData.map((item, index) => {
                const product = products.find((p) => p._id === item._id);
                if (!product) return null;

                return (
                  <div
                    key={index}
                    className="bg-[#FFFFFF] border-2 border-[#111111] p-5 flex flex-col sm:flex-row items-center justify-between gap-6 hover:shadow-[4px_4px_0px_0px_#063D2C] transition-all"
                  >
                    <div className="flex items-center space-x-4 w-full sm:w-auto">
                      <img
                        src={product.image[0]}
                        alt={product.name}
                        className="w-20 h-24 object-contain bg-[#F4F1EA] border border-[#111111]"
                      />
                      <div className="space-y-1">
                        <span className="text-[10px] font-heading font-extrabold text-[#063D2C] tracking-widest uppercase block">
                          {product.vendor}
                        </span>
                        <h3 className="text-sm font-heading font-bold text-[#111111] line-clamp-1">{product.name}</h3>
                        <p className="text-xs font-sans text-[#555] font-medium">Size: {item.size}</p>
                        <p className="font-heading text-sm font-extrabold text-[#063D2C]">
                          {formatPrice(product.price)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 border-[#111111]/20 pt-3 sm:pt-0">
                      <input
                        type="number"
                        min={1}
                        defaultValue={item.quantity}
                        onChange={(e) =>
                          e.target.value === "" || e.target.value === "0"
                            ? null
                            : updateQuantity(item._id, item.size, Number(e.target.value))
                        }
                        className="w-16 bg-[#F7F4EE] border-2 border-[#111111] text-[#111111] text-xs px-2 py-1.5 text-center font-heading font-bold focus:border-[#063D2C] focus:outline-none"
                      />
                      <button
                        onClick={() => updateQuantity(item._id, item.size, 0)}
                        className="text-red-600 hover:text-red-800 text-xs font-heading font-bold uppercase tracking-wider"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Order Summary */}
            <div className="bg-[#FFFFFF] border-2 border-[#111111] p-8 space-y-6 h-fit shadow-[6px_6px_0px_0px_#063D2C]">
              <h2 className="font-display text-xl font-extrabold text-[#111111] uppercase border-b-2 border-[#111111] pb-4">
                Order Summary
              </h2>

              <div className="space-y-3 text-xs font-sans font-medium text-[#333]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold font-heading text-[#111111]">{formatPrice(totalAmount)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Doorstep Delivery (Nigeria)</span>
                  <span className="font-bold font-heading text-[#111111]">{formatPrice(delivery_fee)}</span>
                </div>
                <div className="border-t-2 border-[#111111] pt-3 flex justify-between text-sm font-heading font-extrabold text-[#111111]">
                  <span className="uppercase">Total Due</span>
                  <span className="text-[#063D2C] text-lg">{formatPrice(totalAmount + delivery_fee)}</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/place-order')}
                className="w-full bg-[#063D2C] hover:bg-[#042B1F] text-[#FAF8F3] py-4 text-xs font-heading font-extrabold uppercase tracking-[0.2em] transition-all border-2 border-[#063D2C] shadow-lg"
              >
                Proceed to Secure Checkout
              </button>

              <div className="text-[10px] font-sans font-medium text-[#555] text-center space-y-1 pt-2">
                <p>🔒 Paystack & Flutterwave Escrow Guaranteed</p>
                <p>Direct Vendor Dispatch across Lagos, Abuja & PH</p>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default Cart;
