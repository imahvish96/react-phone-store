import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { detailProduct } from "../Data/Data";
import { Link } from "react-router-dom";

export default class Productdetail extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            title,
            info,
            images,
            inCart,
            price,
          } = value.detailProduct;
          return (
            <div className="container">
              <div className="imagePrev">
                <img src={images} alt="" />
              </div>
              <div className="productInfo">
                <h1>Model : {title}</h1>
                <h1>Description : {info}</h1>
                <h1>Price : {price}</h1>
                <div className="btnArea">
                  <button className="viewInfo">Buy Now</button>
                  <button
                    className="addToCart"
                    className="addToCart"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                    }}
                  >
                    {inCart ? <span disabled> In Cart </span> : "Add To Cart"}
                  </button>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
