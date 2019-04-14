import { ADD_BEER_TO_LIST, DELETE_BEER_FROM_LIST, DATA_LOADED, RECENT_BEERS, UPDATE_RECENT_BEERS } from "../actions/index";

const initialState = {
  beers: [],
  recentBeers: []
}

function rootReducer(state = initialState, action) {
  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      beers: state.beers.concat(action.payload)
    });
  }

  if (action.type === ADD_BEER_TO_LIST) {
    return Object.assign({}, state, {
      beers: state.beers.concat(action.payload)
    });
  }

  if (action.type === DELETE_BEER_FROM_LIST) {
    return Object.assign({}, state, {
      beers: state.beers.filter(beer => beer.id !== action.id)
    });
  }

  if (action.type === RECENT_BEERS) {
    return Object.assign({}, state, {
      recentBeers: state.recentBeers.concat(action.payload)
    });
  }

  if (action.type === UPDATE_RECENT_BEERS) {
    state = Object.assign({}, initialState);
  }

  return state;
}

export default rootReducer;