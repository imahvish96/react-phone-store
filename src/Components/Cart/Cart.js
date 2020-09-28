import React, { Component } from "react";
import { ProductConsumer } from "../../Context";
import CartColumn from "./CartColumn";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <>
                  <CartColumn />
                  <CartList value={value} />
                  <CartTotal value={value} />
                </>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
