import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'
import { Hunts } from './hunts.js'
import { Huntings } from './huntings.js'

export const Scores = new Mongo.Collection('scores')

if (Meteor.isServer) {
  // this code only runs on the server
  Meteor.publish('scores', function userScoresPublication () {
    return Scores.find({})
  })

  Meteor.methods({
    'scores.createScore' (huntingId) {
      let hunting = Huntings.findOne({_id: huntingId})
      if (!hunting) throw new Meteor.Error('Hunting does not exist')
      let hunt = Hunts.findOne({_id: hunting.huntId})
      if (!hunt) throw new Meteor.Error('Hunt does not exist')

      let score = Scores.findOne({
        username: Meteor.user().username
      })
      if (!score) {
        score = {
          username: Meteor.user().username,
          scores: [],
          score: 0,
          average: 0
        }
      }

      let existedScore = score.scores.filter(score => {
        return score.huntName === hunt.name
      })
      if (existedScore.length === 0) {
        score.scores.push({
          huntName: hunt.name,
          huntingId: huntingId,
          score: -100
        })
        Scores.upsert(score._id, score)
      }
    },
    'scores.addScore' (huntingId) {
      let hunting = Huntings.findOne({
        _id: huntingId,
        userId: Meteor.user()._id
      })
      if (!hunting) throw new Meteor.Error('Hunting does not exist')
      if (!hunting.clues[2].done) throw new Meteor.Error('Hunting not finished yet')
      if (hunting.countedScore) throw new Meteor.Error('Hunting score was already counted')
      hunting.countedScore = true
      Huntings.update({_id: huntingId}, hunting)

      let scores = Scores.findOne({username: Meteor.user().username})

      let huntings = scores.scores.length
      let scoreSum = 0
      scores.scores.forEach(score => {
        if (score.huntingId === huntingId) {
          score.score = hunting.score
        }
        scoreSum += score.score
      })

      scores.score = scoreSum
      scores.average = parseInt(100 * scoreSum / huntings) / 100
      Scores.update({username: Meteor.user().username}, scores)
    }
  })
}
