import React, { useCallback, useState } from 'react'

export default function UseCallback() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('hah')
  const add = () => {
    setCount(count + 1)
  }
  const changeName = useCallback(() => {
    setName(name + 'changed')
  }, [count])
  return (
    <div>
      <h2>useCallback</h2>
      <div>
        count:{count}
        name:{name}
        <button onClick={add}>加</button>
        <button onClick={changeName}>设置name</button>
      </div>
    </div>
  )
}
