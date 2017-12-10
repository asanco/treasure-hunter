import React, { Component } from 'react'

class HuntingPanel extends Component {
  renderClues () {
    return this.props.hunting.clues.map((clue, i) => {
      if (clue.message) {
        return (
          <div className='row' key={i}>
            <div className='col-sm-3'>
              <h4>{i + 1}</h4>
            </div>
            <div className='col-sm-9'>
              <h4>{clue.message}</h4>
              {clue.hint &&
              <h4>Hint: {clue.hint}</h4>
              }
            </div>
          </div>
        )
      }
    })
  }

  render () {
    return (
      <div>
        <h3>Score: {this.props.hunting.score}</h3>
        <h3>Clues</h3>
        {this.renderClues()}
        {this.props.clue &&
        <div>
          <h3>Selected Answer: {this.props.clue.lat},{this.props.clue.lng}</h3>
          <button type='button' className='btn btn-success' onClick={this.props.clueTry}>Try It</button>
        </div>
        }
        <h5>Help? A hint for 20 points</h5>
        <button className='btn btn-default' onClick={this.props.hintAsk}>Hint</button>
      </div>
    )
  }
}

export default HuntingPanel
