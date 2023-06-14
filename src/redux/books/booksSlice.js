import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  // Initial state:
  books: [],
  sendBook: {},
};

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const bookAppId = '9dqfCwEai3cj7Oylg6VR';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(`${baseUrl}/apps/${bookAppId}/books/`);
  const { headers, ...data } = response.data;
  return data;
});

// export const createBook = createAsyncThunk('books/createBook', async (book) =>
//  axios.post(`${baseUrl}/apps/${bookAppId}/books/`, book));

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      console.log(action.payload);
      state.sendBook = action.payload;
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((item) => item.item_id !== bookId);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const myBooks = Object.keys(action.payload);
      myBooks.forEach((item) => {
        state.books.push(action.payload[item][0]);
      });
    });
    // builder.addCase(createBook.fulfilled, (state, action) => {
    //   console.log(state.books);
    //   state.books.push(action.payload);
    // });
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
