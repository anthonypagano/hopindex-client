import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './header.js';
import Home from './home.js';
const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
    </div>
  </Router>
);
export default App;