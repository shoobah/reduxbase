import 'babel-core/polyfill' // Får Object.assign att lira i applikationen
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './data/reducers'
import App from './App'

console.log('store', store)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
