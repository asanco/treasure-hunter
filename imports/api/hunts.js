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
    if (!Meteor.user()) throw new Meteor.Error('You are not authorized')
    let clue1 = hunt.clue1.message && hunt.clue1.hint && hunt.clue1.lat && hunt.clue1.lng
    let clue2 = hunt.clue2.message && hunt.clue2.hint && hunt.clue2.lat && hunt.clue2.lng
    let clue3 = hunt.clue3.message && hunt.clue3.hint && hunt.clue3.lat && hunt.clue3.lng
    if (!(hunt.name && hunt.difficulty && clue1 && clue2 && clue3)) throw new Meteor.Error('Must fill all fields')
    let existent = Hunts.findOne({
      name: hunt.name
    })
    if (existent) throw new Meteor.Error('A hunt with that name already exists')
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
