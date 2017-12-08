import React, { Component } from 'react'

class Welcome extends Component {
  constructor (props) {
    super(props)
    console.log('WELCOME')
  }

  render () {
    return (
      <div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          <h4> Welcome to treasure hunter, the game where you navigate across the (digital) world to find hidden clues and treasure!</h4>
          <h4>What would you like to do?</h4>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <a href="#difficulty"><img height='64' width='64' alt='Ship icon for single player game' src='../../ship.png' /></a>
            <h5>Play a single player game</h5>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <a href="#difficulty"><img height='64' width='64' alt='Clashing sabers icon for versus match' src='../../saber.png' /></a>
            <h5>Play a versus match</h5>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
            <a href="#design"><img height='64' width='64' alt='Message in a bottle icon for creating your own treasure hunt' src='../../message-in-a-bottle.png' /></a>
            <h5>Create your own hunt</h5>
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome
