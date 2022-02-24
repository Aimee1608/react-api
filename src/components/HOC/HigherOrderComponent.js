import React from 'react'

export default function HigherOrderComponent(Component) {
  return class extends React.Component {
    render() {
      return <Component {...this.props} name="hight"></Component>
    }
  }
}
