import React, { Component } from 'react'

import AccountsUIWrapper from './AccountsUIWrapper.js'
import HuntList from './HuntList'
import MyMap from './MyMap'

class Home extends Component {
  constructor (props) {
    super(props)
    console.log('HOME')
  }
  render () {
    return (
      <div>
        <AccountsUIWrapper />
        <h1>Treasure Hunter</h1>
        <HuntList hunts={this.props.hunts} />
        <MyMap />
      </div>
    )
  }
}

export default Home
