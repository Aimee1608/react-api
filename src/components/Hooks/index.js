import React from 'react'
import Pure from './Pure'
import UseState from './UseState'
import UseEffect from './UseEffect'
import MyHooks from './MyHooks'
import UseContext from './UseContext'
import UseRef from './UseRef'
import UseReducer from './UseReducer'
import UseMemo from './UseMemo'
import UseCallback from './UseCallback'
import UseImperativeHandle from './UseImperativeHandle'
import UseLayoutEffect from './UseLayoutEffect'
export default class Hooks extends React.Component {
  render() {
    return (
      <div>
        <h2>hooks</h2>
        <Pure></Pure>
        <UseState></UseState>
        <UseEffect></UseEffect>
        <UseContext></UseContext>
        <UseRef></UseRef>
        <UseReducer></UseReducer>
        <MyHooks></MyHooks>
        <UseMemo></UseMemo>
        <UseCallback></UseCallback>
        <UseImperativeHandle></UseImperativeHandle>
        <UseLayoutEffect></UseLayoutEffect>
      </div>
    )
  }
}
