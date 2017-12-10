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
      hunt.clues.forEach(clue => {
        choices.push({lat: clue.lat, lng: clue.lng})
      })
      choices.sort((a, b) => {
        return a.lat - b.lat
      })
      return Huntings.insert({
        userId: Meteor.user()._id,
        huntId: huntId,
        clues: [{
          message: hunt.clues[0].message
        }, {}, {}],
        choices: choices,
        score: 100
      })
    }
  },
  'huntings.try' (huntingId, coordinates) {
    if (!Meteor.user()) throw new Meteor.Error('You are not authorized')
    let hunting = Huntings.find({_id: huntingId})
    if (!hunting) throw new Meteor.Error('Invalid hunting hunt')
    let hunt = Hunts.findOne({_id: hunting.huntId})
    if (!hunt) throw new Meteor.Error('Invalid hunting')
    if (hunting.clues[2].done) throw new Meteor.Error('Hunting was already finished')
    let clueNumber
    if (!hunting.clues[0].done) clueNumber = 0
    else if (!hunting.clues[1].done) clueNumber = 1
    else clueNumber = 2
    if ((Math.abs(hunting.clues[clueNumber].coordinates.lat - coordinates.lat) + Math.abs(hunting.clues[clueNumber].coordinates.lng - coordinates.lng)) < 0.0001) {
      hunting.clues[clueNumber].done = true
      if (clueNumber !== 2) hunting.clues[clueNumber + 1].message = hunt.clues[clueNumber + 1].message
      return Huntings.update(hunting._id, hunting)
    }
  }
})
