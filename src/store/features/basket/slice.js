import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')).length : 0
}

export const basketSlice = createSlice({
    name:'basket',
    initialState,
    reducers:{
        plus(state){
            state.value++
        },
        minus(state){
            state.value--
        }
    }
})

export const {plus, minus} = basketSlice.actions

export default basketSlice