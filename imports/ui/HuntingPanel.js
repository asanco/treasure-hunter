import React, { Component } from 'react'
import Autocomplete from 'react-google-autocomplete'

class HuntingPanel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      rating: 4
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({rating: event.target.value})
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.huntRate(this.state.rating)
  }

  renderClues () {
    return this.props.hunting.clues.map((clue, i) => {
      if (clue.message) {
        return (
          <div className='row' key={i}>
            <div className='col-sm-1'>
              <h5 className={i === 0 ? 'clue1' : i=== 1 ? 'clue2' : 'clue3'}>{i + 1}</h5>
            </div>
            <div>
              <h5>{clue.message}</h5>
              {clue.hint &&
              <h6 className={i === 0 ? 'clue1' : i=== 1 ? 'clue2' : 'clue3'}>Hint: {clue.hint}</h6>
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
        <div className='center headers'>
        <h3>You found the treasure!</h3>
        <img height='100' width='100' alt='Treasure icon for winning the game' src='../../treasure.png' />
        </div>
        }
        <h3 className='center headers score-txt'>Score: {this.props.hunting.score}</h3>
        <h3 className='headers'>Clues:</h3>
        {this.renderClues()}
        <div>
        <br/>
        </div>
        {!this.props.hunting.clues[2].done &&
        <Autocomplete
          style={{width: '90%'}}
          onPlaceSelected={(place) => {
            this.props.selectClue({lat: place.geometry.location.lat(), lng: place.geometry.location.lng()})
          }}
          types={['establishment', 'geocode']}
        />
        }
        {!this.props.hunting.clues[2].done && this.props.clue &&
        <div>
          <br/>
          <button type='button' className='btn btn-success' onClick={this.props.clueTry}>Try It</button>
        </div>
        }
        {!this.props.hunting.clues[2].done &&
          <div>
            <br/>
            <h6>Help? A hint for 20 points</h6>
            <br/>
            <button className='btn btn-info btn-xs' onClick={this.props.hintAsk}>Hint</button>
          </div>
        }
        {this.props.hunting.clues[2].done &&
        <div className='center'>
          {
            this.props.hunting.rated
            ? <h5>Thanks for rating this hunt</h5>
            : <div>
              <h5>How would you like to rate this hunt?</h5>
              <form onSubmit={this.handleSubmit} className='form-inline'>
                <div className='form-group'>
                  <select value={this.state.rating} onChange={this.handleChange} className='form-control'>
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                  </select>
                </div>
                <button type='submit' className='btn btn-primary'>Rate</button>
              </form>
            </div>
          }
        </div>
        }
      </div>
    )
  }
}

export default HuntingPanel
