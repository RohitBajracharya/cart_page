import React from "react";
import OrderButton from "../../components/OrderButton/OrderButton";
import ProductItem from "../../components/ProductItem/ProductItem";
import TotalPriceWeight from "../../components/TotalPriceWeight/TotalPriceWeight";
import { CheckoutProvider } from "../../contexts/CheckoutContext";
import { products } from "../../data/product";

const Checkout = () => {
  return (
    <CheckoutProvider>
      {/* fixed footer showing total price & weight and orderplace button */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#FFF0C9] shadow-md py-3 px-6 z-10 h-20 flex justify-between items-center">
        <TotalPriceWeight />
        <OrderButton />
      </div>
      <div>
        <h1 className="text-4xl font-semibold text-left uppercase">
          Product Listings
        </h1>
        <h2 className="text-2xl text-left font-thin">
          Make your selection here
        </h2>
        <div className="py-3">
          <div className="bg-[#FFF0C9] flex justify-between font-bold text-lg px-10 py-6 rounded-xl gap-x-2">
            <p>Items</p>
            <p>Price</p>
            <p>Weight (gram)</p>
            <p>Select</p>
          </div>
          <div className="mb-24">
            {/* render product item from products data */}
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </CheckoutProvider>
  );
};

export default Checkout;
