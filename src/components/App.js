import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header';
import HomePage from './HomePage';
import About from './About';
import HowItWorks from './HowItWorks';
import Footer from './Footer';
import ProblemDashboard from './problemdashboard';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <CssBaseline maxWidth="lg" />
        <Container>
          <Header />

          <Route exact path="/" component={HomePage} />
          <Route path="/problems" component={ProblemDashboard} />
          <Route path="/about" component={About} />
          <Route path="/howitworks" component={HowItWorks} />

          <Footer />
        </Container>
      </>
    );
  }
}
