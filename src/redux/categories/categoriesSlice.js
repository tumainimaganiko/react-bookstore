import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
    categories: []
}

export const categoriesSlice = createSlice({
    name: categories,
    initialstate,
    reducers: {
        checkStatus: (state, action) => {
            state.categories = action.payload === 'Under construction' ? 'Under Construction' : state.categories;
        }
    }
})