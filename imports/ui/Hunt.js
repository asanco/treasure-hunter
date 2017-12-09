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
    this.props.startHunting(this.props.hunt._id, (err) => {
      if (!err) this.props.history.push('hunting')
    })
  }

  render () {
    return (
      <div className='col-sm-4' >
        <h2>{this.props.hunt.name}</h2>
        <h3>By: {this.props.hunt.creator.username}</h3>
        <div>
          {this.props.difficulty === 'easy'
            ? <img height='64' width='64' alt='Easy difficulty' src='../../starfish.png' />
            : this.props.difficulty === 'medium'
            ? <img height='64' width='64' alt='Medium difficulty' src='../../pirate-1.png' />
            : <img height='64' width='64' alt='Hard difficulty' src='../../octopus.png' />
          }
        </div>
        <div>
          {this.props.user
            ? <button onClick={this.handleSubmit} className='btn btn-default'>Play</button>
            : <h4>In order to start hunting you must be logged in</h4>
          }

        </div>
      </div>
    )
  }
}

export default Hunt
