import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedUser: localStorage.getItem("loggedUser")
    ? JSON.parse(localStorage.getItem("loggedUser"))
    : null,
};
const userSlice = createSlice({
  name: "loggedUser",
  initialState,
  reducers: {
    setLoggedUser: (state, action) => {
      state.loggedUser = action.payload;
      localStorage.setItem("loggedUser", JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.loggedUser = null;
      localStorage.clear();
    },
  },
});

export const { setLoggedUser, logout } = userSlice.actions;

export default userSlice.reducer;
