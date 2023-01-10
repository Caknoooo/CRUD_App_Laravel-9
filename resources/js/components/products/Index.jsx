import React from "react";
import { useNavigate } from "react-router-dom";

export const Index = () => {
  const navigate = useNavigate();

  const newProduct = () => {
    navigate("/product/new")
  }
  
  return (
    <div className="container">
      <div className="products_list">
        <div className="titlebar">
          <div className="titlebar-item">
            <h1>Products</h1>
          </div>
          <div className="titlebar-item">
            <div className="btn" onClick={() => newProduct()}>
              Add Product
            </div>
          </div>
        </div>

        <div className="table">
          <div className="list_header">
            <p>Image</p>
            <p>Product</p>
            <p>Type</p>
            <p>inventory</p>
            <p>Actions</p>
          </div>

          <div className="list_items">
            <img src="" alt="" height="40px" />
            <a href="">Product Name</a>
            <p>Category</p>
            <p>50</p>
            <div>
              <button className="btn-icon success">
                <i className="fas fa-pencil-alt"></i>
              </button>
              <button className="btn-icon danger">
                <i className="far fa-trash-alt">
                </i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
