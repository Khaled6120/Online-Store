import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/product";
import cartReducer from "./features/cart";
import modalReducer from "./features/modal";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    modal: modalReducer,
  },
});

export default store;
