import React, { Component } from 'react'

class Hunt extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.startHunting(this.props.hunt._id)
    this.props.history.push('hunting')
  }

  render () {
    return (
      <div>
        <h3>{this.props.hunt.name}</h3>
        <h4>By: {this.props.hunt.creator.username}</h4>
        <button
          onClick={this.handleSubmit}
          className='btn btn-default'>
          Play
        </button>
      </div>
    )
  }
}

export default Hunt
