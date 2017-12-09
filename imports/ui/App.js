/* global swal */

import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import { Hunts } from '../api/hunts.js'
import { Huntings } from '../api/huntings.js'

import NavBar from './NavBar'

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
      modals: {},
      hunting: null
    }
  }

  render () {
    return (
      <div>
        <NavBar user={this.props.user} />
        <main>
          <Switch>
            <Route exact path='/' render={(props) => <Home />} />
            <Route path='/hunts' render={(props) => <Huntss user={this.props.user} hunts={this.props.hunts} newHunting={this.newHunting.bind(this)} {...props} />} />
            <Route path='/hunters' render={(props) => <Hunters />} />
            <Route path='/create' render={(props) => <Create createHunt={this.newHunt.bind(this)} {...props} />} />
            <Route path='/hunting' render={(props) => <Hunting hunting={this.state.hunting} />} />
            <Route path='/difficulty' render={(props) => <Difficulty />} />
          </Switch>
        </main>
      </div>
    )
  }

  componentWillReceiveProps (nextProps) {
    if (this.state.hunting) {
      let hunting = nextProps.huntings.filter(hunting => {
        return hunting._id === this.state.hunting._id
      })[0]
      this.setState({
        hunting: hunting
      })
    }
  }

  newHunt (hunt, cb) {
    return Meteor.call('hunts.newHunt', hunt, (err) => {
      if (err) {
        swal(
          'Oops...',
          err.error,
          'error'
        )
        cb(err)
      } else {
        swal(
          'Message',
          'Hunt sucesfully created',
          'info'
        )
        cb(null)
      }
    })
  }

  newHunting (huntId, cb) {
    Meteor.call('huntings.newHunting', huntId, (err, huntingId) => {
      if (err) {
        swal(
          'Oops...',
          err.error,
          'error'
        )
        cb(err)
      } else {
        console.log(huntingId)
        this.setState({
          hunting: {
            _id: huntingId
          }
        })
        cb(null)
      }
    })
  }
}

export default withTracker(() => {
  Meteor.subscribe('hunts')
  Meteor.subscribe('huntings')

  return {
    user: Meteor.user(),
    hunts: Hunts.find({}).fetch(),
    huntings: Huntings.find({}).fetch()
  }
})(App)
