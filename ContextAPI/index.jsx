"use client";

import React, { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(["hello", "bye", "food"]);

  const hello = "hello Leo"

  const addToCart = (details) => {
    console.log(cartProducts);
    
    // const existingProduct = cartProducts.find(
    //   (product) => product.id === details.id
    // );
    // if (existingProduct) {
    //     existingProduct.count++
    //     existingProduct.price+=details.price
    //     // const updatedCartProducts = [...cartProducts]
    //     setCartProducts(cartProducts)
    // } else {
    //   const additionalProperties = { count: 1, price: details.price };
    //   const newDetails = { ...details, additionalProperties };
    //   setCartProducts((prevCartProducts) => [...prevCartProducts, newDetails]);
    // }
  };

  return (
    <MyContext.Provider value={{ addToCart, cartProducts, hello }}>
      {children}
    </MyContext.Provider>
  );
};
