import React, { Component } from "react";
import Product from "./Product";
import { ProductConsumer } from "../Context";

export default class ProductList extends Component {
  render() {
    return (
      <div className="container">
        <ProductConsumer>
          {(value) => {
            return value.products.map((product) => {
              //console.log(product);
              return <Product product={product} key={product._id} />;
            });
          }}
        </ProductConsumer>
      </div>
    );
  }
}
