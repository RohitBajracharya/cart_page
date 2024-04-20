import React, { useContext } from "react";
import { CheckoutContext } from "../../contexts/CheckoutContext";

const TotalPriceWeight = () => {
  const { totalPrice, totalWeight } = useContext(CheckoutContext);

  return (
    <div className="text-left">
      <h1 className="text-2xl  font-semibold">Total Price: ${totalPrice}</h1>
      <h2 className="text-lg font-medium">Total Weight: {totalWeight}g</h2>
    </div>
  );
};

export default TotalPriceWeight;
