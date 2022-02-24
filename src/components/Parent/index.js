import React from 'react'
import './index.less'
import Child from './../Child'
export default class Parent extends React.Component {
  state = {
    count: 0
  }
  constructor(props) {
    super(props)
    console.log('Parent-----> constructor')
  }
  static getDerivedStateFromProps(props, state) {
    console.log('Parent-----> getDerviedStateFromProps', props, state)
    return null
  }
  componentDidMount() {
    console.log('Parent-----> componentDidMount')
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Parent-----> shouldComponentUpdate', nextProps, nextState)
    return true
  }
  getSnapshotBeforeUpdate(prevProps, preState) {
    console.log('Parent-----> getSnapshotBeforeUpdate', prevProps, preState)
    return { name: 1 }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Parent-----> componentDidUpdate', prevProps, prevState, snapshot)
  }

  componentWillUnmount() {
    console.log('Parent-----> componentWillUnmount')
  }
  handleClick() {
    this.setState({ count: this.state.count + 1 })
  }
  handleError() {
    this.setState({ count: 0 })
    throw new Error('handleError')
  }

  render() {
    console.log('Parent-----> render')
    const { count } = this.state
    return (
      <div>
        <h1>Parent</h1>
        <button onClick={this.handleClick.bind(this)}>加1</button>
        <Child count={count}></Child>
      </div>
    )
  }
}
