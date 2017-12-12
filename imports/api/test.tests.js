/* global describe it beforeEach afterEach */

import { Meteor } from 'meteor/meteor'
import { assert } from 'meteor/practicalmeteor:chai'
import { resetDatabase } from 'meteor/xolvio:cleaner'
import { Factory } from 'meteor/dburles:factory'
import { sinon } from 'meteor/practicalmeteor:sinon'
import faker from 'faker'

import { Hunts } from './hunts.js'
import { Huntings } from './huntings.js'
import { Scores } from './scores.js'

var user
describe('hunts', function () {
  beforeEach(function () {
    resetDatabase()
    Factory.define('user', Meteor.users, {
      username: faker.name.findName(),
      _id: faker.random.uuid()
    })
    user = Factory.create('user')
    sinon.stub(Meteor, 'user')
    Meteor.user.returns(user)
  })
  afterEach(function () {
    Meteor.user.restore()
  })
  describe('newHunt', function () {
    it('should create a hunt', function () {
      let hunt = {
        name: 'test',
        difficulty: 'easy',
        clues: [{
          message: 'Message1',
          hint: 'Hint1',
          lat: 0.1,
          lng: 0.1
        }, {
          message: 'Message2',
          hint: 'Hint2',
          lat: 10,
          lng: 10
        }, {
          message: 'Message3',
          hint: 'Hint3',
          lat: -10,
          lng: -10
        }]
      }
      let huntId = Meteor.call('hunts.newHunt', hunt)
      hunt = Hunts.findOne({_id: huntId})
      assert(hunt)
    })
  })
})

describe('huntings', function () {
  var huntId
  beforeEach(function () {
    resetDatabase()
    Factory.define('user', Meteor.users, {
      username: faker.name.findName(),
      _id: faker.random.uuid()
    })
    user = Factory.create('user')
    sinon.stub(Meteor, 'user')
    Meteor.user.returns(user)
    let hunt = {
      name: 'test',
      difficulty: 'easy',
      clues: [{
        message: 'Message1',
        hint: 'Hint1',
        lat: 0.1,
        lng: 0.1
      }, {
        message: 'Message2',
        hint: 'Hint2',
        lat: 10,
        lng: 10
      }, {
        message: 'Message3',
        hint: 'Hint3',
        lat: -10,
        lng: -10
      }]
    }
    huntId = Meteor.call('hunts.newHunt', hunt)
    Meteor.user.restore()

    Factory.define('user', Meteor.users, {
      username: faker.name.findName(),
      _id: faker.random.uuid()
    })
    user = Factory.create('user')
    sinon.stub(Meteor, 'user')
    Meteor.user.returns(user)
    let huntingId = Meteor.call('huntings.newHunting', huntId)
    let hunting = Huntings.findOne({_id: huntingId})
    assert(hunting)
  })

  afterEach(function () {
    Meteor.user.restore()
  })

  describe('newHunting', function () {
    it('should create the hunting', function () {
      let huntingId = Meteor.call('huntings.newHunting', huntId)
      assert(huntingId)
    })
  })

  describe('hintAsk', function () {
    it('should add the hint of the clue adn decrease 20 points', function () {
      let huntingId = Meteor.call('huntings.newHunting', huntId)
      let hunting = Huntings.findOne({_id: huntingId})
      assert(!hunting.clues[0].hint)
      Meteor.call('huntings.hintAsk', huntingId)
      hunting = Huntings.findOne({_id: huntingId})
      assert(hunting.clues[0].hint)
      assert(hunting.score === 80)
    })
  })

  describe('clueTry', function () {
    it('should verify the try, if it is wrong decrease a point, otherwise add the next clue', function () {
      let huntingId = Meteor.call('huntings.newHunting', huntId)
      let hunting = Huntings.findOne({_id: huntingId})
      assert(hunting.score === 100)
      let ans = Meteor.call('huntings.clueTry', huntingId, {lat: 100, lng: 100})
      hunting = Huntings.findOne({_id: huntingId})
      assert(!ans)
      assert(hunting.score === 95)
      ans = Meteor.call('huntings.clueTry', huntingId, {lat: 0.1, lng: 0.1})
      assert(ans)
      assert(hunting.score === 95)
    })
  })
})

//Sería mejor tener un .test para cada archivo del back. La idea es tener todo un poco más modularizado.
