import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoListState: [],
};

export const appReducer = createSlice({
  name: 'todoList',
  initialState: initialState,
  reducers: {
    // add_todo: (state, action) => {
    //   state.todoListState = [
    //     ...state.todoListState,
    //     {
    //       id: Math.random(),
    //       task: action.payload,
    //       complete: false,
    //       isEditing: false,
    //     },
    //   ];
    // },
    // delete_todo: (state, action) => {
    //   state.todoListState = state.todoListState.filter((todo) => todo.id !== action.payload.id);
    // },
  },
});

// export const userInputSelector = (state) => state.todoList.inputState;
// export const todoListSelector = (state) => state.todoList.todoListState;

// export const { add_todo } = todoReducer.actions;
export default appReducer.reducer;
