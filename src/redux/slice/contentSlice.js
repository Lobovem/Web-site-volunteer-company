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

export const postFormData = createAsyncThunk('content/postFormData', async (imputDataForm, { dispatch }) => {
  try {
    const response = await fetch('http://localhost:3000/formData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(imputDataForm),
    });

    //example with axios
    // const response = await axios.post(
    //   'http://localhost:3000/formData',
    //   {
    //     name: imputDataForm.name,
    //     email: imputDataForm.email,
    //     textarea: imputDataForm.textarea,
    //   },
    //   {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }
    // );

    if (!response.status === 200) {
      throw new Error('Can not post data');
    }

    dispatch(addFormData(imputDataForm));

    return;
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
      state.inputDataForm = action.payload;
    },

    inputChange: (state, action) => {
      state.inputDataForm = action.payload;
    },
  },

  extraReducers: {
    [fetchMenu.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchMenu.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.listMenu = action.payload;
    },
    [fetchMenu.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },

    [fetchNews.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchNews.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.listNews = action.payload;
    },
    [fetchNews.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },

    //TODO don't work, need fix
    // [fetchOneNews.pending]: (state) => {
    //   state.isLoading = true;
    // },
    [fetchOneNews.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.oneNews = action.payload;
    },
    [fetchOneNews.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
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
