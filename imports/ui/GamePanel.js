import React, { Component } from 'react'

class GamePanel extends Component {

  render () {
    return (

      <div>
        <h3>Total points: {this.props.totalPoints }</h3>
        <h4>First clue:</h4>
        <h5>Help? Another hint for 1 point </h5>
        <button onClick={this.props.totalPoints + 1}>Hint</button>
      </div>
    )
  }
}

export default GamePanel
