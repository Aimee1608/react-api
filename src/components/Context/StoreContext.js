import React from 'react'
// 创建context
const context = React.createContext()
// 生成Consumer 供使用方使用
const Consumer = context.Consumer

const Provider = context.Provider
// 组装Consumer 将Context 的值注入到Component上
function connectStore(Component) {
  return class extends React.Component {
    render() {
      return <Consumer>{value => <Component {...value} {...this.props}></Component>}</Consumer>
    }
  }
}
// 常规的组件定义
class Demo extends React.Component {
  render() {
    const { contextInfo, propsInfo } = this.props
    return (
      <div>
        demo1--顶层-connectStore拿到的信息：{contextInfo}; 父组件拿到的Info：{propsInfo}
      </div>
    )
  }
}
// 生成组装后的组件
const NewDemo = connectStore(Demo)

class Demo2 extends React.Component {
  render() {
    const { contextInfo, propsInfo } = this.props
    return (
      <div>
        demo2--嵌套多层-connectStore拿到的信息：{contextInfo}; 父组件拿到的Info：{propsInfo}
      </div>
    )
  }
}
const NewDemo2 = connectStore(Demo2)
// 在父组件中使用
class Parent1 extends React.Component {
  render() {
    return (
      <div>
        <h5>parent1:</h5>
        {this.props.children}
      </div>
    )
  }
}

class Parent2 extends React.Component {
  render() {
    return (
      <div>
        <h5>parent2:</h5>
        <NewDemo2 propsInfo="嵌套的propsInfo"></NewDemo2>
      </div>
    )
  }
}
export default class Parent extends React.Component {
  render() {
    return (
      <Provider value={{ contextInfo: 'contextInfo' }}>
        <NewDemo propsInfo="等层的propsInfo"></NewDemo>
        <Parent1>
          <Parent2></Parent2>
        </Parent1>
      </Provider>
    )
  }
}
