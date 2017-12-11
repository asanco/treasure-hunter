import React, { Component } from 'react'
import Hunt from './Hunt'

class HuntList extends Component {
  renderHunts () {
    return this.props.hunts.map(hunt => {
      return (
        <Hunt
          key={hunt._id}
          hunt={hunt}
          startHunting={this.props.newHunting}
          history={this.props.history}
          user={this.props.user}
        />
      )
    })
  }

  render () {
    return (
      <div className='main'>
        <h2 className='headers'>Hunts</h2>
        <div className='row'>
          {this.renderHunts()}
        </div>
      </div>
    )
  }
}

export default HuntList
