import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: JSON.parse(localStorage.getItem("carts")) || [],
  },
  reducers: {
    addToCart(state, action) {
      let index = state.value.findIndex((el) => el.id === action.payload.id);
      if (index < 0) {
        state.value = [...state.value, { ...action.payload, quantity: 1 }];
      }
      localStorage.setItem("carts", JSON.stringify(state.value));
    },
    incCart(state, action) {
      let index = state.value.findIndex((el) => el.id == action.payload.id);
      state.value = state.value.map((pr, i) => {
        if (index === i) {
          return { ...pr, quantity: pr.quantity + 1 };
        } else {
          return pr;
        }
      });
      localStorage.setItem("carts", JSON.stringify(state.value));
    },
    decCart(state, action) {
      let index = state.value.findIndex((el) => el.id == action.payload.id);
      state.value = state.value.map((pr, i) => {
        if (index === i) {
          return { ...pr, quantity: pr.quantity - 1 };
        } else {
          return pr;
        }
      });
      localStorage.setItem("carts", JSON.stringify(state.value));
    },
    removeFromCart(state, action) {
      state.value = state.value.filter(
        (product) => product.id !== action.payload.id
      );
      localStorage.setItem("carts", JSON.stringify(state.value));
    },
    clearCart(state) {
      state.value = [];
      localStorage.setItem("carts", JSON.stringify(state.value));
    },
  },
});

export const { addToCart, incCart, decCart, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
