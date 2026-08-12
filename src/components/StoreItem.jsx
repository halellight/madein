// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

// eslint-disable-next-line react/prop-types
const StoreItem = ({ image, id, name }) => {
  //   const { currency } = useContext(StoreContext);
  const { price } = useContext(StoreContext);
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/store/${id}`}>
      <div className="overflow-hidden">
        <img
          src={image[0]}
          className="hover:scale-110 transition ease-in-out"
          alt="pictures"
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      {/* <p className="text-sm font-medium">
        {currency}
        
      </p> */}
      <p className="text-sm font-medium">{price}</p>
    </Link>
  );
};

export default StoreItem;
