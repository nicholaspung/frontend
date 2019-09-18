import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";

import { getProblems } from "../actions";
import ProblemCard from "./ProblemCard";

const category = [
  "all",
  "health",
  "technology",
  "fitness",
  "personal",
  "science",
  "finance"
];

const styles = {
  gridPadding: { padding: "1.5rem" },
  greyBackground: { backgroundColor: "#f6f7fb" },
  minimumWidth: { minWidth: "8rem" },
  minimumHeight: { minHeight: "40rem" }
};

class ProblemDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedCategory: "all",
      selectByName: "",
      selectedStatus: "start"
    };
  }

  componentDidMount() {
    this.props.getProblems();
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({
      selectedStatus: "name",
      selectByName: event.target.value
    });
  };

  categorySelected = event => {
    this.setState({
      selectedStatus: "category",
      selectedCategory: event.target.value
    });
  };

  findByCategory = () => {
    const selected = this.state.selectedCategory.toLowerCase();
    const problems = this.props.problems.filter(
      prob => prob.problem_category.toLowerCase() === selected
    );
    if (selected === "all") {
      return this.props.problems;
    } else {
      return problems;
    }
  };

  findByName = () => {
    const userInput = this.state.selectByName.trim();
    const problems = this.props.problems.filter(prob =>
      prob.problem_title.toLowerCase().includes(userInput.toLowerCase())
    );
    return problems;
  };

  allProblems = () => {
    if (this.state.selectedStatus === "start") {
      return this.props.problems;
    }

    if (this.state.selectedStatus === "category") {
      return this.findByCategory();
    }
    if (this.state.selectedStatus === "name") {
      return this.findByName();
    }
  };

  render() {
    return (
      <Grid container className={this.props.classes.greyBackground}>
        <Container className={this.props.classes.minimumHeight}>
          <FormControl spacing={12} className={this.props.classes.minimumWidth}>
            <TextField
              id="select-name"
              label="Filter By Name"
              value={this.state.selectByName}
              onChange={this.handleChange}
              margin="normal"
              autoComplete="off"
            />

            <Select
              value={this.state.selectedCategory}
              onChange={this.categorySelected}
              inputprops={{
                name: this.state.selectedCategory,
                id: "categories"
              }}
            >
              {category.map((cat, index) => (
                <MenuItem key={cat} value={cat}>
                  {cat.toUpperCase()}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {this.allProblems().length > 0 ? (
            <Grid
              container
              spacing={2}
              className={this.props.classes.gridPadding}
            >
              {this.allProblems().map(problem => (
                <Grid item key={problem.id} xs={12} sm={6} md={4}>
                  <ProblemCard problem={problem} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Grid
              container
              justify="center"
              className={this.props.classes.gridPadding}
            >
              <Typography>
                Sorry {this.state.selectedCategory.toUpperCase()} problems are
                not available.
              </Typography>
            </Grid>
          )}
        </Container>
      </Grid>
    );
  }
}

ProblemDashboard.defaultProps = {
  getProblems: function hi() {},
  problems: [],
  classes: {}
};

ProblemDashboard.propTypes = {
  getProblems: PropTypes.func,
  problems: PropTypes.arrayOf(PropTypes.object),
  classes: PropTypes.objectOf(PropTypes.string)
};

const mapStateToProps = ({ problems }) => ({ problems: problems.problems });

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { getProblems }
  )(ProblemDashboard)
);
