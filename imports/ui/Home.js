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
              <br/>
              <h4>Play a single player game</h4>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12 center'>
              <a href='#create'><img height='128' width='128' alt='Message in a bottle icon for creating your own treasure hunt' src='../../message-in-a-bottle.png' /></a>
              <h4>Create your own hunt</h4>
            </div>
          </div>
        </div>

        <div className='col-sm-12' >
        <br/>
        <br/>
          <h2>Enjoy this masterpiece, we were forced to develop it instead of spending quality december time with our loved ones!</h2>
        </div>
      </div>
    )
  }
}

export default Welcome
