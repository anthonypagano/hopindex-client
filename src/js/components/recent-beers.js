import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRecentBeers } from '../actions/index';

export class RecentBeers extends Component {

  render() {
    const beers = this.props.recentBeers.map((beer) =>
      <ul className="beer-details" key={beer.id}>
            <li className="brewery-name">{beer.brewery}</li>
            <li className="beer-name">{beer.beerName}</li>
            <li className="style">{beer.style}</li>
            <li className="abv">{beer.abv}</li>
            <li className="rating">{beer.rating}</li>
            <li className="city-state">{beer.cityState}</li>
            <li className="notes">{beer.notes}</li>
            <li className="deletebtnwrapper">&nbsp;</li>
      </ul>
    );

    return (
      <section className="search-results">
        <ul className="mobile-column-header">
          <li className="brewery-name column-header">Brewery</li>
          <li className="beer-name column-header">Beer Name</li>
          <li className="style column-header">Style</li>
          <li className="abv column-header">ABV</li>
          <li className="rating column-header">Rating</li>
          <li className="city-state column-header">Location</li>
          <li className="notes column-header">Notes</li>
          <li className="deletebtnwrapper">&nbsp;</li>
        </ul>
        { beers }
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    recentBeers: state.recentBeers
  };
}

export default connect(mapStateToProps,{ getRecentBeers })(RecentBeers);