/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign In");
  const [userRole, setUserRole] = useState("buyer");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="bg-[#F7F4EE] text-[#111111] min-h-screen py-16 flex items-center justify-center">
      <div className="w-full max-w-md mx-auto px-4">
        
        <form
          onSubmit={onSubmitHandler}
          className="bg-[#FFFFFF] border-2 border-[#111111] p-8 space-y-6 shadow-[8px_8px_0px_0px_#063D2C]"
        >
          {/* Header */}
          <div className="text-center space-y-2">
            <span className="font-display font-extrabold text-3xl tracking-tighter text-[#111111]">
              MADE<span className="text-[#063D2C]">IN</span>
            </span>
            <h2 className="font-heading text-xl font-bold uppercase tracking-tight text-[#111111]">
              {currentState}
            </h2>
            <p className="text-xs font-sans font-medium text-[#555]">
              Access your orders, saved vendors, or brand dashboard.
            </p>
          </div>

          {/* Role selector */}
          <div className="grid grid-cols-2 gap-2 bg-[#F7F4EE] p-1 border-2 border-[#111111]">
            <button
              type="button"
              onClick={() => setUserRole("buyer")}
              className={`py-2 text-xs font-heading font-extrabold uppercase tracking-wider transition-colors ${
                userRole === "buyer" ? "bg-[#063D2C] text-[#FAF8F3]" : "text-[#555] hover:text-[#111]"
              }`}
            >
              Shopper
            </button>
            <button
              type="button"
              onClick={() => setUserRole("vendor")}
              className={`py-2 text-xs font-heading font-extrabold uppercase tracking-wider transition-colors ${
                userRole === "vendor" ? "bg-[#063D2C] text-[#FAF8F3]" : "text-[#555] hover:text-[#111]"
              }`}
            >
              Vendor Portal
            </button>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            {currentState === "Sign Up" && (
              <div>
                <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#111] mb-1">
                  {userRole === "vendor" ? "Brand / Business Name" : "Full Name"}
                </label>
                <input
                  type="text"
                  required
                  placeholder={userRole === "vendor" ? "e.g. Watashi Studio" : "e.g. Praise Adebayo"}
                  className="w-full bg-[#FAF8F5] border-2 border-[#111111] text-[#111] text-xs px-4 py-3 font-heading font-medium focus:outline-none focus:border-[#063D2C]"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#111] mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                placeholder="yourname@domain.com"
                className="w-full bg-[#FAF8F5] border-2 border-[#111111] text-[#111] text-xs px-4 py-3 font-heading font-medium focus:outline-none focus:border-[#063D2C]"
              />
            </div>

            <div>
              <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#111] mb-1">
                Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full bg-[#FAF8F5] border-2 border-[#111111] text-[#111] text-xs px-4 py-3 font-heading font-medium focus:outline-none focus:border-[#063D2C]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#063D2C] hover:bg-[#042B1F] text-[#FAF8F3] py-4 text-xs font-heading font-extrabold uppercase tracking-[0.2em] transition-all border-2 border-[#063D2C] shadow-md"
          >
            {currentState === "Sign In" ? "Sign In to Account" : "Create Account"}
          </button>

          <div className="flex items-center justify-between text-xs font-heading font-bold text-[#555] pt-2">
            <span className="hover:text-[#063D2C] cursor-pointer">Forgot Password?</span>
            {currentState === "Sign In" ? (
              <span
                onClick={() => setCurrentState("Sign Up")}
                className="text-[#063D2C] font-extrabold cursor-pointer hover:underline"
              >
                Register →
              </span>
            ) : (
              <span
                onClick={() => setCurrentState("Sign In")}
                className="text-[#063D2C] font-extrabold cursor-pointer hover:underline"
              >
                Sign In →
              </span>
            )}
          </div>
        </form>

      </div>
    </div>
  );
};

export default Login;
