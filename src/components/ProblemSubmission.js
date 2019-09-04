import React from "react";
import { connect } from "react-redux";
import { addProblems } from "../actions";
import { styled } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import FilledInput from "@material-ui/core/FilledInput";

const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px"
});

const MyFilledInput = styled(FilledInput)({
  minWidth: 200
});

const formStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start"
};

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
class ProblemSubmission extends React.Component {
  constructor() {
    super();
    this.state = {
      newProblem: {
        problem_title: "",
        problem_description: "",
        problem_category: "",
        date_created: "",
        created_by: ""
      },
      error: ""
    };
  }

  onInputChange = name => event => {
    event.persist();
    this.setState(prevState => ({
      ...prevState,
      newProblem: {
        ...prevState.newProblem,
        [name]: event.target.value
      }
    }));
  };

  onButtonSubmit = event => {
    event.preventDefault();
    let problem = this.state.newProblem;
    if (problem.problem_category === "") {
      this.setState(prevState => {
        return {
          ...prevState,
          error: "You must choose a category."
        };
      });
      return;
    }

    let today = new Date();
    problem.date_created = `${
      months[today.getMonth()]
    } ${today.getDate()}, ${today.getFullYear()}`;
    this.props.addProblems(problem);
    console.log("submitted!");
    // to redirect
    this.props.history.push(`/problems`);
    // this.props.history.push(`/problem-details/${res.data.id}`)
    // redirect to problem description page of problem
  };

  render() {
    return (
      <form
        onSubmit={event => this.onButtonSubmit(event)}
        autoComplete="off"
        style={formStyles}
      >
        <TextField
          id="problem_title"
          label="Problem Title"
          value={this.state.newProblem.problem_title}
          onChange={this.onInputChange("problem_title")}
          margin="normal"
          variant="filled"
        />
        <FormControl variant="filled" style={{ marginTop: 8 }}>
          <InputLabel htmlFor="problem-category">Problem Category</InputLabel>
          <Select
            native
            value={this.state.newProblem.problem_category}
            onChange={this.onInputChange("problem_category")}
            input={
              <MyFilledInput name="problem_category" id="problem-category" />
            }
          >
            <option value="" />
            <option value="Health">Health</option>
            <option value="Technology">Technology</option>
            <option value="Fitness">Fitness</option>
            <option value="Personal">Personal</option>
            <option value="Science">Science</option>
            <option value="Finance">Finance</option>
          </Select>
          {this.state.error ? <span>{this.state.error}</span> : null}
        </FormControl>
        <TextField
          id="problem_description"
          label="Problem Description"
          multiline
          fullWidth
          rowsMax="4"
          value={this.state.newProblem.problem_description}
          onChange={this.onInputChange("problem_description")}
          margin="normal"
          variant="filled"
        />
        <TextField
          id="email"
          label="Email Address"
          type="email"
          value={this.state.newProblem.created_by}
          onChange={this.onInputChange("created_by")}
          margin="normal"
          variant="filled"
        />
        <MyButton type="submit">Submit Problem</MyButton>
      </form>
    );
  }
}

export default connect(
  null,
  { addProblems }
)(ProblemSubmission);
