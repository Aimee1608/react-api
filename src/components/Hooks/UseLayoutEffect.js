import { useLayoutEffect, useEffect, useState, useDebugValue } from 'react'

export default function UseLayoutEffect() {
  const [count, setCount] = useState(0)
  //   useEffect(() => {
  //     if (count === 0) {
  //       setCount(10 + Math.random() * 200)
  //     }
  //   }, [count])
  useLayoutEffect(() => {
    if (count === 0) {
      setCount(10 + Math.random() * 200)
    }
  }, [count])

  return (
    <div>
      <h2>useLayoutEffect</h2>
      <div>uselayouteffect: {count}</div>
      <button onClick={() => setCount(0)}>+</button>
    </div>
  )
}
