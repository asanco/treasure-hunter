import React, { Component } from 'react'
import Autocomplete from 'react-google-autocomplete'

class Create extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      message1: '',
      hint1: '',
      lat1: '',
      lng1: '',
      message2: '',
      hint2: '',
      lat2: '',
      lng2: '',
      message3: '',
      hint3: '',
      lat3: '',
      lng3: '',
      difficulty: 'medium'
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render () {
    return (
      <div>
        <h1>Create a Hunt</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group row'>
            <label htmlFor='name' className='col-sm-2 col-form-label'>Name</label>
            <div className='col-sm-10'>
              <input type='text' required className='form-control' name='name' id='name' value={this.state.name} onChange={this.handleInputChange} />
            </div>
          </div>
          <div className='form-group row'>
            <label htmlFor='name' className='col-sm-2 col-form-label'>Dificulty</label>
            <div className='col-sm-3 form-check form-check-inline'>
              <input required className='form-check-input' type='radio' name='difficulty' value='easy' onChange={this.handleInputChange} checked={this.state.difficulty === 'easy'} />Easy
              <img height='64' width='64' alt='Easy difficulty' src='../../starfish.png' />
            </div>
            <div className='col-sm-3 form-check form-check-inline'>
              <input required className='form-check-input' type='radio' name='difficulty' value='medium' onChange={this.handleInputChange} checked={this.state.difficulty === 'medium'} />Medium
              <img height='64' width='64' alt='Medium difficulty' src='../../pirate-1.png' />
            </div>
            <div className='col-sm-3 form-check form-check-inline'>
              <input required className='form-check-input' type='radio' name='difficulty' value='hard' onChange={this.handleInputChange} checked={this.state.difficulty === 'hard'} />Hard
              <img height='64' width='64' alt='Hard difficulty' src='../../octopus.png' />
            </div>
          </div>
          <div className='form-group row'>
            <label className='col-sm-2 col-form-label'>Clue 1</label>
            <div className='col-sm-10'>
              <div className='form-group row'>
                <label htmlFor='name' className='col-sm-2 col-form-label'>Message</label>
                <div className='col-sm-10'>
                  <input required type='text' className='form-control' name='message1' id='name' value={this.state.message1} onChange={this.handleInputChange} />
                </div>
              </div>
              <div className='form-group row'>
                <label htmlFor='name' className='col-sm-2 col-form-label'>Hint</label>
                <div className='col-sm-10'>
                  <input required type='text' className='form-control' name='hint1' id='name' value={this.state.hint1} onChange={this.handleInputChange} />
                </div>
              </div>
              <div className='form-group row'>
                <label htmlFor='name' className='col-sm-2 col-form-label'>Location</label>
                <div className='col-sm-10'>
                  <Autocomplete
                    placeholder='Enter the location of a city, town, establishment or street'
                    types={['(cities)', 'point_of_interest']}
                    style={{width: '100%'}}
                    onPlaceSelected={(place) => {
                      this.setState({lat1: place.geometry.location.lat(), lng1: place.geometry.location.lng()})
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='form-group row'>
            <label className='col-sm-2 col-form-label'>Clue 2</label>
            <div className='col-sm-10'>
              <div className='form-group row'>
                <label htmlFor='name' className='col-sm-2 col-form-label'>Message</label>
                <div className='col-sm-10'>
                  <input required type='text' className='form-control' name='message2' id='name' value={this.state.message2} onChange={this.handleInputChange} />
                </div>
              </div>
              <div className='form-group row'>
                <label htmlFor='name' className='col-sm-2 col-form-label'>Hint</label>
                <div className='col-sm-10'>
                  <input required type='text' className='form-control' name='hint2' id='name' value={this.state.hint2} onChange={this.handleInputChange} />
                </div>
              </div>
              <div className='form-group row'>
                <label htmlFor='name' className='col-sm-2 col-form-label'>Location</label>
                <div className='col-sm-10'>
                  <Autocomplete
                    placeholder='Enter the location of a city, town, establishment or street'
                    style={{width: '100%'}}
                    onPlaceSelected={(place) => {
                      this.setState({lat2: place.geometry.location.lat(), lng2: place.geometry.location.lng()})
                    }}
                    types={['geocode']}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='form-group row'>
            <label className='col-sm-2 col-form-label'>Clue 3</label>
            <div className='col-sm-10'>
              <div className='form-group row'>
                <label htmlFor='name' className='col-sm-2 col-form-label'>Message</label>
                <div className='col-sm-10'>
                  <input required type='text' className='form-control' name='message3' id='name' value={this.state.message3} onChange={this.handleInputChange} />
                </div>
              </div>
              <div className='form-group row'>
                <label htmlFor='name' className='col-sm-2 col-form-label'>Hint</label>
                <div className='col-sm-10'>
                  <input required type='text' className='form-control' name='hint3' id='name' value={this.state.hint3} onChange={this.handleInputChange} />
                </div>
              </div>
              <div className='form-group row'>
                <label htmlFor='name' className='col-sm-2 col-form-label'>Location</label>
                <div className='col-sm-10'>
                  <Autocomplete
                    placeholder='Enter the location of a city, town, establishment or street'
                    style={{width: '100%'}}
                    onPlaceSelected={(place) => {
                      this.setState({lat3: place.geometry.location.lat(), lng3: place.geometry.location.lng()})
                    }}
                    types={['geocode']}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='form-group row'>
            <button type='submit' className='btn btn-secondary'>Create</button>
          </div>
        </form>
      </div>
    )
  }

  handleInputChange (e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit (e) {
    e.preventDefault()
    let hunt = {
      name: this.state.name,
      difficulty: this.state.difficulty,
      clues: [{
        message: this.state.message1,
        hint: this.state.hint1,
        lat: this.state.lat1,
        lng: this.state.lng1
      }, {
        message: this.state.message2,
        hint: this.state.hint2,
        lat: this.state.lat2,
        lng: this.state.lng2
      }, {
        message: this.state.message3,
        hint: this.state.hint3,
        lat: this.state.lat3,
        lng: this.state.lng3
      }]
    }

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))

    this.props.createHunt(hunt, (err) => {
      if (!err) this.props.history.push('hunts')
    })
  }
}

export default Create
