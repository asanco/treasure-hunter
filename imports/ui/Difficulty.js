import React, { Component } from 'react'

class Difficulty extends Component {
  render () {
    return (
      <div>
        <h4>Choose your difficulty:</h4>

        <div className='row'>
          <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12'>
            <a href='#home'><img height='64' width='64' alt='Easy difficulty' src='../../starfish.png' /></a>
            <h5>Easy</h5>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12'>
            <a href='#home'><img height='64' width='64' alt='Medium difficulty' src='../../pirate-1.png' /></a>
            <h5>Medium</h5>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12'>
            <a href='#home'><img height='64' width='64' alt='Hard difficulty' src='../../octopus.png' /></a>
            <h5>Hard</h5>
          </div>
        </div>
      </div>
    )
  }
}

export default Difficulty
