import fetch from 'isomorphic-fetch'
import Config from 'config'

// Dispatch when api is set to begin.
export const APISTART = 'APISTART'
function requestSearch (query) {
  return {
    type: APISTART,
    message: 'Started api',
  query}
}

// Dispatch this when request returns
export const APISUCCESS = 'APISUCCESS'
export function apiSuccess (json, query) {
  return {
    type: APISUCCESS,
    response: json,
    query: query,
    message: 'Found stuff'
  }
}

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    let error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export const APIFAILED = 'APIFAILED'
function apiFailed (error) {
  return {
    type: APIFAILED,
    message: error
  }
}

export function doSearch (query) {
  return (dispatch) => {
    dispatch(requestSearch(query))
    return fetch(Config.apiUrl, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(query)
    })
      .then(checkStatus)
      .then(response => response.json())
      .then(json => dispatch(apiSuccess(json, query)))
      .catch(error => dispatch(apiFailed(error)))
  }
}
