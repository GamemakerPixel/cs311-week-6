// Somewhat based off information from https://redux.js.org/tutorials/essentials/part-2-app-structure
import { configureStore } from '@reduxjs/toolkit'

import todoListReducer from './todoListSlice'

export const store = configureStore({
  reducer: {
    todoList: todoListReducer
  }
})
