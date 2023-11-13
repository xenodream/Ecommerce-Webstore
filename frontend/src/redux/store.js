import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { ApiSlice } from "./slices/ApiSlice";
import userReducer from "./slices/userSlice";
import cartReducer from "./slices/cartSlice";
import shippingReducer from "./slices/shippingSlice";

const store = configureStore({
  reducer: {
    [ApiSlice.reducerPath]: ApiSlice.reducer,
    user: userReducer,
    cart: cartReducer,
    shipping: shippingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiSlice.middleware),
});

setupListeners(store.dispatch);

export default store;
