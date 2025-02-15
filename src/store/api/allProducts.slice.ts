import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../models";
import { useGetAllProductsQuery } from "./api";

const initialState:Product[] = []

const {data}= useGetAllProductsQuery(null)

export const allProductsSlise = createSlice({
    name: "allProducts",
    initialState:initialState,
    reducers:{
        addToAllProducts:(state)=>{
            if(data) state.push(...data)    
        }
    }
})

export const allProductsReducer = allProductsSlise.reducer
