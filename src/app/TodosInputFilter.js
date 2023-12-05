import { createSlice } from "@reduxjs/toolkit";

const todosInputFilterSlice = createSlice({
  name: "TodosInputFilterSlice",
  initialState: {
    inputValue: "",
  },
  reducers: {
    setInputValue: (store, actions) => {
      store.inputValue = actions.payload;
    },
  },
});
export const { setInputValue } = todosInputFilterSlice.actions;

export default todosInputFilterSlice.reducer;
