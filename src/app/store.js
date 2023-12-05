import { configureStore } from "@reduxjs/toolkit";

import todosSlice from './TodosSlice'
import todosInputFilter from './TodosInputFilter'

export const store = configureStore({
    reducer: {
        todos: todosSlice,
        todosInputFilter
    }
})