import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from "react-redux";
import { getData } from "../actions/index";
import Header from './header';
import Home from './home';
import HowTo from './how-to';
import Recent from './recent';

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
            <main role="main">
              <Route exact path="/" component={Home} />
              <Route exact path="/how" component={HowTo} />
              <Route exact path="/recent" component={Recent} />
            </main>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ beers = {} }) => ({ beers });

export default connect(mapStateToProps, { getData })(App);