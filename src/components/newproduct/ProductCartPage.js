import react, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateQuantity,
  removeFromCart,
  calculateTotal,
} from "../../reducer/productCartReducer";

const ProductCartPage = () => {
  const dispatch = useDispatch();
  const { cartItems, totalAmount } = useSelector((state) => state.productCart);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);

  return (
    <div>
      <div className="container mt-0">
        <h1>CART PAGE ({cartItems.length})</h1>
        {cartItems.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <ul className="list-group mb-3">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <div>
                    <img
                      src={item.img}
                      className="card-img-top"
                      alt={item.name}
                      style={{ width: "100px" }}
                    />
                    <h5 className="text-center">{item.name}</h5>
                  </div>
                  <div>
                    <button
                      className="btn btn-sm btn-secondary me-2"
                      onClick={() =>
                        dispatch(updateQuantity({ id: item.id, change: +1 }))
                      }
                    >
                      +
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-secondary ms-2"
                      onClick={() =>
                        dispatch(updateQuantity({ id: item.id, change: -1 }))
                      }
                    >
                      -
                    </button>
                  </div>
                </div>
                <div>
                  <p>₹{item.price * item.quantity}</p>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <h4>Total: ₹{totalAmount}</h4>
      </div>
    </div>
  );
};

export default ProductCartPage;
