import React from 'react'
import ReactDom from 'react-dom'
const model = document.getElementById('model')
class CreatePortal extends React.Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }
  componentDidMount() {
    model.appendChild(this.el)
  }
  componentWillUnmount() {
    model.removeChild(this.el)
  }
  render() {
    return ReactDom.createPortal(this.props.children, this.el)
  }
}
function Child() {
  // 这个按钮的点击事件会冒泡到父元素
  // 因为这里没有定义 'onClick' 属性
  return (
    <div className="modal">
      <button onClick={() => console.log('portals')}>Click</button>
    </div>
  )
}
export default class Demo extends React.Component {
  state = { clicks: 0 }
  handleClick() {
    // 当子元素里的按钮被点击时，
    // 这个将会被触发更新父元素的 state，
    // 即使这个按钮在 DOM 中不是直接关联的后代
    this.setState(state => ({
      clicks: state.clicks + 1
    }))
  }
  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>
        <h2>React.createPortal()</h2>
        <p>Number of clicks: {this.state.clicks}</p>
        <CreatePortal>
          <Child></Child>
        </CreatePortal>
      </div>
    )
  }
}
