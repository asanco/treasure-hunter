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
      let huntingId = Huntings.insert({
        userId: Meteor.user()._id,
        huntId: huntId,
        clues: [{
          message: hunt.clues[0].message
        }, {}, {}],
        score: 100
      })
      Meteor.call('scores.createScore', huntingId)
      return huntingId
    }
  },
  'huntings.hintAsk' (huntingId) {
    if (!Meteor.user()) throw new Meteor.Error('You are not authorized')
    let hunting = Huntings.findOne({_id: huntingId})
    if (!hunting) throw new Meteor.Error('Invalid hunting hunt')
    let hunt = Hunts.findOne({_id: hunting.huntId})
    if (!hunt) throw new Meteor.Error('Invalid hunting')
    if (hunting.clues[2].done) throw new Meteor.Error('Hunting was already finished')
    let clueNumber
    if (!hunting.clues[0].done) clueNumber = 0
    else if (!hunting.clues[1].done) clueNumber = 1
    else clueNumber = 2
    if (hunting.clues[clueNumber].hint) throw new Meteor.Error('Hint already asked')
    hunting.clues[clueNumber].hint = hunt.clues[clueNumber].hint
    hunting.clues[clueNumber].hints = hunt.clues[clueNumber].hints
    hunting.score = hunting.score - 20
    return Huntings.update(hunting._id, hunting)
  },
  'huntings.clueTry' (huntingId, coordinates) {
    if (!Meteor.user()) throw new Meteor.Error('You are not authorized')
    let hunting = Huntings.findOne({_id: huntingId})
    if (!hunting) throw new Meteor.Error('Invalid hunting hunt')
    let hunt = Hunts.findOne({_id: hunting.huntId})
    if (!hunt) throw new Meteor.Error('Invalid hunting')
    if (hunting.clues[2].done) throw new Meteor.Error('Hunting was already finished')
    if (!(coordinates.lat || coordinates.lng)) throw new Meteor.Error('Invalid Coordinates')
    let clueNumber
    if (!hunting.clues[0].done) clueNumber = 0
    else if (!hunting.clues[1].done) clueNumber = 1
    else clueNumber = 2
    if ((Math.abs(hunt.clues[clueNumber].lat - coordinates.lat) + Math.abs(hunt.clues[clueNumber].lng - coordinates.lng)) < 0.01) {
      hunting.clues[clueNumber].lat = hunt.clues[clueNumber].lat
      hunting.clues[clueNumber].lng = hunt.clues[clueNumber].lng
      hunting.clues[clueNumber].done = true
      if (clueNumber !== 2) hunting.clues[clueNumber + 1].message = hunt.clues[clueNumber + 1].message
      Huntings.update(hunting._id, hunting)
      if (clueNumber === 2) Meteor.call('scores.addScore', huntingId)
      return true
    } else {
      hunting.score -= 5
      Huntings.update(hunting._id, hunting)
      return false
    }
  }
})
