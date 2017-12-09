import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'
import { Hunts } from './hunts.js'

export const Huntings = new Mongo.Collection('huntings')

if (Meteor.isServer) {
  Meteor.publish('huntings', function huntingssPublication () {
    return Huntings.find()
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
      let hunting = Huntings.find({
        userId: Meteor.user()._id,
        huntId: huntId
      })
      if (hunting) throw new Meteor.Error('Hunting already started')
      return Huntings.insert({
        userId: Meteor.user()._id,
        huntId: huntId
      })
    }
  }
})
