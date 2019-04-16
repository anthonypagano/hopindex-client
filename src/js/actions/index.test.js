import {SEARCH, search, 
    DATA_LOADED, dataLoaded, 
    ADD_BEER_TO_LIST, addBeerToList,
    DELETE_BEER_FROM_LIST, deleteBeerFromList,
    RECENT_BEERS, recentBeers,
    UPDATE_RECENT_BEERS, updateRecentBeers} from './index';

describe('search', () => {
    it('Should return the action', () => {
        const value = 'Singlecut';
        const action = search(value);
        expect(action.type).toEqual(SEARCH);
        expect(action.value).toEqual(value);
    });
});

describe('dataLoaded', () => {
    it('Should return the action', () => {
        const payload = [];
        const action = dataLoaded(payload);
        expect(action.type).toEqual(DATA_LOADED);
        expect(action.payload).toEqual(payload);
    });
});

describe('addBeerToList', () => {
    it('Should return the action', () => {
        const payload = [];
        const action = addBeerToList(payload);
        expect(action.type).toEqual(ADD_BEER_TO_LIST);
        expect(action.payload).toEqual(payload);
    });
});

describe('deleteBeerFromList', () => {
    it('Should return the action', () => {
        const id = "1234567890";
        const action = deleteBeerFromList(id);
        expect(action.type).toEqual(DELETE_BEER_FROM_LIST);
        expect(action.id).toEqual(id);
    });
});

describe('recentBeers', () => {
    it('Should return the action', () => {
        const payload = [];
        const action = recentBeers(payload);
        expect(action.type).toEqual(RECENT_BEERS);
        expect(action.payload).toEqual(payload);
    });
});

describe('updateRecentBeers', () => {
    it('Should return the action', () => {
        const action = updateRecentBeers();
        expect(action.type).toEqual(UPDATE_RECENT_BEERS);
    });
});
