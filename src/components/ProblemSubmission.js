import React from 'react';

class ProblemSubmission extends React.Component {
  constructor() {
    super();
    this.state = {
      newProblem: {
        problem_title: '',
        problem_description: '',
        problem_category: '',
        date_created: '',
        created_by: ''
      }
    };
  }

  onInputChange = (event) => {
    event.persist();
    this.setState((prevState) => ({
      ...prevState,
      newProblem: {
        ...prevState.newProblem,
        [event.target.name]: event.target.value
      }
    }));
  };

  onButtonSubmit = (event) => {
    event.preventDefault();
    console.log('submitted!');
    // submit problem to backend
    // redirect to problem description page of problem
  };

  render() {
    console.log(this.state.newProblem);
    return (
      <form onSubmit={(event) => this.onButtonSubmit(event)}>
        <p>Submit a problem</p>
        <input
          type="text"
          name="problem_title"
          placeholder="Problem title..."
          value={this.state.newProblem.problem_title}
          onChange={(event) => this.onInputChange(event)}
        />
        <input
          type="text"
          name="problem_category"
          placeholder="Problem category..."
          value={this.state.newProblem.problem_category}
          onChange={(event) => this.onInputChange(event)}
        />
        <textarea
          name="problem_description"
          placeholder="Problem description..."
          value={this.state.newProblem.problem_description}
          onChange={(event) => this.onInputChange(event)}
        />
        <input
          type="email"
          name="created_by"
          placeholder="Email address..."
          value={this.state.newProblem.created_by}
          onChange={(event) => this.onInputChange(event)}
        />
        <button type="submit">Submit Problem</button>
      </form>
    );
  }
}

export default ProblemSubmission;
