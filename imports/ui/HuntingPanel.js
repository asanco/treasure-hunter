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
            <div className='col-sm-3'>
              <h4>{i + 1}</h4>
            </div>

            <div className={i === 5 ? 'clue' + i : 'clue2'} >
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
          types={['establishment', 'geocode']}
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
        {this.props.hunting.clues[2].done &&
        <div>
          {
            this.props.hunting.rated
            ? <h3>Thanks for rating this hunt</h3>
            : <div>
              <h3>How would you like to rate this hunt?</h3>
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
