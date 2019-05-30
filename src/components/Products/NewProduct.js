import React from "react";
import { connect } from "react-redux";
import { saveNewProduct } from "../../ducks/products";
import ProductForm from "./ProductForm";
import "./NewProduct.css";
class NewProduct extends React.Component {
  render() {
    return (
      <div className="NewProduct">
        <h1 className="NewProductName">New product</h1>
        <ProductForm
          product={{ name: "", description: "" }}
          saveProduct={this.props.saveNewProduct}
        />
      </div>
    );
  }
}

export default connect(
  null,
  {
    saveNewProduct,

  }
)(NewProduct);
