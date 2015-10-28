import { createStore } from 'redux'
import { RANDOMIZE } from './action-creators'

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
  switch (action.type) {
    case RANDOMIZE:
      let giveMeRandom = () => (Math.round(Math.random() * 1000))
      let newList = []
      for (let i = 0; i < action.length; i++) {
        newList.push(giveMeRandom())
      }
      return Object.assign({}, state, {
        list: newList
      })
      break
    case CLEANIT:
      let cleanList = []
      for(let i = 0; i < action.length; i++) {
        cleanList.push(25)
      }
      return Object.assign({}, state, {
        list: cleanList
      })
    default: //Om ingen action signalerats ska man returnera samma state som kom in som argument
      return state
  }
}

export default createStore(reducer)
