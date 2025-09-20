import react, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems, totalAmount } = useSelector((state) => state.productCart);

  useEffect(() => {
    dispatch();
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
                    <button className="btn btn-sm btn-secondary me-2">+</button>
                    <span>{}</span>
                    <button className="btn btn-sm btn-secondary ms-2">-</button>
                  </div>
                </div>
                <div>
                  <p>₹{}</p>
                  <button>Remove</button>
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

export default CartPage;
