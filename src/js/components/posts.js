import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";
export class Post extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getData();
  }
  render() {
    return (
      <ul>
        {this.props.beers.map(beer => (
          <li key={beer.id}>
            {beer.title}
          </li>
        ))}
      </ul>
    );
  }
}
function mapStateToProps(state) {
  return {
    beers: state.remoteArticles.slice(0, 10)
  };
}
export default connect(mapStateToProps,{ getData })(Post);