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
    if (!(hunt.name && hunt.difficulty)) throw new Meteor.Error('Must fill all fields')
    if (!(hunt.difficulty === 'easy' || hunt.difficulty === 'medium' || hunt.difficulty === 'hard')) throw new Meteor.Error('Difficulty not valid')
    hunt.clues.forEach((clue, i) => {
      if (!(clue.message && clue.hint && clue.lat && clue.lng)) throw new Meteor.Error('Clue ' + i + ' is incomplete')
    })
    let existent = Hunts.findOne({
      name: hunt.name
    })
    if (existent) throw new Meteor.Error('A hunt with that name already exists')
    let difficultyRange = hunt.difficulty === 'easy' ? 10 : hunt.difficulty === 'medium' ? 20 : 30
    hunt.clues.forEach(clue => {
      let hints = []
      hints.push({lat: clue.lat + (Math.random() * (difficultyRange - (0)) + (-0)), lng: clue.lng + (Math.random() * (difficultyRange - (0)) + (-0))})
      hints.push({lat: clue.lat + (Math.random() * (difficultyRange - (0)) + (-0)), lng: clue.lng - (Math.random() * (difficultyRange - (0)) + (-0))})
      hints.push({lat: clue.lat - (Math.random() * (difficultyRange - (0)) + (-0)), lng: clue.lng - (Math.random() * (difficultyRange - (0)) + (-0))})
      hints.push({lat: clue.lat - (Math.random() * (difficultyRange - (0)) + (-0)), lng: clue.lng + (Math.random() * (difficultyRange - (0)) + (-0))})
      clue.hints = hints
    })
    return Hunts.insert({
      name: hunt.name,
      creator: {
        username: Meteor.user().username,
        _id: Meteor.user()._id
      },
      difficulty: hunt.difficulty,
      clues: hunt.clues
    })
  }
})
