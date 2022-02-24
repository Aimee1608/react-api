import React from 'react'
export default class Demo extends React.PureComponent {
  componentDidUpdate() {
    console.log('PureComponent--demo------componentDidUpdate')
  }
  render() {
    return <div>PureComponent--demo</div>
  }
}
