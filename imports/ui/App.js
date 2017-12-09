import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import { Hunts } from '../api/hunts.js'

import NavBar from './NavBar'
import Error from './Error'

import Home from './Home'
import Hunters from './Hunters'
import Huntss from './Hunts'
import Create from './Create'
import Hunting from './Hunting'
import Difficulty from './Difficulty'

import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null
    }
  }

  render () {
    return (
      <div>
        <NavBar user={this.props.user} />
        <main>
          <Switch>
            <Route exact path='/' render={(props) => <Home />} />
            <Route path='/hunts' render={(props) => <Huntss hunts={this.props.hunts} />} />
            <Route path='/hunters' render={(props) => <Hunters />} />
            <Route path='/create' render={(props) => <Create />} />
            <Route path='/hunting' render={(props) => <Hunting />} />
            <Route path='/difficulty' render={(props) => <Difficulty />} />
          </Switch>
        </main>
        <Error error={this.state.error} onClose={this.closeErrorModal.bind(this)} />
      </div>
    )
  }

  errorModal (error) {
    this.setState({error: error})
  }

  closeErrorModal () {
    this.setState({error: null})
  }
}

export default withTracker(() => {
  Meteor.subscribe('hunts')

  return {
    user: Meteor.user(),
    hunts: Hunts.find({}).fetch()
  }
})(App)
