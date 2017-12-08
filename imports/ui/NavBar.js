
import React, { Component } from 'react'

class NavBar extends Component {
  render () {
    return (
      <div >
      <nav className='navbar sticky-top navbar-dark navbar navbar-expand-lg'>
        <a className='navbar-brand' href='#home'>T.H.</a>
        <ul className='navbar-nav'>
          <li className='nav-item'><a className='nav-link' href='#home'>Home</a></li>
          <li className='nav-item'><a className='nav-link' href='#design'>Design</a></li>
        </ul>

        <ul className='nav navbar-nav ml-auto'>
          <li className='nav-item'><a className='nav-link' href='#login'>Login</a></li>
        </ul>
      </nav>
      </div>
    )
  }
}

export default NavBar
