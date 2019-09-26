import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";

import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import { getProblems, getPopular, getUsers } from "../../actions";
import ProblemCard from "./ProblemCard";
import FeatureCard from "./FeatureCard";

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
  gridPadding: { padding: "1.5rem 3rem" },
  greyBackground: { backgroundColor: "#f6f7fb" },
  minimumWidth: { minWidth: "8rem" },
  minimumHeight: { minHeight: window.innerHeight - 8 * 16 },
  divider: { borderTop: "1px #bdb7b7 solid" },
  topPadding: { paddingTop: "3rem" },
  whiteBackground: { backgroundColor: "#fffff" },
  bottomMargin: { marginBottom: "1.5rem" },
  red: { color: "#bb1333" }
};

class ProblemDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedCategory: "all",
      selectByName: "",
      selectedStatus: "start",
      idsObject: {}
    };
  }

  componentDidMount() {
    this.props.getProblems();
    this.props.getPopular();
    this.props.getUsers().then(() => {
      const idObject = {};
      this.props.users.map(user => {
        if (idObject[user.problem_id]) {
          idObject[user.problem_id] += 1;
          return null;
        }
        idObject[user.problem_id] = 1;
        return null;
      });
      this.props.problems.map(problem => {
        if (!idObject[problem.id]) {
          idObject[problem.id] = 0;
          return null;
        }
        return null;
      });
      this.setState(prevState => ({ ...prevState, idsObject: idObject }));
    });
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
    }
    return problems;
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

    return null;
  };

  render() {
    return (
      <div className={this.props.classes.minimumHeight}>
        <div className={this.props.classes.bottomMargin}>
          <Typography
            component="h1"
            variant="h4"
            align="center"
            className={this.props.classes.topPadding}
            gutterBottom
          >
            Crowdsourced Problems - Idea Management Platform
          </Typography>
          <FormControl fullWidth>
            <Grid container justify="center" alignItems="flex-end">
              <Grid item xs={5} sm={3} align="center">
                <TextField
                  id="select-name"
                  label="Search By Name"
                  value={this.state.selectByName}
                  onChange={this.handleChange}
                  autoComplete="off"
                  className={this.props.classes.minimumWidth}
                />
              </Grid>
              <Grid item xs={5} sm={3} align="center">
                <Typography
                  component="h3"
                  variant="body2"
                  color="textSecondary"
                >
                  Or Search By Category ↓{" "}
                </Typography>
                <Select
                  className={this.props.classes.minimumWidth}
                  value={this.state.selectedCategory}
                  onChange={this.categorySelected}
                  inputprops={{
                    name: this.state.selectedCategory,
                    id: "categories"
                  }}
                >
                  {category.map(cat => (
                    <MenuItem key={cat} value={cat}>
                      {cat.toUpperCase()}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>
          </FormControl>
        </div>

        <div
          className={`${this.props.classes.greyBackground} ${this.props.classes.divider}`}
        >
          <Grid className={this.props.classes.gridPadding}>
            <Typography component="h1" variant="h4" gutterBottom>
              Featured Cards
            </Typography>

            {this.props.fetchingPopular ? (
              <Grid container alignItems="center" direction="column">
                <Typography align="center">Loading data...</Typography>
                <CircularProgress className={this.props.classes.red} />
              </Grid>
            ) : (
              <Grid container spacing={2}>
                {this.props.featured.map(feature => (
                  <Grid item key={feature.id} xs={12} sm={6} md={3}>
                    <FeatureCard problem={feature} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Grid>
        </div>

        <div className={this.props.classes.divider}>
          <Grid className={this.props.classes.gridPadding}>
            <Typography component="h1" variant="h4" gutterBottom>
              Problem Cards
            </Typography>
            {this.props.fetchingProblems ? (
              // Need to figure out how to hide "error message", currently using 'height:40rem' to mask text lol
              <Grid
                container
                alignItems="center"
                direction="column"
                style={{ height: "40rem" }}
              >
                <Typography align="center">Loading data...</Typography>
                <CircularProgress className={this.props.classes.red} />
              </Grid>
            ) : null}
            {this.allProblems().length > 0 ? (
              <Grid container spacing={2}>
                {this.allProblems().map(problem => (
                  <Grid item key={problem.id} xs={12} sm={6} md={4}>
                    <ProblemCard
                      problem={problem}
                      signups={this.state.idsObject[problem.id]}
                    />
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
          </Grid>
        </div>
      </div>
    );
  }
}

ProblemDashboard.defaultProps = {
  getProblems: function hi() {},
  getPopular: function hi() {},
  getUsers: function hi() {},
  fetchingPopular: false,
  fetchingProblems: false,
  problems: [],
  featured: [],
  classes: {},
  users: []
};

ProblemDashboard.propTypes = {
  getProblems: PropTypes.func,
  getPopular: PropTypes.func,
  getUsers: PropTypes.func,
  problems: PropTypes.arrayOf(PropTypes.object),
  featured: PropTypes.arrayOf(PropTypes.object),
  classes: PropTypes.objectOf(PropTypes.string),
  users: PropTypes.arrayOf(
    PropTypes.shape({
      email: PropTypes.string,
      full_name: PropTypes.string,
      id: PropTypes.number,
      problem_id: PropTypes.number
    })
  ),
  fetchingPopular: PropTypes.bool,
  fetchingProblems: PropTypes.bool
};

const mapStateToProps = ({ problems, users }) => ({
  problems: problems.problems,
  fetchingPopular: problems.fetchingPopular,
  fetchingProblems: problems.fetchingProblems,
  featured: problems.popular,
  users: users.users
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { getProblems, getPopular, getUsers }
  )(ProblemDashboard)
);
