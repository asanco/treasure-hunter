import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'

import { Meteor } from 'meteor/meteor'
import { withTracker } from 'meteor/react-meteor-data'
import { Hunts } from '../api/hunts.js'
import { Huntings } from '../api/huntings.js'

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
      error: null,
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
            <Route path='/hunts' render={(props) => <Huntss hunts={this.props.hunts} {...props} newHunting={this.newHunting.bind(this)} />} />
            <Route path='/hunters' render={(props) => <Hunters />} />
            <Route path='/create' render={(props) => <Create createHunt={this.newHunt.bind(this)} {...props} />} />
            <Route path='/hunting' render={(props) => <Hunting hunting={this.state.hunting} />} />
            <Route path='/difficulty' render={(props) => <Difficulty />} />
          </Switch>
        </main>
        <Error error={this.state.error} onClose={this.closeErrorModal.bind(this)} />
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

  newHunt (hunt) {
    console.log('SE ESTA LLAMANDO MALDITA SEA')
    Meteor.call('hunts.newHunt', hunt, (err) => {
      if (err) {
        this.setState({errorMessage: err.message})
        return false
      } else return true
    })
  }

  newHunting (huntId) {
    Meteor.call('hunting.newHunting', huntId, (err, huntingId) => {
      if (err) this.setState({errorMessage: err.message})
      else {
        this.setState({
          hunting: {
            _id: huntingId
          }
        })
      }
    })
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
  Meteor.subscribe('huntings')

  return {
    user: Meteor.user(),
    hunts: Hunts.find({}).fetch(),
    huntings: Huntings.find({}).fetch()
  }
})(App)
