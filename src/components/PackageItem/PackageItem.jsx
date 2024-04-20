import React from "react";
import { courier } from "../../data/courier";

const PackageItem = ({ selectedItems }) => {
  // calculates total weight of selected items
  const totalWeight = selectedItems.reduce(
    (total, item) => total + item.weight,
    0
  );

  // calculates total price of selected items
  const totalPrice = selectedItems.reduce(
    (total, item) => total + item.price,
    0
  );

  //retrieve courier charge accoring to total weight of a package.
  const courierCharge = courier(totalWeight);

  return (
    <div className="bg-[#FFF0C9] mx-5 rounded-md p-5 mb-3">
      <div>
        <h1 className="text-black text-left font-semibold">Package 1</h1>
        <hr className="mt-1 border-black border w-[15%]" />
      </div>
      <div className="text-left text-black mt-4">
        <div className="flex items-center mb-3">
          <h3 className="font-light whitespace-nowrap">Total Items:</h3>
          <div className="flex ml-6 flex-wrap gap-1">
            {/* renders item name that are selected by customer*/}
            {selectedItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#FFCD4E] font-semibold p-1 mr-2 rounded-md text-sm"
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center mb-3">
          <h3 className="font-light">Total Weight:</h3>
          <h3 className="ml-3 font-semibold">{totalWeight}g</h3>
        </div>
        <div className="flex items-center mb-3">
          <h3 className="font-light">Total Price:</h3>
          <h3 className="ml-3 font-semibold">${totalPrice}</h3>
        </div>
        <div className="flex items-center">
          <h3 className="font-light">Courier Price:</h3>
          <h3 className="ml-3 font-semibold">${courierCharge}</h3>
        </div>
      </div>
    </div>
  );
};

export default PackageItem;
