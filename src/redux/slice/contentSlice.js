import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  listMenu: [],
  listNews: [],
  news: {},
  isLoading: false,
  error: null,
  burgerState: false,
};

export const fetchMenu = createAsyncThunk('content/fetchMenu', async () => {
  try {
    const response = await fetch('http://localhost:3000/listMenu');
    if (!response.ok) {
      throw new Error('Error fetching menu list');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const fetchNews = createAsyncThunk('content/fetchNews', async () => {
  try {
    const response = await fetch('http://localhost:3000/news');
    if (!response.ok) {
      throw new Error('Error fetching menu list');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
});

const fetchNewsById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/news/${id}`);
    console.log('response', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

export const fetchNewsSimple = createAsyncThunk('content/fetchNewsSimple', async (id) => {
  const response = await fetchNewsById(id); // Call the API function
  return response;
});

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    changeBurgerState: (state, action) => {
      state.burgerState = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchMenu.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMenu.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listMenu = action.payload;
    });
    builder.addCase(fetchMenu.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(fetchNews.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.isLoading = false;
      state.listNews = action.payload;
    });
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(fetchNewsSimple.fulfilled, (state, action) => {
      state.news = action.payload;
    });
  },
});

export const listMenuSelector = (state) => state.content.listMenu;
export const listNewsSelector = (state) => state.content.listNews;
export const newsSimpleSelector = (state) => state.content.news;
export const burgerMenuSelector = (state) => state.content.burgerState;

export const { changeBurgerState } = contentSlice.actions;

export default contentSlice.reducer;
