import React, { Component } from 'react'

class GamePanel extends Component {
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
            </div>
          </div>
        )
      }
    })
  }

  render () {
    return (
      <div>
        <h3>Score: {this.props.score}</h3>
        <h3>Clues</h3>
        {this.renderClues()}
        <h5>Help? Another hint for 1 point </h5>
        <button onClick={this.props.totalPoints}>Hint</button>
      </div>
    )
  }
}

export default GamePanel
