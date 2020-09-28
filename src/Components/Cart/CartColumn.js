import React from "react";

export default function CartColumn() {
  return (
    <div>
      <div className="cartTitle">
        <div className="cartColoumn">
          <span>Product</span>
        </div>
        <div className="cartColoumn">
          <span>Name of Product</span>
        </div>
        <div className="cartColoumn">
          <span>Price</span>
        </div>
        <div className="cartColoumn">
          <span>Quantity</span>
        </div>
        <div className="cartColoumn">
          <span>Remove</span>
        </div>
        <div className="cartColoumn">
          <span>Total</span>
        </div>
      </div>
    </div>
  );
}
