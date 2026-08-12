/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex items-center space-x-3">
      <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-[#111111] uppercase tracking-tight">
        {text1} <span className="text-[#063D2C]">{text2}</span>
      </h3>
      <span className="w-12 h-1 bg-[#063D2C] hidden sm:inline-block"></span>
    </div>
  );
};

export default Title;
