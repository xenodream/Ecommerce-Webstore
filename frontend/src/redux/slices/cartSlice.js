import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let existItem = state.cart.find((item) => item.id === action.payload.id);

      if (existItem) {
        let filteredArray = state.cart.filter(
          (item) => item.id === existItem.id
        );

        const itemIsExistinginArray = filteredArray.find(
          (item) => item.size === action.payload.size
        );

        if (itemIsExistinginArray === undefined) {
          state.cart = [...state.cart, action.payload];
        }
      } else {
        state.cart = [...state.cart, action.payload];
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    changeQuantity: (state, action) => {
      if (action.payload.type === "increment") {
        const itemToIncrement = state.cart.filter(
          ({ id, size }) =>
            id === action.payload.cartId && action.payload.itemSize === size
        );

        //changing quantity of the specitic element in state.cart
        if (itemToIncrement[0].quantity <= itemToIncrement[0].inStock - 1) {
          itemToIncrement[0].quantity = itemToIncrement[0].quantity + 1;
        }
      } else if (action.payload.type === "decrement") {
        const itemToIncrement = state.cart.filter(
          ({ id, size }) =>
            id === action.payload.cartId && action.payload.itemSize === size
        );

        //delete an item from the cart if the quantity of element == 0
        if (itemToIncrement[0].quantity <= 1) {
          state.cart = state.cart.filter(
            (item) =>
              !(
                item.id === action.payload.cartId &&
                item.size === action.payload.itemSize
              )
          );
        } else {
          //changing quantity of the specitic element in state.cart
          itemToIncrement[0].quantity = itemToIncrement[0].quantity - 1;
        }
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart: (state, action) => {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, changeQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
