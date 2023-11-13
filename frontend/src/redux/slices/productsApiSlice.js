import { ApiSlice } from "./ApiSlice";

export const productsApiSlice = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProductsByCategory: builder.query({
      query: (category) => ({
        url: `/api/products/${category}`,
      }),
    }),
    getProducts: builder.query({
      query: () => ({
        url: "/api/products",
      }),
    }),
    getProductDetails: builder.query({
      query: (id) => ({
        url: `/api/products/product/${id}`,
      }),
    }),
    updateProducts: builder.mutation({
      query: (productInfo) => ({
        url: `/api/products/productupdate`,
        method: "PUT",
        body: productInfo,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  useGetProductDetailsQuery,
  useUpdateProductsMutation,
} = productsApiSlice;
