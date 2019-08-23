import React from 'react';
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});
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
        <MyButton type="submit">Submit Problem</MyButton>
      </form>
    );
  }
}

export default ProblemSubmission;
