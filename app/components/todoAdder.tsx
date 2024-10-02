'use client'
import { useDispatch, useSelector} from 'react-redux'

import { store } from '../store'
import { itemAdded, inputTextUpdated } from '../todoListSlice'


export default function TodoAdder() {
  const dispatch = useDispatch()

  return (
    <div>
      <input placeholder="I need to do..." onChange={(event) => {
	dispatch(inputTextUpdated(event.target.value))
      }}></input>
      <button onClick={() => {
	dispatch(itemAdded())
      }}>
      Add to list
      </button>
    </div>
  );
}
