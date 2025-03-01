import { configureStore } from "@reduxjs/toolkit";
import { allProductsReducer } from "./api/allProducts.slice";
import { api } from "./api/api";

export const store = configureStore({
        reducer:{
                [api.reducerPath]:api.reducer,
                allProducts: allProductsReducer
        },
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>;