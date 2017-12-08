import React, { Component } from 'react'

class Welcome extends Component {
  render () {
    return (
      <div>
        <h1>Treasure Hunter</h1>
        <div className='col-sm-12' >
          <h2> Welcome to treasure hunter, the game where you navigate across the (digital) world to find hidden clues and treasure!</h2>
          <h3>What would you like to do?</h3>
        </div>
        <div className='col-sm-12'>
          <div className='row'>
            <div className='col-lg-4 col-md-4 col-sm-4 col-xs-4'>
              <a href='#difficulty'><img height='64' width='64' alt='Ship icon for single player game' src='../../ship.png' /></a>
              <h4>Play a single player game</h4>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-4 col-xs-4'>
              <a href='#difficulty'><img height='64' width='64' alt='Clashing sabers icon for versus match' src='../../saber.png' /></a>
              <h4>Play a versus match</h4>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-4 col-xs-4'>
              <a href='#design'><img height='64' width='64' alt='Message in a bottle icon for creating your own treasure hunt' src='../../message-in-a-bottle.png' /></a>
              <h4>Create your own hunt</h4>
            </div>
          </div>
        </div>

        <div className='col-sm-12' >
          <h2>Enjoy this masterpiece, we were forced to develop it instead of spending quality december time with our loved ones!</h2>
        </div>
      </div>
    )
  }
}

export default Welcome
