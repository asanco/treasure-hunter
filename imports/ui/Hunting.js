import React, { Component } from 'react'

import HuntingMap from './HuntingMap'
import HuntingPanel from './HuntingPanel'

class Hunting extends Component {
  constructor (props) {
    super(props)
    this.state = {
      clue: null
    }
  }

  selectClue (coordinates) {
    this.setState({
      clue: coordinates
    })
  }

  clueTry () {
    this.props.clueTry(this.state.clue)
  }

  render () {
    return (
      <div>
        <h1>Hunting</h1>
        <div className='row'>
          <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
            <HuntingMap hunting={this.props.hunting} clue={this.state.clue} />
          </div>
          <div className='col-lg-5 col-md-5 col-sm-12 col-xs-12 huntingPanel'>
            <HuntingPanel hunting={this.props.hunting} clue={this.state.clue} selectClue={this.selectClue.bind(this)} clueTry={this.clueTry.bind(this)} hintAsk={this.props.hintAsk} />
          </div>
        </div>

      </div>
    )
  }
}

export default Hunting
