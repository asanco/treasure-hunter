import React, { Component } from 'react'
import MyMap from './MyMap'
import Autocomplete from 'react-google-autocomplete'

class Design extends Component {


  constructor (props) {
    super(props)
    this.state = {
      name: '',
      message1: '',
      hint1: '',
      lat1: '',
      lnt1: '',
      message2: '',
      hint2: '',
      lat2:'',
      lnt2: '',
      message3: '',
      hint3: '',
      lat3: '',
      lnt3: '',
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
              <input required className='form-check-input' type='radio' name='difficulty' value='hard' onChange={this.handleInputChange} checked={this.state.difficulty === 'hard'} />Easy
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
                    style={{width: '100%'}}
                    onPlaceSelected={(place) => {
                      console.log(place);
                      this.setState({lat1:place.geometry.location.lat(), lnt1:place.geometry.location.lng()})
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
                    style={{width: '100%'}}
                    onPlaceSelected={(place) => {
                      console.log(place);
                      this.setState({lat2:place.geometry.location.lat(), lnt2:place.geometry.location.lng()})
                    }}
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
                    style={{width: '100%'}}
                    onPlaceSelected={(place) => {
                      console.log(place.geometry.location.lat());
                      this.setState({lat3:place.geometry.location.lat(), lnt3:place.geometry.location.lng()})
                      console.log(this.state.lat3)
                    }}

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
      clue1: {
        message: this.state.message1,
        hint: this.state.hint1
      },
      clue2: {
        message: this.state.message2,
        hint: this.state.hint2
      },
      clue3: {
        message: this.state.message3,
        hint: this.state.hint3
      }
      }
    if (this.props.createHunt(hunt)) this.props.history.push('hunts')
  }
}

export default Design
