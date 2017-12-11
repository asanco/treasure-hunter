import React, { Component } from 'react'

class Welcome extends Component {
  render () {
    return (
      <div className='main'>
        <div className='col-lg-6 col-md-4 col-sm-12' >
          <h3> Welcome to treasure hunter, the game where you navigate across the (digital) world to find hidden clues and treasure!</h3>
          <br/>
          <h4>What would you like to do?</h4>
          <br/>
          <br/>
        </div>
        <div className='col-lg-6 col-md-4 col-sm-12' >
        </div>
        <div className='col-sm-12'>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12 center'>
              <a href='#hunts'><img height='128' width='128' alt='Ship icon for single player game' src='../../ship.png' /></a>
              <br/><br/>
              <h5>Start a player-made hunt</h5>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12 center'>
              <a href='#create'><img height='128' width='128' alt='Message in a bottle icon for creating your own treasure hunt' src='../../message-in-a-bottle.png' /></a>
              <br/><br/>
              <h5>Create your own hunt</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome
