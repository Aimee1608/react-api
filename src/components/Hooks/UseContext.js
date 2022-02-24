import React from 'react'

const ThemeContext = React.createContext()
const obj = { name: 'useContext' }

function Demo() {
  return (
    <div>
      <Demo2 />
    </div>
  )
}
function Demo2() {
  const context = React.useContext(ThemeContext)
  return (
    <div>
      <h2>useContext</h2>
      <div>contextinfo: {context.name}</div>
    </div>
  )
}
export default function UseContext() {
  return (
    <ThemeContext.Provider value={obj}>
      <Demo />
    </ThemeContext.Provider>
  )
}
