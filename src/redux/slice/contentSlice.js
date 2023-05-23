import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  listMenu: [],
  listNews: [],
  oneNews: {},
  formData: [],
  inputDataForm: { id: '', name: '', email: '', textarea: '' },
  isLoading: false,
  error: null,
  burgerState: false,
};

//example fetch response
export const fetchMenu = createAsyncThunk('content/fetchMenu', async () => {
  try {
    const response = await fetch('http://localhost:3000/listMenu');
    if (!response.status === 200) {
      throw new Error('Error fetching news list');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
});

//example response with .then
export const fetchNews = createAsyncThunk('content/fetchNews', async () => {
  try {
    const response = await fetch('http://localhost:3000/news').then((data) => data.json());
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
});

//large example response with .then
// export const fetchNews = createAsyncThunk('content/fetchNews', async () => {
//   return new Promise((resolve, reject) => {
//     fetch('http://localhost:3000/news')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Error fetching news list');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((error) => {
//         reject(new Error(error.message));
//       });
//   });
// });

//example axios response
export const fetchOneNews = createAsyncThunk('content/fetchOneNews', async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/news/${id}`);
    if (!response.status === 200) {
      throw new Error('Error fetching news list');
    }
    return response.data;
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
    addFormData: (state) => {
      state.formData = [...state.formData, state.inputDataForm];
    },
    addInputDataForm: (state, action) => {
      state.inputDataForm = { ...action.payload, id: state.formData.length + 1 };
    },

    inputChange: (state, action) => {
      state.inputDataForm = action.payload;
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

    // builder.addCase(fetchOneNews.pending, (state) => {
    //   state.isLoading = true;
    // });
    builder.addCase(fetchOneNews.fulfilled, (state, action) => {
      state.isLoading = false;
      state.oneNews = action.payload;
    });
    builder.addCase(fetchOneNews.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const burgerMenuSelector = (state) => state.content.burgerState;
export const listMenuSelector = (state) => state.content.listMenu;
export const listNewsSelector = (state) => state.content.listNews;
export const oneNewsSelector = (state) => state.content.oneNews;
export const inputDataFormSelector = (state) => state.content.inputDataForm;
export const formDataSelector = (state) => state.content.formData;

export const { changeBurgerState, addFormData, addInputDataForm } = contentSlice.actions;

export default contentSlice.reducer;
