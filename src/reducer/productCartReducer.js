import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  totalAmount: 0,
};

const productCartReducer = createSlice({
  name: "productCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (product) => product.id === item.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    updateQuantity: (state, action) => {
      const { id, change } = action.payload;
      const item = state.cartItems.find((product) => product.id === id);

      if (item) {
        item.quantity += change;
      }

      if (item.quantity < 1) {
        item.quantity = 1;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (product) => product.id !== action.payload
      );

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    calculateTotal: (state) => {
      state.totalAmount = state.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, calculateTotal } =
  productCartReducer.actions;

export default productCartReducer.reducer;
