import React, { useReducer } from 'react'
function init(initialCount) {
  return { count: initialCount }
}
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return init(action.payload)
    default:
      throw new Error()
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, 1, init)
  return (
    <div>
      <h2>useReducer</h2>
      count: {state.count}
      <button onClick={() => dispatch({ type: 'reset', payload: 1 })}>reset</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  )
}
