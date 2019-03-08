import { ADD_BEER, DELETE_BEER } from "../actions/index";

const initialState = {
    beers: [
      {id: 1, beerName: 'In And Around The Lake', style: 'IIPA', abv: '8.5', brewery: 'Singlecut Beersmiths', rating: '3', cityState: 'Astoria, NY', notes: 'double dry hopped IIPA with honey'},
      {id: 2, beerName: 'The Stockist', style: 'IIPA', abv: '8.5', brewery: 'Relic Brewing Company', rating: '3', cityState: 'Plainville, CT', notes: 'double dry hopped'},
      {id: 3, beerName: 'Spectral Beast', style: 'Porter', abv: '10', brewery: 'Relic Brewing Company', rating: '3', cityState: 'Plainville, CT', notes: 'roasty but strong'}
  ],
  remoteArticles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_BEER) {
    return Object.assign({}, state, {
      beers: state.beers.concat(action.payload)
    });
  }

  if (action.type === DELETE_BEER) {
    return Object.assign({}, state, {
      beers: state.beers.filter(beer => beer.id !== action.id)
    });
  }

  if (action.type === "DATA_LOADED") {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }

  return state;
}
export default rootReducer;