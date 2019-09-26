import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import ProblemSubmissionModal from "./ProblemSubmissionModal";
import { addProblems } from "../../actions";

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

const categories = [
  "Health",
  "Technology",
  "Fitness",
  "Personal",
  "Science",
  "Finance"
];

const styles = {
  head: { paddingTop: "1.5rem" },
  title: {
    paddingTop: "1rem",
    paddingBottom: "1rem"
  },
  inputFields: { paddingBottom: "1rem" },
  buttonBackground: { backgroundColor: "#bb1333" },
  buttonText: { color: "#ffffff" }
};
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
      error: "",
      modalHidden: true,
      modalResponse: ""
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
      this.setState(prevState => ({
        ...prevState,
        error: "You must choose a category."
      }));
      return;
    }

    // Setting a date for backend to index
    const today = new Date();
    problem.date_created = `${
      months[today.getMonth()]
    } ${today.getDate()}, ${today.getFullYear()}`;

    // Created a promise in order to send data to modal & indicate to user that problem is submitted
    // Just tested and you don't need to create a promise, recommend only using setTimeout()
    const modalPromise = new Promise((resolve, reject) => {
      this.setState(prevState => ({
        ...prevState,
        modalHidden: false,
        modalResponse:
          "Your problem has been submitted and is waiting for approval."
      }));
      setTimeout(() => {
        resolve("Success!");
      }, 2000);
    });

    this.props
      .addProblems(problem)
      .then(() => modalPromise)
      .then(() => this.props.props.history.push("/problems"))
      .catch(() =>
        this.setState(prevState => ({
          ...prevState,
          modalHidden: false,
          modalResponse:
            "There was an error submitting your problem. Please try again."
        }))
      );
  };

  render() {
    return (
      <form onSubmit={event => this.onButtonSubmit(event)} autoComplete="off">
        <Container>
          <Typography
            variant="subtitle2"
            component="p"
            className={this.props.classes.head}
          >
            WHAT ARE YOU HAVING TROUBLE WITH?
          </Typography>
          <Typography
            variant="h3"
            component="h1"
            className={this.props.classes.title}
          >
            Problem Submission Overview
          </Typography>
          <Typography
            variant="body1"
            component="h2"
            className={this.props.classes.inputFields}
          >
            Tell us your problem idea, category, description, and an email
            address for us to follow up with.
          </Typography>
          <TextField
            id="problem_title"
            label="Problem Title"
            value={this.state.newProblem.problem_title}
            onChange={this.onInputChange("problem_title")}
            margin="normal"
            fullWidth
            required
            className={this.props.classes.inputFields}
          />
          <FormControl fullWidth required>
            <InputLabel htmlFor="problem-category">Problem Category</InputLabel>
            <Select
              value={this.state.newProblem.problem_category}
              onChange={this.onInputChange("problem_category")}
              inputProps={{
                name: "problem_category",
                id: "problem-category"
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {categories.map(category => (
                <MenuItem value={category} key={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
            {this.state.error ? <span>{this.state.error}</span> : null}
            <Typography
              component="p"
              variant="body2"
              className={this.props.classes.inputFields}
            >
              The category will help people use search criteria to find your
              problem.
            </Typography>
          </FormControl>
          <TextField
            id="problem_description"
            label="Problem Description"
            fullWidth
            value={this.state.newProblem.problem_description}
            onChange={this.onInputChange("problem_description")}
            margin="normal"
            required
            multiline
          />
          <Typography
            component="p"
            variant="body2"
            className={this.props.classes.inputFields}
          >
            Describe your problem in 280 characters or less. This will be
            displayed with the description on the Problems page.
          </Typography>
          <TextField
            id="email"
            label="Email Address"
            type="email"
            value={this.state.newProblem.created_by}
            onChange={this.onInputChange("created_by")}
            margin="normal"
            fullWidth
            required
            autoComplete="false"
            className={this.props.classes.inputFields}
          />
        </Container>
        <Grid item className={this.props.classes.buttonBackground}>
          <Button
            type="submit"
            fullWidth
            className={this.props.classes.buttonText}
          >
            Submit Problem
          </Button>
        </Grid>
        <ProblemSubmissionModal
          hidden={this.state.modalHidden}
          text={this.state.modalResponse}
        />
      </form>
    );
  }
}

ProblemSubmission.defaultProps = {
  classes: {},
  addProblems: function hi() {},
  props: {}
};

ProblemSubmission.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  addProblems: PropTypes.func,
  props: PropTypes.object
};

export default withStyles(styles)(
  connect(
    null,
    { addProblems }
  )(ProblemSubmission)
);
