import React from 'react'

class MChild extends React.Component {
  render() {
    return <input ref={this.props.childRef} type="text" />
  }
}
const Child = React.forwardRef((props, ref) => <MChild {...props} childRef={ref}></MChild>)
export default class Parent extends React.Component {
  childRef = React.createRef()
  handle() {
    this.childRef.current.focus()
  }
  render() {
    return (
      <div>
        <h2>React.forwardRef</h2>
        <div>
          <Child ref={this.childRef}></Child>
          <button onClick={this.handle.bind(this)}>聚焦child</button>
        </div>
      </div>
    )
  }
}
