import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialstate = {
    books: []
}

export const books = createSlice({
    name: books,
    initialstate,
    reducers: {
        addBook: (state, action) => {
            state.books = action.payload;
        },
        removeBook: (state, action) => {
            const bookId = action.payload;
            state.books = state.books.filter( item => item.id !== bookId);
        }
    }
})