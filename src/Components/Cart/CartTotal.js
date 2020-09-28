import React from "react";

export default function CartTotal({ value }) {
  const { totalCart, clearCart, cartSubTotal, cartTax } = value;
  console.log(totalCart);
  return (
    <div class="cartTotalHolder">
      <button className="clearCart" onClick={() => clearCart()}>
        Clear Cart
      </button>

      <div className="totalPriceHolder">
        <h3>
          Sub Total : <span className="fltRight">${cartSubTotal}</span>
        </h3>
        <h3>
          Tax : <span className="fltRight">${cartTax}</span>
        </h3>
        <h3>
          Total : <span className="fltRight">${totalCart}</span>
        </h3>

        <button className="clearCart" onClick={() => {}}>
          Buy Now
        </button>
      </div>
    </div>
  );
}
