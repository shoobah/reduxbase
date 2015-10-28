
import { RANDOMIZE, HIGHER } from './action-creators'
// Redux utility functions
import { compose, createStore, applyMiddleware } from 'redux';
// Redux DevTools store enhancers
import { devTools, persistState } from 'redux-devtools';
// React components for Redux DevTools
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

const initialState = {
  list: []
}

//Redux: en reducer är en (ren)funktion som tar state och action och returnerar en ny state beroende på vilken action
//som ska utföras på den
//man kan ange default värden i funktioner, här används det för att vi ska få initialState som startvärde på state när
//applikationen startas.
function reducer (state = initialState, action) {
  //vår action som definierats i action-creators skickar med typen RANDOMIZE och ett värde på hur många
  //värden som ska slumpas
  let newList = [];

  switch (action.type) {
    case RANDOMIZE:
      let giveMeRandom = () => (Math.round(Math.random() * 1000))

      for (let i = 0; i < action.length; i++) {
        newList.push(giveMeRandom())
      }
      return Object.assign({}, state, {
        list: newList
      })
      break;
    case HIGHER:
      for (let i = 0; i < 10; i++) {

        let giveValue = () => (Math.round(Math.random() * action.value.max));

        if(i !== 0){
          var nextValue = newList[i-1] + giveValue();
          newList.push(nextValue);
        } else {
        newList.push(giveValue());
        }

      }
      return Object.assign({}, state, {
        list: newList
      })
    break;
    default: //Om ingen action signalerats ska man returnera samma state som kom in som argument
      return state
  }
}

const finalCreateStore = compose(
  // Enables your middleware: // any Redux middleware, e.g. redux-thunk
  // Provides support for DevTools:
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

export default finalCreateStore(reducer);

//export default createStore(reducer)
