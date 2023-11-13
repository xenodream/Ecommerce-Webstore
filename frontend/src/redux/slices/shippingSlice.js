import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shipping: localStorage.getItem("shipping")
    ? JSON.parse(localStorage.getItem("shipping"))
    : null,
};
const shippingSlice = createSlice({
  name: "shipping",
  initialState,
  reducers: {
    setShipping: (state, action) => {
      state.shipping = action.payload;
      localStorage.setItem("shipping", JSON.stringify(action.payload));
    },
  },
});

export const { setShipping } = shippingSlice.actions;

export default shippingSlice.reducer;
