import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  items: [],
  status: null,
  error: null,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async (id = null, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products/");
      return response?.data;
    } catch (error) {
      return rejectWithValue("error occured while fetching products");
    }
  }
);

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
