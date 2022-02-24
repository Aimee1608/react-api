import React from 'react'
export default function UseRef() {
  const ref = React.useRef()
  const onHandle = () => {
    ref.current.focus()
  }
  return (
    <div>
      <h2>useRef</h2>
      <input ref={ref} type="text" />
      <button onClick={onHandle}>点击通过ref聚焦</button>
    </div>
  )
}
