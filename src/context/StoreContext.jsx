/* eslint-disable react/prop-types */
import { createContext } from "react";
import { stores } from "../assets/assets";

// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext = createContext();

const StoreContextProvider = (props) => {
  const currency = "₦";
  const delivery_fee = 10;

  const value = {
    stores,
    currency,
    delivery_fee,
  };

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
