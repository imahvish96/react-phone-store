import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const {
      id,
      images,
      info,
      price,
      dropPrice,
      title,
      inCart,
    } = this.props.product;
    return (
      <ProductConsumer>
        {(value) => (
          <div className="product-card">
            <div className="ProductBadge">Hot</div>
            <Link to="/Productdetail">
              <div
                className="product-tumb"
                onClick={() => {
                  value.handelDetail(id);
                }}
              >
                <img src={images} alt="" />
              </div>
            </Link>
            <Link to="/productdetail">
              <div className="product-details">
                <h4>{title}</h4>
                <p>{info}</p>
                <div className="product-bottom-details">
                  <div className="product-price">
                    <small>{dropPrice}</small>
                    {price}
                  </div>
                </div>
              </div>
            </Link>
            <div className="product-links">
              <button
                className="addToCart"
                disabled={inCart ? true : false}
                onClick={() => {
                  value.addToCart(id);
                }}
              >
                {inCart ? <span disabled> In Cart </span> : "Add To Cart"}
              </button>
              <button className="viewInfo">View</button>
            </div>
          </div>
        )}
      </ProductConsumer>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    images: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    dropPrice: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
