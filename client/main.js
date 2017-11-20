import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import MyMap from '../imports/MyMap';
import App from '../imports/App';

  Meteor.startup(() => {
    render(<App />, document.getElementById('render-target'));
  });
