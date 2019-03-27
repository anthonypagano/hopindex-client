import React, { Component } from "react";
import { connect } from "react-redux";
import { getRecentBeers } from "../actions/index";
export class Post extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getRecentBeers();
  }
  render() {
    return (
      <ul>
        {this.props.beers.map(beer => (
          <li key={beer.id}>
            {beer.beerName}
          </li>
        ))}
      </ul>
    );
  }
}
function mapStateToProps(state) {
  return {
    beers: state.beers
  };
}
export default connect(mapStateToProps,{ getRecentBeers })(Post);