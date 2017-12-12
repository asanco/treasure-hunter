/* global swal */

import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import { Hunts } from '../api/hunts.js'
import { Huntings } from '../api/huntings.js'
import { Scores } from '../api/scores.js'

import NavBar from './NavBar'

import Home from './Home'
import Hunters from './Hunters'
import Huntss from './Hunts'
import CreateHunt from './CreateHunt'
import Hunting from './Hunting'

import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
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
            <Route path='/hunters' render={(props) => <Hunters scores={this.props.scores} />} />
            <Route path='/create' render={(props) => <CreateHunt createHunt={this.newHunt.bind(this)} {...props} />} />
            <Route path='/hunting' render={(props) => <Hunting hunting={this.state.hunting} hintAsk={this.hintAsk.bind(this)} clueTry={this.clueTry.bind(this)} huntRate={this.huntRate.bind(this)} />} />
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
          'Aargh!',
          err.error,
          'error'
        )
        cb(err)
      } else {
        swal(
          'Yo Ho Ho',
          'Hunt sucesfully created',
          'success'
        )
        cb(null)
      }
    })
  }

  newHunting (huntId, cb) {
    Meteor.call('huntings.newHunting', huntId, (err, huntingId) => {
      if (err) {
        swal(
          'Aargh!',
          err.error,
          'error'
        )
        cb(err)
      } else {
        this.setState({
          hunting: {
            _id: huntingId
          }
        })
        cb(null)
      }
    })
  }

  hintAsk () {
    Meteor.call('huntings.hintAsk', this.state.hunting._id, (err) => {
      if (err) {
        swal(
          'Aargh!',
          err.error,
          'error'
        )
      }
    })
  }

  clueTry (coordinates) {
    Meteor.call('huntings.clueTry', this.state.hunting._id, coordinates, (err, ans) => {
      if (err) {
        swal(
          'Aargh!',
          err.error,
          'error'
        )
      } else if (!ans) {
        swal(
          'Aargh!',
          'Wrong Answer',
          'error'
        )
      } else {
        swal(
          'Yo Ho Ho',
          'Good Answer Pal',
          'success'
        )
      }
    })
  }
  huntRate (rating) {
    Meteor.call('hunts.rate', this.state.hunting.huntId, rating, (err) => {
      if (err) {
        swal(
          'Aargh!',
          err.error,
          'error'
        )
      }
    })
  }
}

export default withTracker(() => {
  Meteor.subscribe('hunts')
  Meteor.subscribe('huntings')
  Meteor.subscribe('scores')

  return {
    user: Meteor.user(),
    hunts: Hunts.find({}).fetch(),
    huntings: Huntings.find({}).fetch(),
    scores: Scores.find({}).fetch()
  }
})(App)

/* Muy bien que declaren los globals al inicio del App (y que hayan usado SweetAlert, es muy chevere). Además, muy bien que usen tracker en vez de container ya que esta deprecated.
Me gusta que solo tengan los subscribe en la clase general.
