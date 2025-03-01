import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../models";

type initState = {
    allProducts:IProduct[]|[]
}
const initialState:initState = {
    allProducts:[]
}

export const allProductsSlice = createSlice({
    name: "allProducts",
    initialState:initialState,
    reducers:{
        addToAllProducts:(state,action)=>{
            state.allProducts = action.payload;
        },
        filteredProductCategory:(state,action)=>{
            state.allProducts = action.payload;
        }
    }
})

export const { addToAllProducts,filteredProductCategory } = allProductsSlice.actions;
export const allProductsReducer = allProductsSlice.reducer
