import React from 'react'
const Context = React.createContext()

class Button extends React.Component {
  render() {
    return <Context.Consumer>{value => <div>context-info:{value}</div>}</Context.Consumer>
  }
}

export default class Container extends React.Component {
  render() {
    return (
      <Context.Provider value="contxt">
        <Button></Button>
      </Context.Provider>
    )
  }
}
