import React, { Component } from "react";
import { ProductInfo, detailProduct } from "./Data/Data";

const ProductContext = React.createContext();
const ProductConsumer = ProductContext.Consumer;

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    totalCart: 0,
  };

  componentDidMount() {
    this.setProduct();
  }

  setProduct = () => {
    let temProducts = [];
    ProductInfo.forEach((items) => {
      console.log(temProducts);
      const singleItem = { ...items };
      temProducts = [...temProducts, singleItem];
    });
    this.setState(() => {
      return { products: temProducts };
    });
  };

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
    console.log(product);
  };

  handelDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
    //console.log(this.state.detailProduct);
  };

  addToCart = (id) => {
    let tempProduct = [...this.state.products];
    const index = tempProduct.indexOf(this.getItem(id));
    const product = tempProduct[index];
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return { products: tempProduct, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotal();
      }
    );
    //console.log(`hello from addtoCart ${id}`);
  };

  increment = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
        };
      },
      () => {
        this.addTotal();
      }
    );
  };

  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;

    if (product.count === 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return {
            cart: [...tempCart],
          };
        },
        () => {
          this.addTotal();
        }
      );
    }
  };

  removeItem = (id) => {
    let tempProduct = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id != id);
    const index = tempProduct.indexOf(this.getItem(id));
    let removedProduct = tempProduct[index];
    removedProduct.count = 0;
    removedProduct.total = 0;
    this.setState(
      () => {
        return {
          cart: [...tempCart],
          products: [...tempProduct],
        };
      },
      () => {
        this.addTotal();
      }
    );
  };

  clearCart = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProduct();
      }
    );
  };

  addTotal = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        totalCart: total,
      };
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handelDetail: this.handelDetail,
          addToCart: this.addToCart,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export { ProductProvider, ProductConsumer };
