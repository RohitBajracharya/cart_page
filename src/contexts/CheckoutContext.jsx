import React, { createContext, useContext, useState } from "react";

export const CheckoutContext = createContext({});

export const useCheckout = () => {
  return useContext(CheckoutContext);
};

export const CheckoutProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalWeight, setTotalWeight] = useState(0);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  /* this function add items to package and also updates total price and total weight  */
  const addProductToList = (product) => {
    setSelectedItems([...selectedItems, product]);
    setTotalPrice((totalPrice) => totalPrice + product.price);
    setTotalWeight((totalWeight) => totalWeight + product.weight);
  };

  /* this function remove item from package and also reduce corresponding weight and price from total */
  const removeProductFromList = (productId) => {
    //finds remove product detail according to item id
    const removedProduct = selectedItems.find(
      (product) => product.id === productId
    );

    if (removedProduct) {
      setSelectedItems(
        selectedItems.filter((product) => product.id !== productId)
      );
      setTotalPrice((totalPrice) => totalPrice - removedProduct.price);
      setTotalWeight((totalWeight) => totalWeight - removedProduct.weight);
    }
  };

  /* this function decides whether to add or delete item in a package according to checbox status */
  const handleSelectedItem = (selectedProduct, isChecked) => {
    if (isChecked) {
      addProductToList(selectedProduct);
    } else {
      removeProductFromList(selectedProduct.id);
    }
  };

  const distributePackage = (product) => {
    /*
    1. checks if total price is >$250
    2. if true then form new product array as product=[{},{}]
    3. the items added after total price 250 is added as new object
    4. render one object from array as one package and 2nd object as 2nd package
    */
  };

  const value = {
    selectedItems,
    isOpen,
    totalPrice,
    totalWeight,
    togglePopup,
    closePopup,
    handleSelectedItem,
  };

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
};
