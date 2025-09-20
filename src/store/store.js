import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducer/cartReducer";
import productCartReducer from "../reducer/productCartReducer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    productCart: productCartReducer,
  },
});

export default store;
