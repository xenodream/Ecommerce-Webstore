import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "" });

export const ApiSlice = createApi({
  baseQuery,
  tagTypes: ["Product", "User"],
  endpoints: (builder) => ({}),
});
