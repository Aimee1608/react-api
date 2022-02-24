import React from 'react'
const context = React.createContext()

class Child extends React.Component {
  static contextType = context
  render() {
    const { name } = this.context
    return (
      <div>
        <h5>contextType</h5>
        <div>获取的值： {name}</div>
      </div>
    )
  }
}

class Middle extends React.Component {
  render() {
    return <Child></Child>
  }
}

export default class Content extends React.Component {
  render() {
    return (
      <context.Provider value={{ name: 'contextType' }}>
        <Middle></Middle>
      </context.Provider>
    )
  }
}
