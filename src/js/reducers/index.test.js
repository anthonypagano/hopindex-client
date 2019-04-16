import rootReducer from "./index";

describe('rootReducer', () => {

  it('should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual({"beers": [], "recentBeers": []})
  })

})