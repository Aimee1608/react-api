import React from 'react'

export default class Parent extends React.Component {
  state = {
    hasError: false
  }
  //   static getDerviedStateFromError(error) {
  //     console.log('getDerviedStateFromError', error)
  //     return { hasError: true }
  //   }
  componentDidCatch(error, info) {
    console.log('componentDidCatch', error, info)
    this.setState({ hasError: true })
  }
  render() {
    const { hasError } = this.state
    if (hasError) {
      // 你可以渲染任何自定义的降级  UI
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}
