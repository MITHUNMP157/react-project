import React from "react";
import productsList from "../../products/productsList";
import { useDispatch } from "react-redux";
import { addToCart, calculateTotal } from "../../reducer/productCartReducer";

const Products = () => {
  const dispatch = useDispatch();

  const handleCartToAdd = (product) => {
    dispatch(addToCart(product));
    dispatch(calculateTotal());
  };

  return (
    <div className="container">
      <h1 className="text-center">PRODUCT ITEMS</h1>
      <div className="row mt-2">
        {productsList.map((product) => (
          <div
            key={product.id}
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
          >
            <div className="card h-100 d-flex align-items-center">
              <img
                src={product.img}
                className="card-img-top"
                alt={product.name}
                style={{ width: "100px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">₹{product.price}</p>
                <button
                  className="btn btn-warning"
                  onClick={() => handleCartToAdd(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
