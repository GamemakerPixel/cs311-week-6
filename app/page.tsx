'use client'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { store } from "./store"
import TodoAdder from "./components/todoAdder"
import TodoList from "./components/todoList"

import styles from "./page.module.css";


export default function Home() {
  return (
    <Provider store={store}>
      <TodoAdder />
      <TodoList />
    </Provider>
  );
}
