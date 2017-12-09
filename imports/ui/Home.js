import React, { Component } from 'react'

<<<<<<< HEAD
<<<<<<< HEAD
import AccountsUIWrapper from './AccountsUIWrapper.js'
import HuntList from './HuntList'
import MyMap from './MyMap'
import GamePanel from './GamePanel'

class Home extends Component {
  constructor (props) {
    super(props)
    console.log('HOME')
  }
  render () {
    return (
      <div>
        <AccountsUIWrapper />
        <HuntList hunts={this.props.hunts} />
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
            <MyMap />
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 gamePanel">
            <GamePanel />
          </div>
        </div>
        Zoom level: 1
=======
class Welcome extends Component {
  render () {
    return (
      <div>
=======
class Welcome extends Component {
  render () {
    return (
      <div>
>>>>>>> 8c79e3ebb64b3b45b7fb7e6b577c3781beb65d71
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
<<<<<<< HEAD
>>>>>>> 8c79e3ebb64b3b45b7fb7e6b577c3781beb65d71
=======
>>>>>>> 8c79e3ebb64b3b45b7fb7e6b577c3781beb65d71
      </div>
    )
  }
}

export default Welcome
