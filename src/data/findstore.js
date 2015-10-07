import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { APISTART, APISUCCESS, APIFAILED } from './actionCreators'
import thunkMiddleware from 'redux-thunk'
import createEngine from 'redux-storage/engines/localStorage'
import storage from 'redux-storage'

const engine = createEngine('myState')
const storageMiddleware = storage.createMiddleware(engine)
// Define store shape
const initialState = {
    somefield: ''
  }
}

const createStoreWithMiddleware = compose(
  applyMiddleware(storageMiddleware, thunkMiddleware)
)(createStore)

function mainReducer (state = initialState, action) {
  switch (action.type) {
    case APISTART:
      return Object.assign({}, state, {
        isFetching: true,
        fetchFailed: false
      })
    case APISUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        fetchFailed: false,
        response: action.response,
      })
    case APIFAILED:
      return Object.assign({}, state, {
        isFetching: false,
        fetchFailed: true
      })
    default:
      return state
  }
}

const reducer = storage.reducer(mainReducer)

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
var store = createStoreWithMiddleware(reducer)
const load = storage.createLoader(engine)
load(store)

export default store
