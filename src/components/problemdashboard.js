import React from 'react';
import axios from 'axios';


class ProblemDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      problems: [],
      devURL: 'http://localhost:5000',
      prodURL: 'https://my-json-server.typicode.com/ryanboris/json/results'
    };
  }

  async componentDidMount() {
    const { devURL, prodURL } = this.state;
    try {
      const { data } = await axios.get(`${prodURL}`);
      this.setState({ problems: data.data.problems });
    } catch (err) {
      console.error({ message: err.message });
    }
  }

  render() {
    const { problems } = this.state;
    return (

      <div>
        <h1>Testing Frontend/Server/Database connection...</h1>
        {problems.map((problem) => (
          <div key={problem.problem_title}>
            <p>{problem.problem_title}</p>
            <p>{problem.problem_category}</p>
            <p>{problem.problem_description}</p>
          </div>
        ))}
      </div>

    );
  }
}


export default ProblemDashboard;
