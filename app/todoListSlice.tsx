// Based around https://redux.js.org/tutorials/essentials/part-2-app-structure
import { createSlice } from '@reduxjs/toolkit'
import type { PlayloadAction } from '@reduxjs/toolkit'

export interface TodoListState {
  items: string[]
  todoInputText: string
}

const initialState: TodoListState = {
  items: [],
  todoInputText: ""
}

// I've learned that createSlice will actually handle statelessness for you, so you
// can modify the "state" and it will create a copy of the old state, write in your
// new changes, and replace it. (Though I wonder if that applies to arrays.)
export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    itemAdded: (state) => {
      state.items.push(state.todoInputText)
    },
    itemRemoved: (state, action: PayloadAction<number>) => {
      // Expects the index of the item to remove.
      state.items.splice(action.payload, 1)
    },
    inputTextUpdated: (state, action: PayloadAction<string>) => {
      state.todoInputText = action.payload
    }
  }
})

export const { itemAdded, itemRemoved, inputTextUpdated } = todoListSlice.actions
export default todoListSlice.reducer
