import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  // Initial state:
  books: [],
};

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const bookAppId = 'lEyrT5dA0Qou9xmVoUvb';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(`${baseUrl}/apps/${bookAppId}/books/`);
  const { headers, ...data } = response.data;
  return data;
});

export const createBook = createAsyncThunk('books/createBook', async (bookData, thunkAPI) => {
  const response = await axios.post(`${baseUrl}/apps/${bookAppId}/books`, bookData);
  thunkAPI.dispatch(fetchBooks());
  const { cacheControl, contentLength, contentType } = response.headers;

  return {
    data: response.data,
    cacheControl,
    contentLength,
    contentType,
  };
});

export const deleteBook = createAsyncThunk('books/deleteBooks', async (bookId, thunkAPI) => {
  const response = await axios.delete(`${baseUrl}/apps/${bookAppId}/books/${bookId}`);
  thunkAPI.dispatch(fetchBooks());
  return response.data;
});

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      const myBooks = Object.keys(action.payload);
      state.books = [];
      myBooks.forEach((item) => {
        const book = action.payload[item][0];
        state.books.push({
          author: book.author,
          title: book.title,
          category: book.category,
          item_id: item,
        });
      });
    });
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
