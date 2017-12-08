import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import { Hunts } from '../api/hunts.js'

import NavBar from './NavBar'
import Error from './Error'

import Home from './Home'
import Design from './Design'

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
        <NavBar />
        <main>
          <Switch>
            <Route exact path='/' render={(props) => <Home hunts={this.props.hunts} />} />
            <Route path='/home' render={(props) => <Home hunts={this.props.hunts} />} />
            <Route path='/design' render={(props) => <Design />} />
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
    hunts: Hunts.find({}).fetch()
  }
})(App)
