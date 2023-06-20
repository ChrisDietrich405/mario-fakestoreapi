"use client";

import { DataObjectSharp } from "@mui/icons-material";
import React, { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const hello = "hello Leo";

  useEffect(() => {
    setCartProducts(
      {
        name: "Leo",
        job: "developer",
      },
      {
        name: "Chris",
        job: "teacher",
      }
    );
  }, [cartProducts]);

  // const addToCart = (details) => {
  //   console.log(details);

  // const existingProduct = cartProducts.find(
  //   (product) => product.id === details.id
  // );
  // if (existingProduct) {
  //   existingProduct.count++;
  //   existingProduct.price += details.price;
  //   // const updatedCartProducts = [...cartProducts]
  //   setCartProducts(cartProducts);
  // } else {
  //   const additionalProperties = { count: 1, price: details.price };
  //   const newDetails = { ...details, additionalProperties };
  //   setCartProducts((prevCartProducts) => [...prevCartProducts, newDetails]);
  // }
  // };

  return (
    <MyContext.Provider value={{ hello, cartProducts }}>
      {children}
    </MyContext.Provider>
  );
};
