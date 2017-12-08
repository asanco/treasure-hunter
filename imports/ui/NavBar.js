
import React, { Component } from 'react'

class NavBar extends Component {
  render () {
    return (
      <div >
      <nav className='navbar sticky-top navbar-dark navbar navbar-expand-lg'>
        <a href="#welcome"><img height='64' width='64' alt='Website icon of a map' src='../../treasure-map.png' /></a>
        <a className='navbar-brand' href='#home'>Treasure Hunter</a>
        <ul className='navbar-nav'>

        </ul>

        <ul className='nav navbar-nav ml-auto'>
          <li className='nav-item'><a className='nav-link' href='#home'>Home</a></li>
          <li className='nav-item'><a className='nav-link' href='#design'>Create Hunt</a></li>
          <li className='nav-item'><a className='nav-link' href='#login'>Login</a></li>
        </ul>
      </nav>
      </div>
    )
  }
}

export default NavBar
