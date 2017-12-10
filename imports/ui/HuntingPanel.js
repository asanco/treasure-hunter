import React, { Component } from 'react'
import Autocomplete from 'react-google-autocomplete'

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
        {this.props.hunting.clues[2].done &&
        <h3>Hunting Finished</h3>
        }
        <h3>Score: {this.props.hunting.score}</h3>
        <h3>Clues</h3>
        {this.renderClues()}
        {!this.props.hunting.clues[2].done &&
          <Autocomplete
            style={{width: '100%'}}
            onPlaceSelected={(place) => {
              this.props.selectClue({lat: place.geometry.location.lat(), lng: place.geometry.location.lng()})
            }}
        />
        }
        {!this.props.hunting.clues[2].done && this.props.clue &&
        <div>
          <button type='button' className='btn btn-success' onClick={this.props.clueTry}>Try It</button>
        </div>
        }
        {!this.props.hunting.clues[2].done &&
          <div>
            <h5>Help? A hint for 20 points</h5>
            <button className='btn btn-default' onClick={this.props.hintAsk}>Hint</button>
          </div>
        }
      </div>
    )
  }
}

export default HuntingPanel
