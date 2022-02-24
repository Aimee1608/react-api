import React from 'react'
const contextRed = React.createContext('red')
const contextBlue = React.createContext('blue')

class Child extends React.Component {
  render() {
    return (
      <contextRed.Consumer>
        {red => (
          <contextBlue.Consumer>
            {blue => (
              <div>
                <h5>多个context</h5>
                <div>第一个：{red}</div>
                <div>第二个：{blue}</div>
              </div>
            )}
          </contextBlue.Consumer>
        )}
      </contextRed.Consumer>
    )
  }
}

export default class Conent extends React.Component {
  render() {
    return (
      <contextRed.Provider value="red">
        <contextBlue.Provider value="blue">
          <Child />
        </contextBlue.Provider>
      </contextRed.Provider>
    )
  }
}
