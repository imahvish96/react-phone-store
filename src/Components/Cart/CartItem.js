import React from "react";

export default function CartItem({ item, value }) {
  const { id, images, price, total, count, title } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="app">
      <div className="imagesHolderCart">
        <img src={images} />
      </div>
      <div className="productName">
        <p>{title}</p>
      </div>
      <div className="productName">
        <p>{price}</p>
      </div>
      <div className="quantity">
        <div className="qtyBtn">
          <div className="ps" onClick={() => increment(id)}>
            +
          </div>
          <div className="ps"> {count} </div>
          <div className="ps" onClick={() => decrement(id)}>
            -
          </div>
        </div>
      </div>
      <div className="productName">
        <button
          onClick={() => {
            removeItem(id);
          }}
        >
          Remove
        </button>
      </div>

      <div className="productName">
        <p>$ {total}</p>
      </div>
    </div>
  );
}
