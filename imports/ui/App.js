import React, { Component } from 'react'
import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import { Hunts } from '../api/hunts.js'

import AccountsUIWrapper from './AccountsUIWrapper.js'
import HuntList from './HuntList'
import MyMap from './MyMap'
// import NavBar from './NavBar'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <AccountsUIWrapper />
        <h1>Treasure Hunter</h1>
        <div className='col-sm-3'>
          <HuntList hunts={this.props.hunts} />
        </div>
        <div className='col-sm-9'>
          <MyMap />
        </div>
      </div>
    )
  }
}

export default withTracker(() => {
  Meteor.subscribe('hunts')

  return {
    hunts: Hunts.find({}).fetch()
  }
})(App)
