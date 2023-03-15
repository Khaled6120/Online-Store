import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import productsReducer, {productsFetch} from "./features/productSlice"
import cartReducer, { TotalPriceAndQuantity } from "./features/cartSlice";
import modalReducer from './features/modalSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart:cartReducer,
    modal: modalReducer
  },
});
store.dispatch(productsFetch())
store.dispatch(TotalPriceAndQuantity())

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
