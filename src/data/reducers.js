import { createStore } from 'redux'
import { RANDOMIZE } from './action-creators'

const initialState = {
  list: []
}

function getRandomValue (max) {
  return Math.round(Math.random() * max)
}

function randomColor () {
  let r = getRandomValue(256)
  let g = getRandomValue(256)
  let b = getRandomValue(256)
  return 'rgba(' + r + ', ' + g + ', ' + b + ', 1' + ')'
}


//Redux: en reducer är en (ren)funktion som tar state och action och returnerar en ny state beroende på vilken action
//som ska utföras på den
//man kan ange default värden i funktioner, här används det för att vi ska få initialState som startvärde på state när
//applikationen startas.
function reducer (state = initialState, action) {
  //vår action som definierats i action-creators skickar med typen RANDOMIZE och ett värde på hur många
  //värden som ska slumpas
  switch (action.type) {
    case RANDOMIZE:
      let newList = []
      for (let i = 0; i < action.length; i++) {
        newList.push({
          value:getRandomValue(1000),
          color:randomColor()
        })
      }
      return Object.assign({}, state, {
        list: newList
      })
      break
    default: //Om ingen action signalerats ska man returnera samma state som kom in som argument
      return state
  }
}

export default createStore(reducer)
