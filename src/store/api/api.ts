import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../../models";

const API_URL = "https://fakestoreapi.com/products"

export const api = createApi({
    reducerPath:"api",
    tagTypes:["products"],
    baseQuery:fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints:builder=>({
        getAllProducts: builder.query<Product[], null>({
            query:()=>"/"
        }),
        getCategoriesProducts: builder.query<string[], null>({
            query:()=>`/categories`
        }),
        getProductsCategory: builder.query<Product[],{category: string, limit: number | null}>({
            query:({category,limit})=>`/category/${category}?limit=${limit}`
        }),
    })
})

export const {useGetAllProductsQuery,useGetCategoriesProductsQuery,useGetProductsCategoryQuery}= api
