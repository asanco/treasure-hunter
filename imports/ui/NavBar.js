
import React, { Component } from 'react'
import AccountsUIWrapper from './AccountsUIWrapper.js'

class NavBar extends Component {
  render () {
    return (
      <div >
        <nav className='navbar sticky-top navbar-dark navbar navbar-expand-lg'>
          <a href='#' className='navbar-img'><img height='50' width='50' alt='Website icon of a map' src='../../map-navbar.png' /></a>
          <a className='navbar-brand' href='#'>Treasure Hunter</a>
          <ul className='navbar-nav'>
            <AccountsUIWrapper />
          </ul>

          <ul className='nav navbar-nav ml-auto'>
            {this.props.user &&
              <li className='nav-item'><a className='nav-link' href='#create'>Create a Hunt</a></li>
            }
            <li className='nav-item'><a className='nav-link' href='#hunts'>Hunts</a></li>
            <li className='nav-item'><a className='nav-link' href='#hunters'>Hunters</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default NavBar
