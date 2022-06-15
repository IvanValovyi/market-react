import { configureStore } from "@reduxjs/toolkit"
import { basketSlice } from "./features/basket/slice"
import { searchSlice } from "./features/search/slice"

export const store = configureStore({
    reducer:{
        basket:basketSlice.reducer,
        search:searchSlice.reducer
    }
})