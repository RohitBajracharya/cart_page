import React, { useContext } from "react";
import { CheckoutContext } from "../../contexts/CheckoutContext";
import PackageItem from "../PackageItem/PackageItem";

const Popup = ({ isOpen, onClose }) => {
  const { selectedItems } = useContext(CheckoutContext);

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-[99] ">
          <div className="bg-white p-4 rounded-lg overflow-y-auto max-h-full ">
            <div className="flex justify-between items-center mx-4">
              <h1 className="text-black">Confirm Order</h1>
              <button className="text-black" onClick={onClose}>
                X
              </button>
            </div>
            <hr className="mt-2 mb-4 border-black opacity-55 mx-4" />
            <div>
              {/* display package components displaying item added in a package by customer */}
              <PackageItem selectedItems={selectedItems} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
