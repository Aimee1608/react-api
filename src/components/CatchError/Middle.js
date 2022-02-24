import React from 'react'
import Parent from './Parent'
import Child from './Child'
export default class Middle extends React.Component {
  render() {
    return (
      <Parent>
        <Child></Child>
      </Parent>
    )
  }
}
