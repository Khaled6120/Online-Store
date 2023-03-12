import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  cartItems: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.cartItems[itemIndex].cardQuantity += 1;
        toast.info(
          `Increased product quantity: ${state.cartItems[itemIndex].cardQuantity} items `,
          {
            position: "top-center",
            autoClose: 3000,
          }
        );
      } else {
        const tempProduct = { ...action.payload, cardQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success("Added a new product to cart", {
          position: "top-center",
          autoClose: 4000,
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    //reducer 2
    removeFromCart(state, action) {
      const newlyCartItems = state.cartItems.filter((cartItem)=>cartItem.id !==action.payload.id)

      state.cartItems = newlyCartItems
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
      toast.error("Removed from cart", {
        position: "bottom-left",
        autoClose: 4000,
      });
    },
    //reducer 3
    removeAll(state,action){
      state.cartItems = []
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
      toast.error("All items have been removed", {
        position: "bottom-left",
        autoClose: 4000,
      });

    }
  },
});

export const { addToCart, removeFromCart,removeAll } = cartSlice.actions;

export default cartSlice.reducer;
