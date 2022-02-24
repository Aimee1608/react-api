import { useState, useEffect } from 'react'

export default function UseEffect() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('useEffect')
  useEffect(() => {
    document.title = 'useEffect' + count
    console.log('useEffect----->')
  })
  //   调用多个
  useEffect(() => {
    console.log('useEffect----->1')
  })
  useEffect(() => {
    console.log('useEffect----->2')
  })
  //   返回函数用于清除副作用
  useEffect(() => {
    console.log('useEffect-----> return ')
    return () => {
      console.log('unmount')
    }
  })

  useEffect(() => {
    console.log('useEffect-----> name 更新了 ', count)
  }, [name]) // 仅在 count 更改时更新

  useEffect(() => {
    console.log('useEffect----->[]')
  }, [])
  return (
    <div>
      <h5>useEffect</h5>
      <div>
        count：{count} <button onClick={() => setCount(count + 1)}>增加</button>
      </div>
      <div>
        name :{name}修改：<button onClick={() => setName('updated')}>修改</button>
      </div>
    </div>
  )
}
