import React from 'react'
import Demo from './Demo'
export default class PureComponent extends React.Component {
  state = {
    count: 0
  }
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    const { count } = this.state
    return (
      <div>
        <h2>React.memo</h2>
        <Demo></Demo>
        计数： {count}
        <button onClick={this.handleClick}>加1</button>
      </div>
    )
  }
}
