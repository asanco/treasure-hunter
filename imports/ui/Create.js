import React, { Component } from 'react'

class Design extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render () {
    return (
      <div>
        <h1>Create a Hunt</h1>

        <div>
          <h2>Difficulty:</h2>
          <div className='row'>
            <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12'>
              <a href='#home'><img height='64' width='64' alt='Easy difficulty' src='../../starfish.png' /></a>
              <h3>Easy</h3>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12'>
              <a href='#home'><img height='64' width='64' alt='Medium difficulty' src='../../pirate-1.png' /></a>
              <h3>Medium</h3>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-4 col-xs-12'>
              <a href='#home'><img height='64' width='64' alt='Hard difficulty' src='../../octopus.png' /></a>
              <h3>Hard</h3>
            </div>
          </div>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className='form-group row'>
            <label htmlFor='name' className='col-sm-2 col-form-label'>Name</label>
            <div className='col-sm-10'>
              <input type='text' className='form-control' name='name' id='name' value={this.state.name} onChange={this.handleInputChange} />
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
  }
}

export default Design
