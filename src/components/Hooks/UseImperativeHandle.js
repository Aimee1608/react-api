import React, { useImperativeHandle, useRef } from 'react'

const Child = React.forwardRef((props, ref) => {
  const inputRef = useRef()
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus()
    }
  }))
  return <input ref={inputRef} type="text" />
})

export default function Parent() {
  const childRef = useRef()
  return (
    <div>
      <h2>useImperativeHandle</h2>
      <Child ref={childRef}></Child>
      <button onClick={() => childRef.current.focus()}>聚焦</button>
    </div>
  )
}
