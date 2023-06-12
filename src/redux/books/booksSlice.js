import { createSlice } from '@reduxjs/toolkit';

const initialstate = {
  books: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialstate,
  reducers: {
    addBook: (state, action) => {
      state.books = action.payload;
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((item) => item.id !== bookId);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
