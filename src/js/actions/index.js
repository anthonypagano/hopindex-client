import { API_ORIGIN } from "../config";

// search the store
export const SEARCH = "SEARCH";
export function search(value) {
  return {
    type: SEARCH,
    value
  };
}

// load all data
export const DATA_LOADED = "DATA_LOADED";
export function dataLoaded(payload) {
  return {
    type: "DATA_LOADED",
    payload
  };
};

export function getData() {
  return function(dispatch) {
    return fetch(`${API_ORIGIN}/beer`)
      .then(response => response.json())
      .then(json => {
        dispatch(dataLoaded(json));
    });
  };
}

// add a beer to the index
export const ADD_BEER_TO_LIST = "ADD_BEER_TO_LIST";
export function addBeerToList(payload) {
  return {
    type: "ADD_BEER_TO_LIST",
    payload
  };
};

export const addBeer = (payload) => dispatch => {
  fetch(`${API_ORIGIN}/beer`, {
    method: "POST",
    mode: "cors",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(payload)
  })
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(payload => {
    dispatch(addBeerToList(payload));
  });
};

//remove a beer from the list
export const DELETE_BEER_FROM_LIST = "DELETE_BEER_FROM_LIST";
export function deleteBeerFromList(id){
  return {
    type: DELETE_BEER_FROM_LIST,
    id
  };
};

export const deleteBeer = (id) => dispatch => {
  fetch(`${API_ORIGIN}/beer/${id}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "content-type": "application/json"
    }
  })
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(id => {
    dispatch(deleteBeerFromList(id));
  });
};

//handle recent beers list
export const RECENT_BEERS = "RECENT_BEERS";
export function recentBeers(payload) {
  return {
    type: "RECENT_BEERS",
    payload
  };
};

//return the 5 most recent entries
export function getRecentBeers() {
  return function(dispatch) {
    return fetch(`${API_ORIGIN}/recent`, {
      mode: 'cors'
    })
    .then(response => response.json())
    .then(json => {
      dispatch(recentBeers(json));
    });
  };
}

export const UPDATE_RECENT_BEERS = "UPDATE_RECENT_BEERS";
export function updateRecentBeers() {
  return {
    type: "UPDATE_RECENT_BEERS"
  };
};