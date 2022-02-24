import { useState } from 'react'

export default function UseState() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h5>useState</h5>
      <div>
        count：{count} <button onClick={() => setCount(count + 1)}>增加</button>
      </div>
    </div>
  )
}
