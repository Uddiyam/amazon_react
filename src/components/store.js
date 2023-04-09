import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./cartSlice.jsx";

let stock = createSlice({
  name: "stock",
  initialState: "kim",
  reducers: {
    changeName(state) {
      return "john" + state;
    },
  },
});

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
  },
});
