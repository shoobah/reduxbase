/// <reference path="../typings/redux/redux.d.ts" />
/// <reference path="../typings/react/react-global.d.ts" />
/// <reference path="../typings/redux/react-redux.d.ts" />
import * as React from 'react';
import * as ReactDOM  from 'react-dom';
import {Provider} from 'react-redux';
import App from './app'
import store from './data/reducers'

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
