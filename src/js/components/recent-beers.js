import React, { Component } from "react";
import { connect } from "react-redux";
import { getRecentBeers } from "../actions/index";
export class RecentBeers extends Component {

  componentDidMount() {
    this.props.getRecentBeers();
  }

  render() {
    const beers = this.props.beers.map((beer) =>
      <ul key={beer.id}>
        <li>{beer.beerName}</li>
        <li>{beer.style}</li>
        <li>{beer.abv}</li>
        <li>{beer.brewery}</li>
        <li>{beer.rating}</li>
        <li>{beer.cityState}</li>
        <li>{beer.notes}</li>
        <button onClick={() => this.props.deleteBeer(beer.id)}>X</button>
      </ul>
    );

    return (
      <section>
        {beers}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    beers: state.beers
  };
}

export default connect(mapStateToProps,{ getRecentBeers })(RecentBeers);