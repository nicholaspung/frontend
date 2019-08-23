import React from 'react';
import { Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header';
import HomePage from './HomePage';
import About from './About';
import HowItWorks from './HowItWorks';
import Footer from './Footer';
import ProblemDashboard from './problemdashboard';
import ProblemCard from './ProblemCard';
import DetailsPage from './DetailsPage';
import ProblemSubmission from './ProblemSubmission';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/problems" component={ProblemDashboard} />
        <Route path="/submitaproblem" component={ProblemSubmission} />
        <Route path="/about" component={About} />
        <Route path="/howitworks" component={HowItWorks} />
        <Route path="/problem-details" component={ProblemCard} />
        <Route path="/problem-details/:id" component={DetailsPage} />
        <Footer />
      </Container>
    </>
  );
}
