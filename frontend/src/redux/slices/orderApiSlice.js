import { ApiSlice } from "./ApiSlice";

export const orderApiSlice = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    placeOrder: builder.mutation({
      query: (orderInfo) => ({
        url: "/api/orders/",
        method: "POST",
        body: orderInfo,
      }),
    }),
    getUserOrders: builder.query({
      query: () => ({
        url: `/api/orders/allorders`,
      }),
    }),
  }),
});

export const { usePlaceOrderMutation, useGetUserOrdersQuery } = orderApiSlice;
