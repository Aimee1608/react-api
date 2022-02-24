import React from 'react'

function Pure() {
  console.log('Pure----render')
  return <div>纯函数组件</div>
}
// export default React.memo(Pure)
export default Pure
