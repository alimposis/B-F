import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../models";

type initState = {
    allProducts:IProduct[]|[],
    form:boolean
}
const initialState:initState = {
    allProducts:[],
    form:false
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
        },
        openCloseFormProduct:(state)=>{
            state.form = !state.form
        }
    }
})

export const { addToAllProducts,filteredProductCategory,openCloseFormProduct } = allProductsSlice.actions;
export const allProductsReducer = allProductsSlice.reducer
