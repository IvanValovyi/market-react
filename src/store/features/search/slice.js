import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    input_val:''
}

export const searchSlice = createSlice({
    name:'search',
    initialState,
    reducers:{
        setInpVal(state, el){
            state.input_val = el.payload
        }
    }
})

export const {setInpVal} = searchSlice.actions

export default searchSlice