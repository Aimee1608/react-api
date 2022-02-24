import { useState, useEffect } from 'react'

function useMyHooks(props) {
  const [value, setValue] = useState(props)
  useEffect(() => {
    console.log('useEffect----->useMyHooks')
    setValue(6)
  })
  return value
}

export default function MyHooks() {
  const value = useMyHooks(9)
  const [count, setCount] = useState(0)
  return (
    <div>
      <h5>自定义hooks</h5>
      <div>
        count:{count}获取的值： {value}
        <button onClick={() => setCount(count + 1)}>增加</button>
      </div>
    </div>
  )
}
