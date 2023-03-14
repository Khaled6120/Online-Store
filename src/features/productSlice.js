import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  items: [],
  status: null,
  error: null,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async (cat = null, { rejectWithValue }) => {
    let url ="https://fakestoreapi.com/products"
    if(cat){
      url = `https://fakestoreapi.com/products/category/${cat}`
    } 
    if(cat === "All"){
      url = "https://fakestoreapi.com/products";
    }

    try {
      const response = await axios.get(url);
      //for showing the loader -->development purpose
      await pause(1500)
      //for showing the loader -->development purpose
      return response?.data;
    } catch (error) {
      return rejectWithValue("error occured while fetching products");
    }
  }

);

//for showing the loader -->development purpose
const pause = duration =>{
    return new Promise((resolve) =>{
      setTimeout(resolve,duration)
    })
}
const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "loading";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = "sucess";
      state.items = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.payload;
    },
  },
});



export default productsSlice.reducer;
