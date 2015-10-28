import 'babel-core/polyfill' // Får Object.assign att lira i applikationen
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './data/reducers'
import App from './app'

// Redux DevTools store enhancers
import { devTools, persistState } from 'redux-devtools';
// React components for Redux DevTools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react'

console.log('store', store)
ReactDOM.render(
<div>
  <Provider store={store}>
    <App />
  </Provider>
  <DebugPanel top right bottom>
    <DevTools store={store} monitor={LogMonitor} />
  </DebugPanel>
  </div>,
  document.getElementById('root')
)
