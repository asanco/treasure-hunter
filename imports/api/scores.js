import { Mongo } from 'meteor/mongo'
import { Meteor } from 'meteor/meteor'

export const Scores = new Mongo.Collection('scores')

if (Meteor.isServer) {
  // this code only runs on the server
  Meteor.publish('scores', function userScoresPublication () {
    return Scores.find({})
  })

  Meteor.methods({
    'scores.addScore' (huntingId) {

    }
  })
}
