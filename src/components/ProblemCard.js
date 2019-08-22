import React, { Component } from 'react';
import axios from 'axios';

export default class ProblemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      problem: [],
      devURL: 'http://localhost:5000',
      prodURL: 'https://my-json-server.typicode.com/ryanboris/json/results'
    };
  }

  async componentDidMount() {
    const { devURL, prodURL } = this.state;
    try {
      const { data } = await axios.get(`${prodURL}`);

      this.setState({ problem: data.data.problems });
    } catch (err) {
      console.error({ message: err.message });
    }
  }

  render() {
    const { problem } = this.state;
    console.log(problem);
    return (
      <div>
        {problem.map((unit) => (
          <div key={unit.problem_title}>
            <p>{unit.problem_title}</p>
            <p>{unit.problem_category}</p>
            <p>{unit.problem_description}</p>
            <p>{unit.date_created}</p>
            <p>{unit.created_by}</p>
            <p>{unit.sign_ups}</p>
          </div>
        ))}
      </div>
    );
  }
}
