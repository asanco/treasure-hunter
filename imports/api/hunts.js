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
  'hunts.newHunt' (hunt) {
    if (!Meteor.user()._id) throw new Meteor.Error('You are not authorized')
    if (!(hunt.name && hunt.difficulty && hunt.clue1 && hunt.clue2 && hunt.clue3)) throw new Meteor.Error('Must fill all fields')
    return Hunts.insert({
      name: hunt.name,
      creator: {
        username: Meteor.user().username,
        _id: Meteor.user()._id
      },
      difficulty: hunt.difficulty,
      clue1: hunt.clue1,
      clue2: hunt.clue2,
      clue3: hunt.clue3,
      ratings: []
    })
  }
})
