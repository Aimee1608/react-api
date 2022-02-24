import React from 'react'
import Demo from './Demo'
import StoreContext from './StoreContext'
import MoreConent from './MoreContext'
import ContextType from './ContextType'
export default class Container extends React.Component {
  render() {
    return (
      <div>
        <h2>context</h2>
        <h5>简单版</h5>
        <Demo></Demo>
        <h5>封装版</h5>
        <StoreContext></StoreContext>
        <h5>多个context</h5>
        <MoreConent></MoreConent>
        <ContextType></ContextType>
      </div>
    )
  }
}
