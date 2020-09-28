import React from "react";
import CartItem from "./CartItem";

export default function CartList({ value }) {
  const { cart } = value;
  //console.log(value, cart);
  return (
    <div className="cartTitle">
      {cart.map((item) => {
        return <CartItem kye={item.id} item={item} value={value} />;
      })}
    </div>
  );
}
