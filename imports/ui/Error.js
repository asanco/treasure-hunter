import React, { Component } from 'react'

class Error extends Component {
  render () {
    if (!this.props.error) {
      return null
    }

    return (
      <div className='error-modal-container'>
        <div className='error-modal'>
          <div>
            <h3>Error</h3>
          </div>
          <div>
            <p>{this.props.error}</p>
          </div>
          <div className='footer'>
            <button className='btn btn-default' onClick={this.props.onClose}>
              Entendido
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Error
