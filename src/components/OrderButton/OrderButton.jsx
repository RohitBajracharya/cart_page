import React, { useContext } from "react";
import { CheckoutContext } from "../../contexts/CheckoutContext";
import Popup from "../Popup/Popup";

const OrderButton = () => {
  const { isOpen, closePopup, togglePopup, selectedItems } =
    useContext(CheckoutContext);

  return (
    <div
      className="bg-[#9DB63A] text-white w-32 p-3 text-center rounded-xl hover:bg-[#435400] hover:cursor-pointer"
      onClick={togglePopup}
    >
      <p className="uppercase">Place Order</p>
      {/* displays pop of selected products as package after clicking place order button  */}
      <Popup
        isOpen={isOpen}
        onClose={closePopup}
        selectedItems={selectedItems}
      />
    </div>
  );
};

export default OrderButton;
