import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'
import { Hunts } from './hunts.js'

export const Huntings = new Mongo.Collection('huntings')

if (Meteor.isServer) {
  Meteor.publish('huntings', function huntingssPublication () {
    return Huntings.find({
      userId: Meteor.user() ? Meteor.user()._id : null
    })
  })

  Meteor.methods({

  })
}

Meteor.methods({
  'huntings.newHunting' (huntId) {
    if (!Meteor.user()) throw new Meteor.Error('You are not authorized')
    else {
      let hunt = Hunts.findOne({
        _id: huntId
      })
      if (!hunt) throw new Meteor.Error('Hunt not found')
      if (hunt.creator._id === Meteor.user()._id) throw new Meteor.Error('Can not start a hunting of an own hunt')
      let hunting = Huntings.findOne({
        userId: Meteor.user()._id,
        huntId: huntId
      })
      if (hunting) return hunting._id
      let choices = hunt.dummys
      choices.push({lat: hunt.clue1.lat, lng: hunt.clue1.lng})
      choices.push({lat: hunt.clue2.lat, lng: hunt.clue2.lng})
      choices.push({lat: hunt.clue3.lat, lng: hunt.clue3.lng})
      choices.sort((a, b) => {
        return a.lat - b.lat
      })
      return Huntings.insert({
        userId: Meteor.user()._id,
        huntId: huntId,
        clue1: {
          message: hunt.clue1.message
        },
        clue2: {},
        clue3: {},
        choices: choices
      })
    }
  }
})
