import React, { Component } from 'react';
import axios from 'axios';
import PorblemCard from './components/ProblemCard';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <PorblemCard />
      </div>
    );
  }
}
