import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'
import { Huntings } from './huntings.js'

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
      clues: hunt.clues,
      ratings: [],
      rating: -1
    })
  },
  'hunts.rate' (huntId, rating) {
    rating = Number(rating)
    if (rating < 0 || rating > 4) throw new Meteor.Error('Rating not valid')
    if (!Meteor.user()) throw new Meteor.Error('You are not authorized')
    let hunt = Hunts.findOne({_id: huntId})
    if (!hunt) throw new Meteor.Error('Hunt does not exist')
    let hunting = Huntings.findOne({huntId: huntId, userId: Meteor.user()._id})
    if (!hunting) throw new Meteor.Error('Users who have not experienced the hunt can not rate')
    if (!hunting.clues[2].done) throw new Meteor.Error('Can not rate an unfinished hunt')
    let alreadyRated = hunt.ratings.filter(rating => {
      return rating.userId === Meteor.user()._id
    })
    if (alreadyRated.length !== 0) throw new Meteor.Error('You already rated the hunt')
    hunt.ratings.push({
      userId: Meteor.user()._id,
      rating: rating
    })
    let ratingSum = 0
    hunt.ratings.forEach(r => {
      ratingSum += r.rating
    })
    hunt.rating = parseInt(100 * ratingSum / hunt.ratings.length) / 100
    Hunts.update(huntId, hunt)
    hunting.rated = true
    Huntings.update(hunting._id, hunting)
  }
})
