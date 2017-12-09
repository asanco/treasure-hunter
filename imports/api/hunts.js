import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'

export const Hunts = new Mongo.Collection('hunts')

if (Meteor.isServer) {
  Meteor.publish('hunts', function huntsPublication () {
    return Hunts.find()
  })

  Meteor.methods({

  })
}

Meteor.methods({
  'hunts.newHunt' (name) {
    if (!Meteor.user()._id) throw new Meteor.Error('You are not authorized')
    Hunts.insert({
      name: name,
      creator: {
        username: Meteor.user().username,
        _id: Meteor.user()._id,
        ratings: []
      }
    })
  }
})
