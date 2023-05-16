import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  listMenu: [],
  listNews: [],
  isLoading: false,
  error: null,
  burgerState: false,
};

const SERVER_URL_LISTMENU = 'listMenu';
const SERVER_URL_NEWS = 'news';

export const fetchMenu = createAsyncThunk('content/fetchMenu', async () => {
  try {
    const response = await fetch(`http://localhost:3000/${SERVER_URL_LISTMENU}`);
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
    const response = await fetch(`http://localhost:3000/${SERVER_URL_NEWS}`);
    if (!response.ok) {
      throw new Error('Error fetching menu list');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
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
  },
});

export const listMenuSelector = (state) => state.content.listMenu;
export const listNewsSelector = (state) => state.content.listNews;
export const burgerMenuSelector = (state) => state.content.burgerState;

export const { changeBurgerState } = contentSlice.actions;

export default contentSlice.reducer;
