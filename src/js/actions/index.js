// src/js/actions/index.js
export const ADD_BEER = "ADD_BEER";
export function addBeer(payload) {
  return { 
    type: "ADD_BEER", 
    payload 
  };
}

export const SEARCH = "SEARCH";
export function search(value) {
  return {
    type: SEARCH, 
    value
  };
}

export const DELETE_BEER = "DELETE_BEER";     
export function deleteBeer(id){
  return {
    type: DELETE_BEER,
    id    
  };
}

export function getData() {
    return function(dispatch) {
      return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "DATA_LOADED", payload: json });
        });
    };
  }

export function getRecentBeers() {
    return function(dispatch) {
      return fetch("https://dry-depths-20265.herokuapp.com/recent", {mode: 'no-cors'})
        .then(response => response.json())
        .then(json => {
          dispatch({ type: "RECENT_BEERS", payload: json });
        });
    };
  }