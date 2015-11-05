import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './data/reducers'
import App from './app'

import {devTools, persistState} from 'redux-devtools'
import {DevTools, DebugPanel, LogMonitor} from 'redux-devtools/lib/react'

ReactDOM.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>,
    <DebugPanel top right bottom>
      <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
  </div>,
  document.getElementById('root')
)
