/// <reference path="../typings/react/react-global.d.ts" />
/// <reference path="../typings/redux/react-redux.d.ts" />
import ReactDOM from 'react-dom';
var react_redux_1 = require('react-redux');
var reducers_1 = require('./data/reducers');
var App = require('./app');
var react_1 = require('redux-devtools/lib/react');
ReactDOM.render(<div>
    <react_redux_1.Provider store={reducers_1["default"]}>
      <App />
      </Provider>,
    <react_1.DebugPanel top right bottom>
      <react_1.DevTools store={reducers_1["default"]} monitor={react_1.LogMonitor}/>
      </DebugPanel>
    </div>, document.getElementById('root'));
