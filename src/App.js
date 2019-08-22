import React, { Component } from 'react';
import PorblemCard from './components/ProblemCard';

export default class App extends Component {
  render() {
    const { users } = this.state;
    return (
      <div>
        <PorblemCard />
      </div>
    );
  }
}
