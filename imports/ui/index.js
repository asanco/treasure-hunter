import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import { HashRouter, Route } from 'react-router-dom'
import App from './App'

ReactDOM.render((
  <HashRouter>
    <Route component={App} />
  </HashRouter>
), document.getElementById('root'))
registerServiceWorker()
