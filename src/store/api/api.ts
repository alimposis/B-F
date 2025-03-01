import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../../models";

const API_URL = "https://fakestoreapi.com/products"

export const api = createApi({
    reducerPath:"api",
    tagTypes:["products"],
    baseQuery:fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints:builder=>({
        getAllProducts: builder.query<IProduct[], null>({
            query:()=>"/"
        }),
        getProduct: builder.query<IProduct,{id:string}>({
            query:({id})=>`/${id}`
        }),
        getCategoriesProducts: builder.query<string[], null>({
            query:()=>`/categories`
        }),
        getProductsCategory: builder.query<IProduct[],{category: string, limit: number | null}>({
            query:({category,limit})=>`/category/${category}?limit=${limit}`
        }),
    })
})

export const {useGetAllProductsQuery,useGetCategoriesProductsQuery,useGetProductsCategoryQuery,useGetProductQuery}= api
