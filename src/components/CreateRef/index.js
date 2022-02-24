import React from 'react'

export default class CreateRef extends React.Component {
  constructor(props) {
    super(props)
  }
  myRef = React.createRef()
  componentDidMount() {
    console.log('React.createRef------->', this.myRef)
  }
  render() {
    return (
      <div>
        <h2>React.createRef()</h2>
        <div ref={this.myRef}>这个demo</div>
      </div>
    )
  }
}
