import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import productsReducer, {productsFetch} from "./features/productSlice"
import cartReducer from "./features/cartSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart:cartReducer
  },
});
const data = store.dispatch(productsFetch())
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(data.items)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
