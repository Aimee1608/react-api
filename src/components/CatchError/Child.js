import React from 'react'
export default class Child extends React.Component {
  state = {
    error: null
  }
  handleClick() {
    this.setState({
      error: new Error('error')
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>抛出错误</button>
        {this.state.error}
      </div>
    )
  }
}
