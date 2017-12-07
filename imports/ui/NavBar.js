
import React, {Component} from 'react'

class Navbar extends Component {
  render () {
    return (
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
    )
  }
}

export default Navbar
