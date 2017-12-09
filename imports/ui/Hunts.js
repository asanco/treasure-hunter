import React, { Component } from 'react'
import Hunt from './Hunt'

class HuntList extends Component {
  renderHunts () {
    return this.props.hunts.map(hunt => {
      return (
        <div className='col-sm-4' key={hunt._id}>
          <Hunt hunt={hunt} goToHunt={this.props.goToHunt} />
        </div>
      )
    })
  }

  render () {
    return (
      <div>
        <h1>Hunts</h1>
        <div className='row' >
          {this.renderHunts()}
        </div>
      </div>
    )
  }
}

export default HuntList
