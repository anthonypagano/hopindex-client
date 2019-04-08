export const SEARCH = "SEARCH";
export function search(value) {
  return {
    type: SEARCH,
    value
  };
}

export const DATA_LOADED = "DATA_LOADED";
export function dataLoaded(payload) {
  return {
    type: "DATA_LOADED",
    payload
  };
};

// load all data
export function getData() {
  return function(dispatch) {
    return fetch(`http://localhost:8080/beer`)
      .then(response => response.json())
      .then(json => {
        dispatch(dataLoaded(json));
    });
  };
}

export const ADD_BEER_TO_LIST = "ADD_BEER_TO_LIST";
export function addBeerToList(payload) {
  return {
    type: "ADD_BEER_TO_LIST",
    payload
  };
};

export const addBeer = (payload) => dispatch => {
  fetch(`http://localhost:8080/beer`, {
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
  .then(id => {
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
  fetch(`http://localhost:8080/beer/${id}`, {
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

//return the 5 most recent entries
export function getRecentBeers() {
  return function(dispatch) {
    return fetch(`http://localhost:8080/recent`, {
      mode: 'cors'
    })
    .then(response => response.json())
    .then(json => {
      dispatch({ type: "RECENT_BEERS", payload: json });
    });
  };
}