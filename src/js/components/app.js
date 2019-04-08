import React, { Component } from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from "react-redux";
import Header from './header.js';
import Home from './home.js';
import { getData } from "../actions/index";

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ beers = {} }) => ({ beers });

export default connect(mapStateToProps, { getData })(App);