import React from 'react'
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { HashRouter } from 'react-router-dom'

import '../imports/startup/accounts-config.js'
import App from '../imports/ui/App'

Meteor.startup(() => {
  render(
    <HashRouter>
      <App />
    </HashRouter>
    , document.getElementById('render-target'))
  registerServiceWorker()
})
