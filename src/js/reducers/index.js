import { ADD_BEER_TO_LIST, DELETE_BEER_FROM_LIST, DATA_LOADED } from "../actions/index";

const initialState = {
  beers: []
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

  if (action.type === "RECENT_BEERS") {
    return Object.assign({}, state, {
      beers: state.beers.concat(action.payload)
  });
}

  return state;
}

export default rootReducer;