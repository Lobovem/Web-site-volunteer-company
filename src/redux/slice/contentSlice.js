import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useSelector } from 'react-redux';

const initialState = {
  contents: [],
  isLoading: false,
  error: null,
};

export const fetchContent = createAsyncThunk('content/fetchContent', async () => {
  const res = await axios('http://localhost:3000/listMenu');
  const data = await res.data;
  return data;
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
      state.contents = action.payload;
    });
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default contentSlice.reducer;