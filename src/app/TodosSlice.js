import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "TodosSlice",
  initialState: {
    todosArr: [],
  },
  reducers: {
    addTodos: (store, action) => {
      store.todosArr = action.payload;
    },
    removeTodo: (store, action) => {
        store.todosArr = store.todosArr.filter((el) => el.id !== action.payload);
    },
    toggleTodoCompleted: (store, action) => {
        store.todosArr = store.todosArr.map(el => {
            if (el.id === action.payload) {
                el.completed = !el.completed
            }
            return el
        })
    }
  },
});
export const { addTodos, removeTodo, toggleTodoCompleted } = todosSlice.actions;

export default todosSlice.reducer;
