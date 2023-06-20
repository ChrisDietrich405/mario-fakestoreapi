"use client";

import React from "react";
import { useContext } from "react";
import { MyContext } from "@/ContextAPI";

const Cart = async () => {
  const { hello, cartProducts } = useContext(MyContext);
  return (
    <div>
      <h1>{hello}</h1>
      {cartProducts.map((product) => {
        return (
          <>
            <h1>{product.name}</h1>
          </>
        );
      })}
    </div>
  );
};

export default Cart;
