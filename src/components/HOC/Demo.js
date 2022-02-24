import React from 'react'
import HigherOrderComponent from './HigherOrderComponent'
class Demo extends React.Component {
  render() {
    const { name, count } = this.props
    return (
      <div>
        高阶组件返回的信息：{name} {count}
      </div>
    )
  }
}
export default HigherOrderComponent(Demo)
