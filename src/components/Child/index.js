import React from 'react'

export default class Child extends React.Component {
  state = { name: 'child', count: this.props.count }
  constructor(props) {
    super(props)
    console.log('Child-----> constructor')
  }
  static getDerivedStateFromProps(props, state) {
    console.log('Child-----> getDerviedStateFromProps', props, state)
    return null
  }
  componentDidMount() {
    console.log('Child-----> componentDidMount')
  }
  getSnapshotBeforeUpdate(preProps, preState) {
    console.log('Child-----> getSnapshotBeforeUpdate', preProps, preState)
    return { name: 2 }
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Child-----> shouldComponentUpdate')
    return true
  }
  componentDidUpdate(preProps, preState, snapshot) {
    console.log('Child-----> componentDidUpdate', preProps, preState, snapshot)
  }
  componentWillUnmount() {
    console.log('Child-----> componentWillUnmount')
  }
  render() {
    console.log('Child-----> render')
    const { count } = this.props
    return (
      <div>
        <h2>child</h2>
        <div>count: {count}</div>
      </div>
    )
  }
}
