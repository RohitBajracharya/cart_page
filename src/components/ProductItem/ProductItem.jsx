import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { CheckoutContext } from "../../contexts/CheckoutContext";

const ProductItem = ({ product }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { totalPrice, handleSelectedItem } = useContext(CheckoutContext);

  // function that handles checkbox for not letting user select items more than $250price
  const handleCheckboxChange = () => {
    if (isChecked) {
      setIsChecked(false);
      handleSelectedItem(product, false);
    } else {
      if (totalPrice + product.price > 250) {
        toast.error("Total cost cannot exceed $250");
      } else {
        setIsChecked(true);
        handleSelectedItem(product, true);
      }
    }
  };

  return (
    <div className="border border-[black] border-opacity-10 m-2 rounded-xl h-20 flex items-center justify-between gap-3 hover:bg-[#FFF0C9] hover:cursor-pointer px-10 py-6 text-left">
      <p>{product.name}</p>
      <p>${product.price}</p>
      <p>{product.weight}g</p>
      <input
        type="checkbox"
        className="text-[#65C339] border-[#65C339] focus:ring-[#65C339] rounded"
        checked={isChecked}
        name="selectedItem"
        onChange={handleCheckboxChange}
      />
    </div>
  );
};

export default ProductItem;
