import React, { Component } from 'react'

class HuntList extends Component {
  render () {
    return (
      <div>
        <h3>{this.props.hunt.name}</h3>
        <h4>By: {this.props.hunt.creator.username}</h4>
      </div>
    )
  }
}

export default HuntList
