import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuList: [],
  isLoading: false,
  error: null,
};

export const fetchContent = createAsyncThunk('content/fetchContent', async () => {
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

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.menuList = action.payload;
    });
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const menuListSelector = (state) => state.content.menuList;

export default contentSlice.reducer;
