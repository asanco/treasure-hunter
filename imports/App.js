import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import MyMap from './MyMap';
import NavBar from './NavBar';

class App extends React.Component {
  constructor() {
    super();
    this.state = { open: true };
  }

  render() {
    return (
      <div>
      <NavBar />
      <MyMap />
      </div>
    );
  }
}

export default App;
