'use client'
import { useSelector, useDispatch } from 'react-redux'

import { itemRemoved } from '../todoListSlice'

export default function TodoList() {
  const dispatch = useDispatch()
  const todoItems = useSelector((state) => state.todoList.items)

  return (
  <div>
    <ul>
      {todoItems.map((item, index) => (
	<li key={index} data-index={index} onClick={
	  (event) => { dispatch(itemRemoved(event.target.dataset.index)) }
	}>{item}</li>
      ))}
    </ul>
  </div>
  );
}
