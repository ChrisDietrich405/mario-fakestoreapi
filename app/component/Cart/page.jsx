import React from "react";
import { useContext } from "react";

import { MyContext } from "@/ContextAPI";

const Cart = async () => {
  const { hello } = useContext(MyContext);

  return (
    <div>
      <h1>{hello}</h1>
      {cartProducts.map((product) => {
        return (
          <>
            <h1>{product}</h1>
          </>
        );
      })}
    </div>
  );
};

export default Cart;
