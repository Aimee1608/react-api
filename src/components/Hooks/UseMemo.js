import React, { useState, useMemo } from 'react'

function Child(props) {
  const userInfo = useMemo(() => {
    console.log('child----useMemo')
    return {
      name: props.name
    }
  }, [props.name])

  return <div>child: {userInfo.name}</div>
}

export default function Parent() {
  const [name, setName] = useState('')
  const [count, setCount] = useState(0)
  return (
    <div>
      <h2>useMemo</h2>
      <div>
        <Child name={name}></Child>
        <button onClick={() => setName('parent--useMemo')}>设置</button>
      </div>
      <div>
        count:{count}
        <button onClick={() => setCount(count + 1)}>设置</button>
      </div>
    </div>
  )
}
