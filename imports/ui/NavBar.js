
import React, { Component } from 'react'
import AccountsUIWrapper from './AccountsUIWrapper.js'

class NavBar extends Component {
  render () {
    return (
      <div >
      <nav className='navbar sticky-top navbar-dark navbar navbar-expand-lg'>
          <a href='#'><img height='64' width='64' alt='Website icon of a map' src='../../treasure-map.png' /></a>
          <a className='navbar-brand' href='#'>Treasure Hunter</a>
          <ul className='navbar-nav'>
            <AccountsUIWrapper />
          </ul>

          <ul className='nav navbar-nav ml-auto'>
              <li className='nav-item'><a className='nav-link' href='#hunts'>Hunts</a></li>
              <li className='nav-item'><a className='nav-link' href='#hunters'>Hunters</a></li>
              {this.props.user &&
                <li className='nav-item'><a className='nav-link' href='#create'>Create a Hunt</a></li>
              }
            </ul>
          </nav>
      </div>
    )
  }
}

export default NavBar
