import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
import HomePage from './HomePage';
import About from './About';
import HowItWorks from './HowItWorks';
import Login from './Login';
import Register from './Register';
import Footer from './Footer';
import ProblemDashboard from './problemdashboard';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />

        <Route exact path="/" component={HomePage} />
        <Route path="/problems" component={ProblemDashboard} />
        <Route path="/about" component={About} />
        <Route path="/howitworks" component={HowItWorks} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <Footer />
      </div>
    );
  }
}
